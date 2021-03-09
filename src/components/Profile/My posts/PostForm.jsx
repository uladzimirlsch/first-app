import React from 'react';
import {Form, Formik} from 'formik';
import * as yup from 'yup';
import FormikControl from "../../../forms/FormikControl";
import styles from "../../../forms/Form.module.css";


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
                                   name={'newPost'}
                                   placeholder={'Add post'}/>
                    <button className={styles.formControl}
                            type={'submit'}
                            disabled={!formik.isValid}>Send
                    </button>
                </Form>
            }
            }
        </Formik>
    );
}

export default PostForm;