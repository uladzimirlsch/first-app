import React from 'react';
import styles from '../../Forms/Form.module.css'
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import FormikControl from "../../Forms/FormikControl";

const initialValues = {
    email: '',
    password: '',
    // confirmPassword: '',
}

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Invalid email format!')
        .required('E-mail is required!'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length!')
        .required('Password is required!'),
    // confirmPassword: yup
    //     .string()
    //     .oneOf([yup.ref('password'), ''], 'Password must match')
    //     .required('Password is not match'),
})

const LoginForm = (props) => {
    return (
        <Formik initialValues={initialValues}
                onSubmit={props.onSubmit}
                validationSchema={validationSchema}>
            {formik => {
                return <Form>
                    <FormikControl control={'input'}
                                   type={'email'}
                                   label={'Email Address'}
                                   name={'email'}/>
                    <FormikControl control={'input'}
                                   type={'password'}
                                   label={'Password'}
                                   name={'password'}/>
                    {/*<FormikControl control={'input'}*/}
                    {/*               type={'password'}*/}
                    {/*               label={'Confirm password'}*/}
                    {/*               name={'confirmPassword'}/>*/}

                    <div className={styles.formControl}>
                        <label htmlFor={'checkbox'}>Remember Me</label>
                        <Field type={'checkbox'}
                               id={'checkbox'}
                               name={'checkbox'}/>
                    </div>
                    {props.captchaUrl && <img src={props.captchaUrl} alt={''}/>}
                    {props.captchaUrl && <FormikControl control={'input'}
                                                        type={'text'}
                                                        name={'captcha'}
                                                        placeholder={'enter symbols'}/>}
                    <button type={'submit'} disabled={!formik.isValid}>Submit</button>
                </Form>
            }
            }
        </Formik>
    );
};

export default LoginForm