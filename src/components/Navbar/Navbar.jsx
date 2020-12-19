import one from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={one.navbar}>
            <div className={one.item}>
                <NavLink to={'/profile'} activeClassName={one.activeLink}>Profile</NavLink>
            </div>
            <div className={one.item}>
                <NavLink to={'/dialogs'} activeClassName={one.activeLink}>Messages</NavLink>
            </div>
            <div className={one.item}>
                <NavLink to={'/news'} activeClassName={one.activeLink}>News</NavLink>
            </div>
            <div className={one.item}>
                <NavLink to={'/music'} activeClassName={one.activeLink}>Music</NavLink>
            </div>
            <div className={one.item}>
                <NavLink to={'/settings'} activeClassName={one.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
};
export default Navbar;