import {authAPI, secureAPI} from "../api/api"

const GET_USER_DATA = 'first-app/auth/GET-USER-DATA'
const GET_CAPTCHA = 'first-app/auth/GET-CAPTCHA'

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuthenticated: false,
    captchaUrl: null as string | null
}

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

type GetUserDataActionCreatorType = {
    id: number | null
    email: string | null
    login: string | null
    isAuthenticated: boolean
}
type GetUserDataActionType = {
    type: typeof GET_USER_DATA
    payload: GetUserDataActionCreatorType
}
const getUserData = (id: number | null, email: string | null, login: string | null, isAuthenticated: boolean): GetUserDataActionType => ({
    type: GET_USER_DATA,
    payload: {id, email, login, isAuthenticated}
})


type  GetCaptchaType = {
    type: typeof GET_CAPTCHA
    payload: { captchaUrl: string }
}
const getCaptcha = (captchaUrl: string): GetCaptchaType => ({
    type: GET_CAPTCHA, payload: {captchaUrl}
})

export const authAccess = () => {
    return async (dispatch: any) => {
        const response = await authAPI.authMe()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(getUserData(id, email, login, true))
        }
    }
}

export const logIn = (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null) => {
    return async (dispatch: any) => {
        const response = await authAPI.logIn(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(authAccess())
        } else if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: any) => {
        const response = await secureAPI.getCaptchaUrl()
        dispatch(getCaptcha(response.data.url))

    }
}


export const logOut = () => {
    return async (dispatch: any) => {
        const response = await authAPI.logOut()
        if (response.data.resultCode === 0) {
            dispatch(getUserData(null, null, null, false))
        }
    }
}

export default authReducer