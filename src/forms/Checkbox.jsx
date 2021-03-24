import React, {Fragment} from 'react';
import styles from "./Form.module.css";
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";

const Checkbox = (props) => {
    const {label, name, options, ...rest} = props
    return (
        <div className={styles.formControl}>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {({field}) => {
                    return options.map(option => (
                        <Fragment key={option.key}>
                            <input type={'checkbox'}
                                   id={option.value}
                                   {...field}
                                   value={option.value}
                                   checked={field.value.includes(option.value)}
                            />
                            <label htmlFor={option.value}>{option.key}</label>
                        </Fragment>)
                    )
                }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
}

export default Checkbox;