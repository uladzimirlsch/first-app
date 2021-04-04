import React, {FC} from 'react';
import {Form, Formik} from 'formik';
import * as yup from 'yup';
import FormikControl from "../../../forms/FormikControl";
import styles from "../../../forms/Form.module.css";
import {Button} from "antd";

type PropsType = {
    onSubmitPost: (value: { newPost: string | null }) => void
}

const PostForm: FC<PropsType> = ({onSubmitPost}) => {

    const initialValues = {
        newPost: '',
    }

    const validationSchema = yup.object({
        newPost: yup
            .string()
            .required(''),
    })

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitPost}>
            {(formik) => {
                return <Form>
                    <FormikControl control={'textarea'}
                                   as={'textarea'}
                                   name={'newPost'}
                                   placeholder={'Add post'}/>
                    <Button className={styles.formControl}
                            htmlType={'submit'}
                            type={'primary'}
                            disabled={!formik.isValid}>Send
                    </Button>
                </Form>
            }
            }
        </Formik>
    );
}

export default PostForm;