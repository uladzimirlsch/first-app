import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './form.module.scss';
import TextError from './text-error';

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} id={name} {...rest}>
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
