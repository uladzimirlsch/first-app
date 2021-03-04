import {authAPI, secureAPI} from "../api/api";

const GET_USER_DATA = 'GET-USER-DATA'
const GET_CAPTCHA = 'GET-CAPTCHA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthenticated: false,
    captchaUrl: null
}
const authReducer = (state = initialState, action) => {
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
const getUserData = (id, email, login, isAuthenticated) => ({
    type: GET_USER_DATA,
    payload: {id, email, login, isAuthenticated}
})
const getCaptcha = (captchaUrl) => ({
    type: GET_CAPTCHA, payload: {captchaUrl}
})

export const authAccess = () => {
    return async (dispatch) => {
        const response = await authAPI.authMe()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(getUserData(id, email, login, true))
        }
    }
}

export const logIn = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        const response = await authAPI.logIn(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(authAccess())
        } else if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        const response = await secureAPI.getCaptchaUrl()
        dispatch(getCaptcha(response.data.url))

    }
}


export const logOut = () => {
    return async (dispatch) => {
        const response = await authAPI.logOut()
        if (response.data.resultCode === 0) {
            dispatch(getUserData(null, null, null, false))
        }
    }
}

export default authReducer