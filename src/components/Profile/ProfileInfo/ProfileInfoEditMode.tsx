import React, { FC } from 'react';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';
import styles from '../../../forms/Form.module.scss';
import FormikControl from '../../../forms/FormikControl';
import { ProfileType } from '../../../types/types';

type PropsType = {
  isOwner: boolean;
  profile: ProfileType;
  initialValues: ProfileType;
  onSubmit: (values: ProfileType) => void;
};

export const ProfileInfoEditMode: FC<PropsType> = ({
  isOwner,
  profile,
  initialValues,
  onSubmit,
}) => {
  // const initialValues = {
  //     fullName: '',
  //     lookingForAJob: '',
  //     lookingForAJobDescription: '',
  //     contacts: {
  //         github: '',
  //         vk: '',
  //         facebook: '',
  //         instagram: '',
  //         twitter: '',
  //         website: '',
  //         youtube: '',
  //         mainLink: '',
  //     }
  // }

  const validationSchema = yup.object({
    fullName: yup.string().required('Name is required'),
    aboutMe: yup.string().required('Required field'),
    lookingForAJobDescription: yup
      .string()
      .required('Required field'),
  });

  return (
    <div className={styles.formPage}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              type="text"
              label="Full Name"
              name="fullName"
              placeholder="Your name"
            />
            <FormikControl
              control="textarea"
              type="text"
              label="About me"
              name="aboutMe"
            />
            <label htmlFor="checkbox">Looking for job</label>
            <Field
              type="checkbox"
              id="checkbox"
              name="lookingForAJob"
            />
            <FormikControl
              control="textarea"
              type="text"
              label="My skills"
              name="lookingForAJobDescription"
            />
            <dt className={styles.aboutMe}>
              Contacts:
              {/* eslint-disable-next-line react/prop-types */}
              {Object.keys(profile.contacts).map((keys) => (
                <dd key={keys} className={styles.aboutMe}>
                  {keys}
                  <Field
                    type="text"
                    id="text"
                    name={`contacts.${keys}`}
                  />
                </dd>
              ))}
            </dt>
            {isOwner && <button type="submit">Save</button>}
          </Form>
        )}
      </Formik>
    </div>
  );
};
