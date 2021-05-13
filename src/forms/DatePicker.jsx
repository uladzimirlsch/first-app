import React from 'react';
import styles from "./Form.module.scss";
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";

const DatePicker = (props) => {
    const {label, name, ...rest} = props
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({form, field}) => {
                        const {setFieldValue} = form
                        const {value} = field
                        return (
                            <DateView id={name}
                                      {...field}
                                      {...rest}
                                      selected={value}
                                      onChange={v => setFieldValue(name, v)}/>
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
}

export default DatePicker;