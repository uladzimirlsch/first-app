import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '8f134258-4790-4e7d-b385-ce528a469f84'
    }
})

export enum ResultCode {
    Up,
    Down = 1,
}
export enum ResultCodeWithCaptcha {
    Captcha = 10
}

export type ResponseData<D = {}, RC = ResultCode | ResultCodeWithCaptcha> = {
    data: D
    messages: string []
    resultCode: RC
}