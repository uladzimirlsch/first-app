import React, {FC} from "react";
import styles from './Header.module.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserData, userLogin} from "../../redux/auth-selectors";
import {logOut} from "../../redux/auth-reducer";


export const Header: FC = () => {

    const isAuthenticated = useSelector(getUserData)
    const login = useSelector(userLogin)
    const dispatch = useDispatch()

    const logOutside = () => {
        dispatch(logOut())
    }

    return (
        <header>
            <img
                src={"https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"}
                alt=""/>
            <div className={styles.loginBlock}>
                {{isAuthenticated}
                    ? <div>{login}
                        <button onClick={logOutside}>Log out</button>
                    </div>
                    : <Link to={'/login'}>Login</Link>}
            </div>
        </header>
    )
}
