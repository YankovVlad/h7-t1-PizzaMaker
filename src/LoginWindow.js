import './Modal.css'
import axios from 'axios'
import { useState } from 'react'
export const LoginWindow = (props) => {


    const [tel, setTel] = useState('')
    const [password, setPassword] = useState('')
    const [activeModal, setActiveModal] = useState(props.isActive)
    const [resPost, setRestPost] = useState(true)

    const update = (value, userData) => {
        props.updateApp(value, userData)

    }
    const updateClose = (value) => {
        props.updateClose(value)
    }
    const onClickButtonPost = () => {
        const data = {phone: tel, password: password}
        axios.post('http://localhost:3001/auth/sign-in', data)
            .then(
                response => {
                    const userData = response.data
                    const value = !activeModal
                    setActiveModal(value)
                    update(value, userData)
                },
                rej => {
                    setRestPost(false)
                    setTimeout(() => setRestPost(true), 3000)
                    
                }
            )
            
            
    }
    const onClickButtonCancel = () => {
        const value = !activeModal
        updateClose(value)
    }
    const onChangeTel = (event) => {
        setTel(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }


    return (
            <div className={'modal__login'}>
                <div className={'modal__guest'}></div>
                <div className={'modal__body'}>
                    <input className={resPost ? 'modal__input' : 'modal__input error'} type='tel' onChange={onChangeTel} placeholder={'Telephone number'}/>
                    <input className={resPost ? 'modal__input' : 'modal__input error'} type='password' onChange={onChangePassword} placeholder={'Password'}/>
                    <p className={resPost ? 'warning-hidden' : 'warning'}>Invalid login or password</p>

                </div>
                <button className={'btn modal__btn'} onClick={onClickButtonPost}>Log in</button>
                <button className={'btn modal__btn'} onClick={onClickButtonCancel}>Cancel</button>
                <p className={'modal__help'}>Test autorization:</p>
                <p className={'modal__help'}>Number: +19254223749</p>
                <p className={'modal__help'}>Password: 123</p>
                

            </div>
        
    )
}