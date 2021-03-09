import {usersAPI} from "../api/api";
import {UserType} from "../types/types";

const FOLLOW = 'first-app/users/FOLLOW';
const UNFOLLOW = 'first-app/users/UNFOLLOW';
const SET_USERS = 'first-app/users/SET-USERS';
const CURRENT_PAGE = 'first-app/users/CURRENT-PAGE'
const TOTAL_COUNT = 'first-app/users/TOTAL-COUNT'
const TOGGLE_FETCHING = 'first-app/users/TOGGLE-FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'first-app/users/TOGGLE_FOLLOWING_PROGRESS'

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => (u.id === action.userId) ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => (u.id === action.userId) ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount,
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

type AcceptFollowType = {
    type: typeof FOLLOW
    userId: number
}
const acceptFollow = (userId: number): AcceptFollowType => ({type: FOLLOW, userId})

type AcceptUnFollowType = {
    type: typeof UNFOLLOW
    userId: number
}
const acceptUnfollow = (userId: number): AcceptUnFollowType => ({type: UNFOLLOW, userId})

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users})

type SetTotalUsersCountType = {
    type: typeof TOTAL_COUNT
    totalCount: number
}
const setTotalUsersCount = (totalCount: number): SetTotalUsersCountType => ({type: TOTAL_COUNT, totalCount})

type SetCurrentPageType = {
    type: typeof CURRENT_PAGE
    currentPage: number
}
const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: CURRENT_PAGE, currentPage})

type SetIsFetchingType = {
    type: typeof TOGGLE_FETCHING
    isFetching: boolean
}
const setIsFetching = (isFetching: boolean): SetIsFetchingType => ({type: TOGGLE_FETCHING, isFetching})

type SetFollowingIsProgressType = {
    type: typeof TOGGLE_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
const setFollowingIsProgress = (isFetching: boolean, userId: number): SetFollowingIsProgressType => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let response = await usersAPI.requestUsers(currentPage, pageSize)
        dispatch(setUsers(response.data.items))
        dispatch(setTotalUsersCount(response.data.totalCount))
        dispatch(setIsFetching(false))
    }
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        dispatch(setFollowingIsProgress(true, userId))
        let response = await usersAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(acceptFollow(userId))
            dispatch(setFollowingIsProgress(false, userId))
        }
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        dispatch(setFollowingIsProgress(true, userId))
        let response = await usersAPI.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(acceptUnfollow(userId))
            dispatch(setFollowingIsProgress(false, userId))
        }
    }
}

export default usersReducer