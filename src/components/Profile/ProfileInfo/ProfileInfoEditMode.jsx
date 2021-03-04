import React from 'react';
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import FormikControl from "../../../Forms/FormikControl";
import styles from "../../../Forms/Form.module.css";

const ProfileInfoEditMode = (props) => {

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
        fullName: yup
            .string()
            .required('Name is required'),
        aboutMe: yup
            .string()
            .required('Required field'),
        lookingForAJobDescription: yup
            .string()
            .required('Required field'),
    })

    return (
        <Formik initialValues={props.initialValues}
                validationSchema={validationSchema}
                onSubmit={props.onSubmit}>
            {formik => <Form>
                {props.isOwner && <button type={'submit'} onClick={props.upEditMode}>save</button>}
                <FormikControl control={'input'}
                               type={'text'}
                               label={'Full Name'}
                               name={'fullName'}
                               placeholder={'Your name'}/>
                <FormikControl control={'textarea'}
                               type={'text'}
                               label={'About me'}
                               name={'aboutMe'}/>
                <div className={styles.formControl}>
                    <label htmlFor={'checkbox'}>Looking for job</label>
                    <Field type={'checkbox'}
                           id={'checkbox'}
                           name={'lookingForAJob'}/></div>
                <FormikControl control={'textarea'}
                               type={'text'}
                               label={'My skills'}
                               name={'lookingForAJobDescription'}/>
                <div>
                    <b className={styles.aboutMeToo}>Contacts: </b>{Object.keys(props.profile.contacts).map(keys => {
                    return <div key={keys} className={styles.aboutMeToo}>
                        {keys}: <Field type={'text'}
                                       id={'text'}
                                       name={'contacts.' + keys}/>
                    </div>
                })}
                </div>

            </Form>
                }
        </Formik>
    );
};

export default ProfileInfoEditMode;