import React from 'react';
import styles from './Form.module.css'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {logIn} from "../../redux/AuthReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={styles.formControl}>

            <label htmlFor={'email'}>Email</label>
            <Field component={'input'}
                   type={'email'}
                   id={'email'}
                   name={'email'}/>

            <label htmlFor={'password'}>Password</label>
            <Field component={'input'}
                   type={'password'}
                   id={'password'}
                   name={'password'}/>

            <label htmlFor={'checkbox'}>Remember Me</label>
            <Field component={'input'}
                   type={'checkbox'}
                   id={'checkbox'}
                   name={'checkbox'}/>

            <button type={'submit'}>Sign up</button>
        </form>
    );
};

const ReduxLoginForm = reduxForm({form: 'contact'})(LoginForm)

const Login = (props) => {
    const onSubmit = (values) => {
        props.logIn(values.email, values.password, values.rememberMe)
    }

    if (props.isAuthenticated) return (<Redirect to={'/profile'}/>)

    return (
        <div>
            <h1>Sign up</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
}

let mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {logIn})(Login);
