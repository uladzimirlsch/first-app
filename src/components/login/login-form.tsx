import React, { FC } from 'react';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';
import styles from '../../forms/form.module.scss';
import FormikControl from '../../forms/formik-control';

type PropsType = {
  captchaUrl: string | null;
  onSubmitLogin: (values: {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
  }) => void;
};

const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
  captcha: '',
};

const validationSchema = yup.object({
  email: yup.string().email('Invalid email format!').required('E-mail is required!'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length!')
    .required('Password is required!'),
});

export const LoginForm: FC<PropsType> = ({ captchaUrl, onSubmitLogin }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitLogin}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl control="input" type="email" label="Email" name="email" />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <div className={styles.formControl}>
              <label htmlFor="checkbox">Remember me</label>
              <Field type="checkbox" id="checkbox" name="checkbox" />
            </div>
            {captchaUrl && <img src={captchaUrl} alt="" />}
            {captchaUrl && (
              <FormikControl
                control="input"
                type="text"
                name="captcha"
                placeholder="enter symbols"
              />
            )}
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
