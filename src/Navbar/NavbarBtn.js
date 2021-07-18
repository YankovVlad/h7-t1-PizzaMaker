import { useState, useEffect} from "react"

export const NavbarBtn = (props) => {

    
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        setIsLogin(props.isLogin)
    })

    const onClickButtonLogin = () => {
        const active = true
        props.updateApp(active)

    }
    const onClickButtonLogout = (value) => {
        props.updateIsLogin(value)
    }
    
    return (
        <button className={'btn'} onClick={isLogin ? () => onClickButtonLogout(true) : onClickButtonLogin}>{props.label}</button>
    )
}