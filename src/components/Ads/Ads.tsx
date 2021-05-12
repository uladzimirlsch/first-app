import React, {FC} from 'react';
import styles from "./Ads.module.scss";
import {NavLink} from "react-router-dom";

export const Ads: FC = () => {
    return (
        <div className={styles.ads}>
            <div className={styles.item}>
                <NavLink to={'/news'} activeClassName={styles.activeLink}>News</NavLink>
            </div>
        </div>
    );
};
