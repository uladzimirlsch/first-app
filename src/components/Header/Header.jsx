import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img
                src={"https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"}
                alt=""/>
            <div className={styles.loginBlock}>
                {props.isAuthenticated ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};
export default Header;