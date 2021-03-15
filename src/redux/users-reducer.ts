import {ResultCode} from "../api/api";
import {UserType} from "../types/types";
import {BaseThunk, InferValuesType} from "./redux-store";
import {usersAPI} from "../api/users-api";

let initialState = {
    users: [] as UserType[],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[]
}

type InitialState = typeof initialState

const usersReducer = (state = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => (u.id === action.userId) ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => (u.id === action.userId) ? {...u, followed: false} : u)
            }
        case "SET_USERS":
            return {
                ...state,
                users: action.users
            }
        case "TOTAL_COUNT":
            return {
                ...state,
                totalCount: action.totalCount,
            }
        case "CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "TOGGLE_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case "TOGGLE_FOLLOWING_PROGRESS":
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

type ActionsType = InferValuesType<typeof actions>

const actions = {
    acceptFollow: (userId: number) => ({type: 'FOLLOW', userId} as const),
    acceptUnfollow: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: UserType[]) => ({type: 'SET_USERS', users} as const),
    setTotalUsersCount: (totalCount: number) => ({type: 'TOTAL_COUNT', totalCount} as const),
    setCurrentPage: (currentPage: number) => ({type: 'CURRENT_PAGE', currentPage} as const),
    setIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_FETCHING', isFetching}) as const,
    setFollowingIsProgress: (isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const),
}

type ThunkActionType = BaseThunk<ActionsType>

export const requestUsers = (currentPage: number, pageSize: number): ThunkActionType =>
    async (dispatch) => {
        dispatch(actions.setIsFetching(true))
        dispatch(actions.setCurrentPage(currentPage))
        let Data = await usersAPI.requestUsers(currentPage, pageSize)
        dispatch(actions.setUsers(Data.items))
        dispatch(actions.setTotalUsersCount(Data.totalCount))
        dispatch(actions.setIsFetching(false))
    }

export const follow = (userId: number): ThunkActionType =>
    async (dispatch) => {
        dispatch(actions.setFollowingIsProgress(true, userId))
        let Data = await usersAPI.follow(userId)
        if (Data.resultCode === ResultCode.Up) {
            dispatch(actions.acceptFollow(userId))
            dispatch(actions.setFollowingIsProgress(false, userId))
        }
    }

export const unfollow = (userId: number): ThunkActionType =>
    async (dispatch) => {
        dispatch(actions.setFollowingIsProgress(true, userId))
        let Data = await usersAPI.unfollow(userId)
        if (Data.resultCode === ResultCode.Up) {
            dispatch(actions.acceptUnfollow(userId))
            dispatch(actions.setFollowingIsProgress(false, userId))
        }
    }

export default usersReducer