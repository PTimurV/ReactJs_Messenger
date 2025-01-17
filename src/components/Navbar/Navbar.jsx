import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile"
                         className={({isActive, isPending}) =>
                             isPending ? "pending" : isActive ? s.activeLink : ""
                         }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs"
                         className={({isActive, isPending}) =>
                             isPending ? "pending" : isActive ? s.activeLink : ""
                         }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users"
                         className={({isActive, isPending}) =>
                             isPending ? "pending" : isActive ? s.activeLink : ""
                         }>Users</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>)
}
export default Navbar