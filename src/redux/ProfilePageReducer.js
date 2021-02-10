import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

let initialState = {
    post: [
        {id: 1, message: 'Hello. It is my first post.', likes: 25},
        {id: 2, message: "That's a good network.", likes: 38},
    ],
    newPostText: '',
    profile: null,
    status: '',
}
const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                post: [...state.post, {
                    id: 4,
                    message: state.newPostText,
                    likes: 0
                }],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
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
export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(r => {
            dispatch(setUserProfile(r.data))
        }
    )
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(r => {
            dispatch(setUserStatus(r.data))
        }
    )
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status).then(r => {
            if (r.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        }
    )
}
export default profilePageReducer