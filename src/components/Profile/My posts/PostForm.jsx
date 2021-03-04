import React from 'react';
import {Form, Formik} from 'formik';
import * as yup from 'yup';
import FormikControl from "../../../Forms/FormikControl";
import styles from "../../../Forms/Form.module.css";


const PostForm = (props) => {

    const initialValues = {
        newPost: '',
    }

    const validationSchema = yup.object({
        newPost: yup
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
                                   label={'Post'}
                                   name={'newPost'}/>
                    <button className={styles.formControl}
                            type={'submit'}
                            disabled={!formik.isValid}>Send</button>
                </Form>
            }
            }
        </Formik>
    );
}

export default PostForm;