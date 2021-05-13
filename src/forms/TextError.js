import React from 'react';
import styles from './Form.module.scss';


const TextError = (props) => {
    return (
        <div className={styles.errorControl}>
            {props.children}
        </div>
    );
}

export default TextError;

