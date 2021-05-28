import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth-reducer';
import { LoginForm } from './login-form';
import { getCaptcha, getUserData } from '../../redux/auth-selectors';

export const LoginContainer: FC = () => {
  const isAuthenticated = useSelector(getUserData);
  const captchaUrl = useSelector(getCaptcha);
  const dispatch = useDispatch();

  const onSubmit = (values: {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
  }) => {
    dispatch(
      logIn(values.email, values.password, values.rememberMe, values.captcha),
    );
  };

  if (isAuthenticated) return <Redirect to="/profile" />;

  return (
    <div>
      <h1>Sign up</h1>
      <LoginForm onSubmitLogin={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};
