import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import styles from '../../../forms/form.module.scss';
import FormikControl from '../../../forms/formik-control';

type PropsType = {
  onSubmitMessage: (value: { newMessage: string | null }) => void;
};

export const MessageForm: FC<PropsType> = ({ onSubmitMessage }) => {
  const initialValues = {
    newMessage: '',
  };

  const validationSchema = yup.object({
    newMessage: yup.string().required(''),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitMessage}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="textarea"
              as="textarea"
              name="newMessage"
              placeholder="Add message"
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
