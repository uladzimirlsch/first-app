import {ResultCode} from "../api/api";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {BaseThunk, InferValuesType} from "./redux-store";
import {profileAPI} from "../api/profile-api";

let initialState = {
    posts: [] as PostType[],
    profile: null as ProfileType | null,
    status: ''
}

type InitialState = typeof initialState

const profileReducer = (state = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, {id: 1, post: action.newPost}],
            }
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.postId),
            }
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET_USER_STATUS':
            return {
                ...state,
                status: action.status,
            }
        case 'SET_LOAD_PHOTOS':
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state
    }
}

type ActionsType = InferValuesType<typeof actions>

export const actions = {
    addPost: (newPost: string | null) => ({type: 'ADD_POST', newPost} as const),
    deletePost: (postId: number) => ({type: 'DELETE_POST', postId} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
    setUserStatus: (status: string) => ({type: 'SET_USER_STATUS', status} as const),
    setLoadPhotos: (photos: PhotosType) => ({type: 'SET_LOAD_PHOTOS', photos} as const),
}

type ThunkActionType = BaseThunk<ActionsType>

export const getUserProfile = (userId: number): ThunkActionType =>
    async (dispatch) => {
        const Data = await profileAPI.getUserProfile(userId)
        dispatch(actions.setUserProfile(Data))
    }

export const getUserStatus = (userId: number): ThunkActionType =>
    async (dispatch) => {
        const response = await profileAPI.getUserStatus(userId)
        dispatch(actions.setUserStatus(response.data))
    }

export const updateUserStatus = (status: string): ThunkActionType =>
    async (dispatch) => {
        const Data = await profileAPI.updateUserStatus(status)
        if (Data.resultCode === ResultCode.Up) {
            dispatch(actions.setUserStatus(status))
        }
    }

export const loadPhoto = (file: PhotosType): ThunkActionType =>
    async (dispatch) => {
        const Data = await profileAPI.loadPhoto(file)
        if (Data.resultCode === ResultCode.Up) {
            dispatch(actions.setLoadPhotos(Data.data.photos))
        }
    }

export const saveDataProfile = (profile: ProfileType): ThunkActionType =>
    async (dispatch, getState) => {
        const Data = await profileAPI.saveDataProfile(profile)
        if (Data.resultCode === ResultCode.Up) {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            await dispatch(getUserProfile(<number>getState().auth.id))
        }
    }

export default profileReducer