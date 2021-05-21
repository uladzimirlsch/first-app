import React, { useState } from 'react';
import styles from './Form.module.scss';
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FieldArray,
  FastField,
} from 'formik';
import * as yup from 'yup';
import TextError from './TextError';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phones: ['+375 (  )', '+375 (  )'],
  phNumbers: [''],
};

const savedValues = {
  firstName: 'Uladzimir',
  lastName: 'Losich',
  email: 'socialnetwork@example.com',
  password: '',
  comments: 'Hello',
  address: 'Pinsk, str.Tsentralnaya,',
  social: {
    facebook: '',
    twitter: '',
  },
  phones: ['+375 (  )', '+375 (  )'],
  phNumbers: [''],
};

const onSubmit = (values, onSubmitProps) => {
  console.log('form', values);
  console.log('onSubmitProps', onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = yup.object({
  firstName: yup.string().required('Name is required!'),
  lastName: yup.string().required('Name is required!'),
  email: yup
    .string()
    .email('Invalid email format!')
    .required('E-mail is required!'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length!')
    .required('Password is required!'),
  comments: yup.string().required('Text is required!'),
});

const validateComments = (value, error) => {
  !value && (error = 'Required!');
  return error;
};

const NetworkLoginForm = () => {
  const [formValues, setFormValues] = useState(null);

  return (
    <div>
      <h2>Sign up</h2>
      <Formik
        initialValues={formValues || initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => (
          <Form>
            <div className={styles.formControl}>
              <label htmlFor={'firstName'}>First name</label>
              <Field
                type={'text'}
                id={'firstName'}
                name={'firstName'}
                placeholder={'Your first name'}
              />
              <ErrorMessage
                name={'firstName'}
                component={TextError}
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor={'lastName'}>Last name</label>
              <Field
                type={'text'}
                id={'lastName'}
                name={'lastName'}
                placeholder={'Your first name'}
              />
              <ErrorMessage name={'lastName'} component={TextError} />
            </div>

            <div className={styles.formControl}>
              <label htmlFor={'email'}>E-mail</label>
              <Field
                type={'email'}
                id={'email'}
                name={'email'}
                placeholder={'socialnetwork@example.com'}
              />
              <ErrorMessage name={'email'}>
                {(errorMsg) => (
                  <div className={styles.errorControl}>
                    {errorMsg}
                  </div>
                )}
              </ErrorMessage>
            </div>

            <div className={styles.formControl}>
              <label htmlFor={'password'}>Password</label>
              <Field
                type={'password'}
                id={'password'}
                name={'password'}
              />
              <ErrorMessage name={'password'} component={TextError} />
            </div>

            <div className={styles.formControl}>
              <label htmlFor={'comments'}>Comments</label>
              <Field
                as={'textarea'}
                id={'comments'}
                name={'comments'}
                validate={validateComments}
              />
              <ErrorMessage name={'comments'} component={TextError} />
            </div>
            <div className={styles.formControl}>
              <label htmlFor={'address'}>Address</label>
              <FastField name={'address'}>
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input
                        type={'text'}
                        id={'address'}
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>

            <div className={styles.formControl}>
              <label htmlFor={'facebook'}>Facebook</label>
              <Field
                type={'text'}
                id={'facebook'}
                name={'social.facebook'}
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor={'twitter'}>Twitter</label>
              <Field
                type={'text'}
                id={'twitter'}
                name={'social.twitter'}
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor={'primaryPh'}>Primary phone</label>
              <Field
                type={'tel'}
                id={'primaryPh'}
                name={'phones[0]'}
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor={'secondaryPh'}>Secondary phone</label>
              <Field
                type={'tel'}
                id={'secondaryPh'}
                name={'phones[1]'}
              />
            </div>

            <div className={styles.formControl}>
              <label htmlFor={'phNumbers'}>List of phones</label>
              <FieldArray name={'phNumbers'}>
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button
                              type={'button'}
                              onClick={() => remove(index)}
                            >
                              -
                            </button>
                          )}

                          <button
                            type={'button'}
                            onClick={() => push('')}
                          >
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            {/*<button type={'button'} onClick={() => {*/}
            {/*    formik.validateField('comments')*/}
            {/*}}>Validate comments*/}
            {/*</button>*/}

            {/*<button type={'button'} onClick={() => {*/}
            {/*    formik.validateForm('').then(r => (''))*/}
            {/*}}>Validate all*/}
            {/*</button>*/}

            {/*<button type={'button'} onClick={() => {*/}
            {/*    formik.setFieldTouched('comments')*/}
            {/*}}>Visit comments*/}
            {/*</button>*/}

            {/*<button type={'button'} onClick={() => {*/}
            {/*    formik.setTouched({*/}
            {/*        firstName: true,*/}
            {/*        lastName: true,*/}
            {/*        email: true,*/}
            {/*        password: true,*/}
            {/*        comments: true*/}
            {/*    })*/}
            {/*}}>Visit fields*/}
            {/*</button>*/}
            <button
              type={'button'}
              onClick={() => setFormValues(savedValues)}
            >
              Load data
            </button>

            <button type={'reset'}>Reset data</button>

            <button
              type={'submit'}
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default NetworkLoginForm;
