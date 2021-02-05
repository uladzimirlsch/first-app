const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthenticated: false,
}
const authenticReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuthenticated: true,
            }
        default:
            return state
    }
}
export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})

export default authenticReducer