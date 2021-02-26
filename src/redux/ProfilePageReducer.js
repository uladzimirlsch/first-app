import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

let initialState = {
    post: [
        {id: 1, message: 'Hello. It is my first post.', likes: 25},
    ],
    profile: null,
    status: '',
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                post: [...state.post, {id: 2, message: action.newMessage, likes: 0}],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state
    }
}

export const addPost = (newMessage) => ({type: ADD_POST, newMessage})

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

const setUserStatus = (status) => ({type: SET_USER_STATUS, status})


export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserStatus(userId)
        dispatch(setUserStatus(response.data))
    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateUserStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
}

export default profilePageReducer