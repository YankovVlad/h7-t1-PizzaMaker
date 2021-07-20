import { useEffect, useState } from 'react'
import './style.css'

import { NavbarBtn } from './NavbarBtn'

export const Navbar = (props) => {
    const [user, setUser] = useState({})
    const [isLogin, setIsLogin] = useState(false)

    const update = (value) => {
        props.updateApp(value)
    }
    const updateIsLogin = (value) => {
        props.updateIsLogin(value)
    }
    const getName = () => {
        if (user.name !== undefined) {
        const name = user.name.first + ' ' + user.name.last
        return name
        } else return
    }
    useEffect(() => {
        const data = props.currentUser
        setUser(data)
        setIsLogin(props.isLogin)
    })
    
    return (
        
        <nav className={'nav'}>
            <div className='wrapper'>
                <div className={'nav__title'}>
                    <div className={'nav__icon'}></div>
                    <h1 className={'nav__title-text'}>P-Pizza</h1>
                </div>
                
                <div className={'nav__userbar'}>
                    <div className={'nav__user-data'}>
                        <p className={'nav__username'}>{isLogin ? getName() : ''}</p>
                        <p className={'nav__username'}>{isLogin ? props.currentUser.email : ''}</p>
                    </div>
                    <div className={isLogin ? 'nav__avatar' : 'nav__avatar avatar-guest'}>
                        <img className={isLogin ? 'nav__img' : 'hidden'} src={isLogin ? user.picture : ''} />
                    </div>
                    <NavbarBtn  updateApp={update} 
                                btnState={props.btnState}
                                isLogin={isLogin}
                                label={isLogin ? 'Log out' : 'Sign in'}
                                updateIsLogin={updateIsLogin}
                                />
                </div>
            </div>
            
        </nav>
        
    )
}