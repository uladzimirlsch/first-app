import React from 'react';
import styles from "../../forms/Form.module.css";
import {Form, Formik} from 'formik';
import * as yup from 'yup';
import FormikControl from "../../forms/FormikControl";


const MessageForm = (props) => {

    const initialValues = {
        newMessage: '',
    }

    const validationSchema = yup.object({
        newMessage: yup
            .string()
            .required('Text is required!'),
    })

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={props.onSubmit}>
            {(formik) => {
                return <Form>
                    <FormikControl control={'textarea'}
                                   as={'textarea'}
                                   name={'newMessage'}
                                   placeholder={'Add message'}/>
                    <button className={styles.formControl}
                            type={'submit'}
                            disabled={!formik.isValid}>Send</button>
                </Form>
            }
            }
        </Formik>
    );
}

export default MessageForm;