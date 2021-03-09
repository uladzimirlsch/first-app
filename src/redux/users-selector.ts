import {createSelector} from "reselect";
import {StateType} from "./redux-store";

export const getUsersSelect = (state: StateType) => state.users.users

export const getUsers = createSelector(getUsersSelect, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: StateType) => state.users.pageSize

export const getTotalCount = (state: StateType) => state.users.totalCount

export const getCurrentPage = (state: StateType) => state.users.currentPage

export const getIsFetching = (state: StateType) => state.users.isFetching

export const getFollowingInProgress = (state: StateType) => state.users.followingInProgress