import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const NavbarLeft = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.item}>
                <NavLink to={'/profile'} activeClassName={styles.activeLink}>My profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/dialogs'} activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/users'} activeClassName={styles.activeLink}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/news'} activeClassName={styles.activeLink}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/music'} activeClassName={styles.activeLink}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/photos'} activeClassName={styles.activeLink}>Photos</NavLink>
            </div>
        </nav>
    )
};
export default NavbarLeft;