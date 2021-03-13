import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const NavbarRight = () => {
    return (
        <div>
            <div className={styles.item}>
                <NavLink to={'/profile'} activeClassName={styles.activeLink}>Contacts</NavLink>
            </div>
        </div>
    )
};
export default NavbarRight;