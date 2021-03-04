import React from 'react';
import styles from './Form.module.css';


const TextError = (props) => {
    return (
        <div className={styles.errorControl}>
            {props.children}
        </div>
    );
}

export default TextError;

