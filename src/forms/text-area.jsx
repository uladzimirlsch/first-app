import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './form.module.scss';
import TextError from './text-error';

const TextArea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
