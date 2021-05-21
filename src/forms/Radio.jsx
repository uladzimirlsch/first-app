import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './Form.module.scss';
import TextError from './TextError';

const Radio = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className={styles.formControl}>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) =>
          options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          })
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Radio;
