import React from 'react';
import styles from "./Form.module.css";
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";

const Select = (props) => {
    const {label, name, options, ...rest} = props
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{label}</label>
            <Field as={'select'} name={name} id={name} {...rest}>
                {
                    options.map(option => (
                        <option key={option.key} value={option.value}>{option.key}</option>)
                    )
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
}

export default Select;