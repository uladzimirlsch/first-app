import {instance} from "./api";

type getCaptchaUrl = {
    url: string
}
export const secureAPI = {
    getCaptchaUrl() {
        return instance.get<getCaptchaUrl>(`security/get-captcha-url`).then(res => res.data)
    }
}