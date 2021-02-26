import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthenticated: false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
const getUserData = (id, email, login, isAuthenticated) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuthenticated}
})

export const authAccess = () => {
    return async (dispatch) => {
        let response = await authAPI.authMe()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(getUserData(id, email, login, true))
        }
    }
}

export const logIn = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.logIn(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(authAccess())
        }
    }
}

export const logOut = () => {
    return async (dispatch) => {
        let response = await authAPI.logOut()
        if (response.data.resultCode === 0) {
            dispatch(getUserData(null, null, null, false))
        }
    }
}

export default authReducer