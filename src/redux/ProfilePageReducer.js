import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'
const SET_LOAD_PHOTOS = 'SET-LOAD-PHOTOS'

let initialState = {
    post: [{}],
    profile: null,
    status: '',
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                post: [...state.post, {id: 1, message: action.newPost}],
            }
        case DELETE_POST:
            return {
                ...state,
                post: state.post.filter(item => item.id !== action.postId),
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
        case SET_LOAD_PHOTOS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state
    }
}

export const addPost = (newPost) => ({type: ADD_POST, newPost})

export const deletePost = (postId) => ({type: ADD_POST, postId})

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

const setLoadPhotos = (photos) => ({type: SET_LOAD_PHOTOS, photos})


export const getUserProfile = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getUserStatus(userId)
        dispatch(setUserStatus(response.data))
    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
       const response = await profileAPI.updateUserStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
}

export const loadPhoto = (file) => {
    return async (dispatch) => {
        const response = await profileAPI.loadPhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(setLoadPhotos(response.data.data.photos))
        }
    }
}
export const saveDataProfile = (profile, getState) => {
    // const user = getState().auth.id
    return async (dispatch) => {
        const response = await profileAPI.saveDataProfile(profile)
        if (response.data.resultCode === 0) {
            // dispatch(getUserProfile(user))
        }
    }
}

export default profilePageReducer