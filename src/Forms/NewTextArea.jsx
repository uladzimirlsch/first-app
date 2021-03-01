import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength15, minLength2} from "./Validate";

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const NewTextArea = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'}
                   id={'newMessage'}
                   name={'newMessage'}
                   label={'Message'}
                   validate={[required, maxLength15, minLength2]}/>
            <button type={'submit'}>Send</button>
            <button type={'submit'}>Delete</button>
        </form>
    );
};

const ReduxTextAreaForm = reduxForm({ form: 'textArea' })(NewTextArea)

export default ReduxTextAreaForm;