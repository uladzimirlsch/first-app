import { RootState } from './redux-store';

export const getUserData = (state: RootState) => state.auth.isAuthenticated;

export const userLogin = (state: RootState) => state.auth.login;

export const getCaptcha = (state: RootState) => state.auth.captchaUrl;
