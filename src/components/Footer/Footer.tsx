import React, {FC} from 'react';
import styles from './Footer.module.scss'

export const Footer: FC = () => {
    return (
        <footer>
            <div className={styles.footer}>
                ©2021 Created by LSCH
            </div>
        </footer>
    );
};
