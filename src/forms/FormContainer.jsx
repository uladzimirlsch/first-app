import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import FormikControl from './formik-control';

const FormContainer = () => {
  const dropdownOptions = [
    { key: 'Your country/region', value: '' },
    { key: 'Option 1', value: 'option 1' },
    { key: 'Option 2', value: 'option 2' },
    { key: 'Option 3', value: 'option 3' },
  ];

  const radioGender = [
    { key: 'Male', value: 'male' },
    { key: 'Female', value: 'female' },
    { key: 'Other', value: 'other' },
  ];

  const radioContacts = [
    { key: 'Email', value: 'emailmoc' },
    { key: 'Phone', value: 'phonemoc' },
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    modeOfContacts: '',
    selectOption: '',
    radioOption: '',
    phone: '',
    birthDate: null,
    // acceptedTerms: false,
  };

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .max(15, 'Must be 15 characters or less')
      .required('Name is required!'),
    lastName: yup
      .string()
      .max(20, 'Must be 15 characters or less')
      .required('Name is required!'),
    email: yup
      .string()
      .email('Invalid email format!')
      .required('E-mail is required!'),
    password: yup
      .string()
      .min(6, 'Password should be of minimum 8 characters length!')
      .required('Password is required!'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), ''], 'Password must match')
      .required('Password is not match'),
    selectOption: yup.string().required('Country or region is required!'),
    radioOption: yup.string().required('Gender is required!'),
    modeOfContacts: yup.string().required('mode is required'),
    phone: yup.string().when('modeOfContact', {
      is: 'phonemoc',
      then: yup.string().required('Phone number is required'),
    }),
    birthDate: yup.date().required('Date is required!').nullable(),
    // acceptedTerms: yup
    //     .boolean()
    //     .required("Required")
    //     .oneOf([true], "You must accept the terms and conditions.")
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
    console.log('Saved data', JSON.parse(JSON.stringify(values)));
  };

  // const onSubmit = (values, {setSubmitting}) => {
  //     setTimeout(() => {
  //         console.log(JSON.stringify(values, null, 2));
  //         setSubmitting(false);
  //     }, 400);
  // }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="text"
            label="First Name"
            name="firstName"
            placeholder="Your first name"
          />
          <FormikControl
            control="input"
            type="text"
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
          />
          <FormikControl
            control="input"
            type="email"
            label="Email Address"
            name="email"
            placeholder="network@examle.com"
          />
          <FormikControl
            control="input"
            type="password"
            label="Password"
            name="password"
          />
          <FormikControl
            control="input"
            type="password"
            label="Confirm password"
            name="confirmPassword"
          />
          <FormikControl
            control="select"
            label="Country/region"
            name="selectOption"
            options={dropdownOptions}
          />
          <FormikControl
            control="radio"
            label="Gender"
            name="radioOption"
            options={radioGender}
          />
          <FormikControl
            control="radio"
            label="mode of contacts"
            name="modeOfContacts"
            options={radioContacts}
          />
          <FormikControl
            control="input"
            type="text"
            label="Phone number"
            name="phone"
          />
          <FormikControl control="date" label="Birth Date" name="birthDate" />
          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
