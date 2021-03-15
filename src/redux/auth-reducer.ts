import {ResultCode, ResultCodeWithCaptcha} from "../api/api"
import {BaseThunk, InferValuesType} from "./redux-store";
import {authAPI} from "../api/auth-api";
import {secureAPI} from "../api/secure-api";

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuthenticated: false,
    captchaUrl: null as string | null
}

type InitialState = typeof initialState

const authReducer = (state = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case 'GET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }
        case 'GET_CAPTCHA':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

type ActionsType = InferValuesType<typeof actions>

const actions = {
    getUserData: (id: number | null,
                  email: string | null,
                  login: string | null,
                  isAuthenticated: boolean) => ({
        type: 'GET_USER_DATA',
        payload: {id, email, login, isAuthenticated}
    } as const),
    getCaptcha: (captchaUrl: string) => ({type: 'GET_CAPTCHA', payload: {captchaUrl}} as const)
}

type ThunkActionType = BaseThunk<ActionsType>

export const authAccess = (): ThunkActionType =>
    async (dispatch) => {
        const Data = await authAPI.authMe()
        if (Data.resultCode === ResultCode.Up) {
            let {id, email, login} = Data.data
            dispatch(actions.getUserData(id, email, login, true))
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
        const Data = await secureAPI.getCaptchaUrl()
        dispatch(actions.getCaptcha(Data.url))
    }

export const logOut = (): ThunkActionType =>
    async (dispatch) => {
        const Data = await authAPI.logOut()
        if (Data.resultCode === ResultCode.Up) {
            dispatch(actions.getUserData(null, null, null, false))
        }
    }

export default authReducer