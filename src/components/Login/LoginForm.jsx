import React from 'react';
import styles from './Form.module.css'

const LoginForm = () => {
    return (
        <form className={styles.formControl}>
            <label htmlFor={'name'}>Fist name</label>
            <input type={'text'} id={'name'} name={'name'}/>

            <label htmlFor={'name'}>Last name</label>
            <input type={'text'} id={'name'} name={'name'}/>

            <label htmlFor={'email'}>Email</label>
            <input type={'email'} id={'email'} name={'email'}/>

            <label htmlFor={'password'}>Password</label>
            <input type={'password'} id={'password'} name={'password'}/>

            <label htmlFor={'checkbox'}>Touch</label>
            <input type={'checkbox'}/>

            <button type={'submit'}>Sign up</button>
        </form>
    );
};

const Login = (props) => (
    <div>
        <h1>Sign up</h1>
        <LoginForm/>
    </div>
);



export default Login;
