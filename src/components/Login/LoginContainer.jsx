import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {logIn} from "../../redux/AuthReducer";
import LoginForm from "./LoginForm";

const LoginContainer = (props) => {
    const onSubmit = (values) => {
        props.logIn(values.email, values.password, values.rememberMe, values.captcha)
    }

    if (props.isAuthenticated) return (<Redirect to={'/profile'}/>)

    return (
        <div>
            <h1>Sign up</h1>
            <LoginForm onSubmit={onSubmit} {...props}/>
        </div>
    );
}

let mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {logIn})(LoginContainer);