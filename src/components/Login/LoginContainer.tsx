import React, {FC} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";
import LoginForm from "./LoginForm";
import {RootState} from "../../redux/redux-store";

type StateProps = {
    captchaUrl: string | null
    isAuthenticated: boolean
}
type DispatchProps = {
    logIn: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type  PropsType = StateProps & DispatchProps

const LoginContainer: FC<PropsType> = ({isAuthenticated, captchaUrl, logIn}) => {

    const onSubmit = (values: { email: string, password: string, rememberMe: boolean, captcha: string }) => {
        logIn(values.email, values.password, values.rememberMe, values.captcha)
    }

    if (isAuthenticated) return (<Redirect to={'/profile'}/>)

    return (
        <div>
            <h1>Sign up</h1>
            <LoginForm onSubmitLogin={onSubmit}
                       captchaUrl={captchaUrl}/>
        </div>
    );
}

let mapStateToProps = (state: RootState): StateProps => ({
    isAuthenticated: state.auth.isAuthenticated,
    captchaUrl: state.auth.captchaUrl
})

export default connect<StateProps, DispatchProps, {}, RootState>(mapStateToProps, {logIn})(LoginContainer);