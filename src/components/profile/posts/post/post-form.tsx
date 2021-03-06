import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import FormikControl from '../../../../forms/formik-control';
import styles from '../../../../forms/form.module.scss';

type PropsType = {
  onSubmitPost: (value: { newPost: string | null }) => void;
};

export const PostForm: FC<PropsType> = ({ onSubmitPost }) => {
  const initialValues = {
    newPost: '',
  };

  const validationSchema = yup.object({
    newPost: yup.string().required(''),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitPost}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="textarea"
              as="textarea"
              name="newPost"
              placeholder="Add post"
            />
            <button
              className={styles.formControl}
              type="submit"
              disabled={!formik.isValid}
            >
              Send
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
