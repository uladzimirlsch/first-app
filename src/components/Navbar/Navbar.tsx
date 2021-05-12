import React, {FC} from "react";
import styles from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";


export const Navbar: FC = () => {
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
                <NavLink to={'/music'} activeClassName={styles.activeLink}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/photos'} activeClassName={styles.activeLink}>Photos</NavLink>
            </div>
        </nav>
    )
}