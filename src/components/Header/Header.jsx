import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img
                src={"https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"}
                alt=""/>
            <div className={styles.loginBlock}>
                {props.isAuthenticated
                    ? <div>{props.login}<button onClick={props.logOut}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};
export default Header;