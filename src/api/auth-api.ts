import { instance, ResponseData } from './api';

type AuthMe = {
  id: number;
  email: string;
  login: string;
};
type LogInMe = {
  userId: number;
};
export const authAPI = {
  authMe() {
    return instance
      .get<ResponseData<AuthMe>>(`auth/me`)
      .then((res) => res.data);
  },
  logIn(
    email: string,
    password: string,
    rememberMe = false,
    captcha: string,
  ) {
    return instance
      .post<ResponseData<LogInMe>>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data);
  },
  logOut() {
    return instance
      .delete<ResponseData>(`auth/login`)
      .then((res) => res.data);
  },
};
