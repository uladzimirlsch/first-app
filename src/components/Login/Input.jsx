import React from 'react';
import styles from "./Form.module.css";
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";

const Input = (props) => {
    const {label, name, ...rest} = props
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{label}</label>
            <Field name={name} id={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
}

export default Input;