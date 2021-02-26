import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CURRENT_PAGE = 'CURRENT-PAGE'
const TOTAL_COUNT = 'TOTAL-COUNT'
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersPageReducer = (state = initialState, action) => {
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
                currentPage: action.page
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

const acceptFollow = (userId) => ({type: FOLLOW, userId})

const acceptUnfollow = (userId) => ({type: UNFOLLOW, userId})

const setUsers = (users) => ({type: SET_USERS, users})

const setTotalUsersCount = (totalCount) => ({type: TOTAL_COUNT, totalCount})

const setCurrentPage = (page) => ({type: CURRENT_PAGE, page})

const setIsFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})

const setFollowingIsProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(page))
        let response = await usersAPI.requestUsers(page, pageSize)
        dispatch(setUsers(response.data.items))
        dispatch(setTotalUsersCount(response.data.totalCount))
        dispatch(setIsFetching(false))
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(setFollowingIsProgress(true, userId))
        let response = await usersAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(acceptFollow(userId))
            dispatch(setFollowingIsProgress(false, userId))
        }
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(setFollowingIsProgress(true, userId))
        let response = await usersAPI.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(acceptUnfollow(userId))
            dispatch(setFollowingIsProgress(false, userId))
        }
    }
}

export default usersPageReducer