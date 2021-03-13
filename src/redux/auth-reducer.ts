import {authAPI, ResultCode, ResultCodeWithCaptcha, secureAPI} from "../api/api"
import {ThunkAction} from "redux-thunk";
import {RootState} from "./redux-store";

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

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

type ActionsType = GetUserDataType | GetCaptchaType


type GetUserDataActionCreatorType = {
    id: number | null
    email: string | null
    login: string | null
    isAuthenticated: boolean
}
type GetUserDataType = {
    type: typeof GET_USER_DATA
    payload: GetUserDataActionCreatorType
}
const getUserData = (id: number | null, email: string | null, login: string | null, isAuthenticated: boolean): GetUserDataType => ({
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

type ThunkActionType = ThunkAction<Promise<void>, RootState, unknown, ActionsType>

export const authAccess = (): ThunkActionType =>
    async (dispatch) => {
        const Data = await authAPI.authMe()
        if (Data.resultCode === ResultCode.Up) {
            let {id, email, login} = Data.data
            dispatch(getUserData(id, email, login, true))
        }
    }

export const logIn = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkActionType =>
    async (dispatch) => {
        const Data = await authAPI.logIn(email, password, rememberMe, captcha)
        if (Data.resultCode === ResultCode.Up) {
            await dispatch(authAccess())
        } else if (Data.resultCode === ResultCodeWithCaptcha.Captcha) {
            await dispatch(getCaptchaUrl())
        }
    }

export const getCaptchaUrl = (): ThunkActionType =>
    async (dispatch) => {
        const response = await secureAPI.getCaptchaUrl()
        dispatch(getCaptcha(response.data.url))
    }


export const logOut = (): ThunkActionType =>
    async (dispatch) => {
        const Data = await authAPI.logOut()
        if (Data.resultCode === ResultCode.Up) {
            dispatch(getUserData(null, null, null, false))
        }
    }

export default authReducer