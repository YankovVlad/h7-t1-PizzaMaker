import { useState } from 'react'
import Pizza from "./Pizza"
import { Navbar } from "./Navbar"
import { LoginWindow } from './LoginWindow'



export const App = () => {

    const [isActiveModalLogin, setisActiveModalLogin] = useState(false)
    const [user, setUser] = useState({})
    const [isLogin, setIsLogin] = useState(false)

    const checkUser = (obj) => {
        for (let key in obj){
            return true;
        }
        return false
        }
    

    const updateAppFromLogin = (value, user) => {
        setisActiveModalLogin(value)
        setUser(user)
        setIsLogin(checkUser(user))
    }
    const updateAppFromBtn = (value) => {
        setisActiveModalLogin(value)
    }
    const updateIsLogin = (value) => {
        if (value) {
            setIsLogin(false)
            setUser({})
        }
    }
    const modalClose = (value) => {
        setisActiveModalLogin(value)
    }
    
    return(
        
        <div className={'app'}>
            <div className={isActiveModalLogin ? 'modal-wrap visible' : 'modal-wrap hidden'}>
                {isActiveModalLogin ? <LoginWindow  updateApp={updateAppFromLogin} 
                                                    updateClose={modalClose} 
                                                    isActive={isActiveModalLogin}/> : null}
            </div>
            
            <Navbar updateApp={updateAppFromBtn}
                    updateIsLogin={updateIsLogin}
                    currentUser={user} 
                    btnState={isActiveModalLogin}
                    isLogin={isLogin}
                    />

            <div className={isActiveModalLogin ? 'hidden' : 'visible'}>
                <Pizza />
            </div>
        </div>
    )
        
        
}