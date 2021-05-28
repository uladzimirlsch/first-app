import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import FormikControl from './formik-control';

const EnrollmentForm = () => {
  const dropdownOptions = [
    { key: 'select your course', value: '' },
    { key: 'React', value: 'react' },
    { key: 'Angular', value: 'angular' },
    { key: 'Vue', value: 'vue' },
  ];

  const checkboxOptions = [
    { key: 'HTML', value: 'html' },
    { key: 'CSS', value: 'css' },
    { key: 'JavaScript', value: 'javascript' },
  ];

  const initialValues = {
    email: '',
    bio: '',
    course: '',
    skills: [],
    courseDate: null,
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Invalid email format!')
      .required('E-mail is required!'),
    bio: yup.string().required('Text is required!'),
    course: yup.string().required('Course is required!'),
    skills: yup.array().min(1, 'Skill is required!'),
    courseDate: yup.date().required('Date is required!').nullable(),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
    console.log('Saved data', JSON.parse(JSON.stringify(values)));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email Address"
              name="email"
            />
            <FormikControl control="textarea" label="Bio" name="bio" />
            <FormikControl
              control="select"
              label="Select of course"
              name="course"
              options={dropdownOptions}
            />
            <FormikControl
              control="checkbox"
              label="Skills"
              name="skills"
              options={checkboxOptions}
            />
            <FormikControl control="date" label="Course Date" name="courseDate" />
            <button type="submit" disabled={!formik.isValid}>
              Sign Up
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EnrollmentForm;
