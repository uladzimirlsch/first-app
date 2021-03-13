import axios from "axios";
import {ProfileType} from "../types/types";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '8f134258-4790-4e7d-b385-ce528a469f84'
    }
})

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getUserProfile(userId: number) {
        return profileAPI.getUserProfile(userId)
    }
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateUserStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    },
    loadPhoto(filePhoto: any) {
        let formData = new FormData()
        formData.append("imageUpload", filePhoto)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveDataProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
    },
}

export enum ResultCode {
    Up,
    Down = 1,
}
export enum ResultCodeWithCaptcha {
    Captcha = 10
}
type AuthMe = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCode
    messages: string[]
}
type LogInMe = {
    resultCode: ResultCode | ResultCodeWithCaptcha
    messages: string[]
    data: {
        userId: number
    }
}
type LogOutMe = {
    resultCode: ResultCode
    messages: string[]
    data: {}
}
export const authAPI = {
   authMe() {
        return instance.get<AuthMe>(`auth/me`).then(resolve => resolve.data)
    },
    logIn(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<LogInMe>(`auth/login`, {email, password, rememberMe, captcha}).then(resolve => resolve.data)
    },
    logOut() {
        return instance.delete<LogOutMe>(`auth/login`).then(resolve => resolve.data)
    },
}

export const secureAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}
