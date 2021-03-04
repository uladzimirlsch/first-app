import React from 'react';
import {Form, Formik} from 'formik';
import * as yup from 'yup';
import FormikControl from "./FormikControl";


const RegistrationForm = () => {

    const options = [
        {key: 'Email', value: 'emailmoc'},
        {key: 'Phone', value: 'phonemoc'}
    ]

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContacts: '',
        comments: '',
        phone: '',
    }

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Invalid email format!')
            .required('E-mail is required!'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length!')
            .required('Password is required!'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), ''], 'Password must match')
            .required('Password is not match'),
        comments: yup
            .string('Enter text')
            .required('Text is required!'),
        modeOfContacts: yup
            .string()
            .required(),
        phone: yup
            .string()
            .when('modeOfContact', {
                is: 'phonemoc',
                then: yup
                    .string()
                    .required('Phone number is required')
            })
    })

    const onSubmit = values => {
        console.log('Form data', (values))
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
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
                    <FormikControl control={'input'}
                                   type={'password'}
                                   label={'Confirm password'}
                                   name={'confirmPassword'}/>
                    <FormikControl control={'textarea'}
                                   as={'textarea'}
                                   label={'Comments'}
                                   name={'comments'}/>
                    <FormikControl control={'radio'}
                                   label={'Mode of contacts'}
                                   name={'modeOfContacts'}
                                   options={options}/>
                    <FormikControl control={'input'}
                                   type={'text'}
                                   label={'Phone number'}
                                   name={'phone'}/>
                    <button type={'submit'} disabled={!formik.isValid}>Submit</button>
                </Form>
            }
            }
        </Formik>
    );
}

export default RegistrationForm;