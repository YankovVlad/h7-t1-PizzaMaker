import './style.css'
import axios from 'axios'
import { useState } from 'react'
import { Loader } from '../App/Loader'


export const LoginWindow = (props) => {


    const [tel, setTel] = useState('')
    const [password, setPassword] = useState('')
    const [activeModal, setActiveModal] = useState(props.isActive)
    const [resPost, setResultPost] = useState(true)
    const [loader, setLoader] = useState(false)
    const [err, setErr] = useState('')
    const [testUser, setTestUser] = useState({tel: '+19254223749', password: '123'})
    const update = (value, userData) => {
        props.updateApp(value, userData)
    }
    const updateClose = (value) => {
        props.updateClose(value)
    }
    const onClickButtonPost = () => {
        const data = {phone: tel, password: password}
        setLoader(true)
        axios.post('http://localhost:3001/auth/sign-in', data)
            .then(
                response => {
                    const userData = response.data
                    const value = !activeModal
                    setActiveModal(value)
                    update(value, userData)
                    setLoader(false)
                    
                },
                reject => {
                    setErr(reject.response.data)
                    setResultPost(false)
                    setTimeout(() => setResultPost(true), 2000)
                    setLoader(false)
                    
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
    const onClickCopy = (event) => {
        const value = event.target.innerText
        navigator.clipboard.writeText(value)
    }


    return (
            <div className={'modal__login'}>
                <div className={'modal__guest'}></div>
                <div className={'modal__body'}>
                    <input className={resPost ? 'modal__input' : 'modal__input error'} type='tel' onChange={onChangeTel} placeholder={'Telephone number'}/>
                    <input className={resPost ? 'modal__input' : 'modal__input error'} type='password' onChange={onChangePassword} placeholder={'Password'}/>
                    <p className={resPost ? 'warning-hidden' : 'warning'}>{err}</p>

                </div>
                {loader ? <Loader /> : <div className={'loader-placeholder'}/>}
                
                <button className={'btn modal__btn'} onClick={onClickButtonPost}>Log in</button>
                <button className={'btn modal__btn'} onClick={onClickButtonCancel}>Cancel</button>
                <p className={'modal__help'}>Test autorization:</p>
                <p className={'modal__help'} >Number: <span onClick={onClickCopy} className={'modal__help copy-btn'}>{testUser.tel}</span>  </p>
                <p className={'modal__help copy-btn'} onClick={onClickCopy}>Password: <span onClick={onClickCopy} className={'modal__help copy-btn'}>{testUser.password}</span></p>
                

            </div>
        
    )
}