import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";
import React, {FC} from "react";

type PropsType = {
    isAuthenticated: boolean
    login: string | null
    logOut: () => void
}

const Header: FC<PropsType> = ({isAuthenticated, login, logOut}) => {
    return (
        <header className={styles.header}>
            <img
                src={"https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"}
                alt=""/>
            <div className={styles.loginBlock}>
                {{isAuthenticated}
                    ? <div>{login}
                        <button onClick={logOut}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};
export default Header;