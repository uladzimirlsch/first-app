import React, {FC} from 'react';
import styles from "../../forms/Form.module.css";
import {Form, Formik} from 'formik';
import * as yup from 'yup';
import FormikControl from "../../forms/FormikControl";
import {Button} from "antd";

type  PropsType = {
    onSubmitMessage: (value: { newMessage: string | null }) => void
}

const MessageForm: FC<PropsType> = ({onSubmitMessage}) => {

    const initialValues = {
        newMessage: '',
    }

    const validationSchema = yup.object({
        newMessage: yup
            .string()
            .required(''),
    })

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitMessage}>
            {(formik) => {
                return <Form>
                    <FormikControl control={'textarea'}
                                   as={'textarea'}
                                   name={'newMessage'}
                                   placeholder={'Add message'}/>
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

export default MessageForm;