import {profileAPI} from "../api/api";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./redux-store";

const ADD_POST = 'first-app/profile/ADD-POST'
const DELETE_POST = 'first-app/profile/DELETE-POST'
const SET_USER_PROFILE = 'first-app/profile/SET-USER-PROFILE'
const SET_USER_STATUS = 'first-app/profile/SET-USER-STATUS'
const SET_LOAD_PHOTOS = 'first-app/profile/SET-LOAD-PHOTOS'

let initialState = {
    posts: [] as PostType[],
    profile: null as ProfileType | null,
    status: '',
}

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 0, post: action.newPost}],
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.postId),
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
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state
    }
}

type ActionsType = AddPostType | DeletePostType | SetUserProfileType | SetUserStatus | SetLoadPhotos

type AddPostType = {
    type: typeof ADD_POST
    newPost: string | null
}
export const addPost = (newPost: string | null): AddPostType => ({type: ADD_POST, newPost})

type DeletePostType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostType => ({type: DELETE_POST, postId})

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile})

type SetUserStatus = {
    type: typeof SET_USER_STATUS
    status: string | number
}
const setUserStatus = (status: string): SetUserStatus => ({type: SET_USER_STATUS, status})

type SetLoadPhotos = {
    type: typeof SET_LOAD_PHOTOS
    photos: PhotosType
}
const setLoadPhotos = (photos: PhotosType): SetLoadPhotos => ({type: SET_LOAD_PHOTOS, photos})

type ThunkActionType = ThunkAction<Promise<void>, RootState, unknown, ActionsType>

export const getUserProfile = (userId: number): ThunkActionType =>
    async (dispatch) => {
        const response = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(response.data))
    }

export const getUserStatus = (userId: number): ThunkActionType =>
    async (dispatch) => {
        const response = await profileAPI.getUserStatus(userId)
        dispatch(setUserStatus(response.data))
    }

export const updateUserStatus = (status: string): ThunkActionType =>
    async (dispatch) => {
        const response = await profileAPI.updateUserStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }

export const loadPhoto = (file: PhotosType): ThunkActionType =>
    async (dispatch) => {
        const response = await profileAPI.loadPhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(setLoadPhotos(response.data.data.photos))
        }
    }
export const saveDataProfile = (profile: ProfileType): ThunkActionType =>
    async (dispatch, getState) => {
        const response = await profileAPI.saveDataProfile(profile)
        if (response.data.resultCode === 0) {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            await dispatch(getUserProfile(<number>getState().auth.id))
        }
    }

export default profileReducer