import s from "./Header.module.css"
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>
        <img src="https://abali.ru/wp-content/uploads/2017/10/smeshariki-ch-b.png"/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={"/login"}>Login</NavLink>}


        </div>
        header
    </header>
}
export default Header