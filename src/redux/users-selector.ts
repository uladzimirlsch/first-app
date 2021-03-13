import {createSelector} from "reselect";
import {RootState} from "./redux-store";

export const getUsersSelect = (state: RootState) => state.users.users

export const getUsers = createSelector(getUsersSelect, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: RootState) => state.users.pageSize

export const getTotalCount = (state: RootState) => state.users.totalCount

export const getCurrentPage = (state: RootState) => state.users.currentPage

export const getIsFetching = (state: RootState) => state.users.isFetching

export const getFollowingInProgress = (state: RootState) => state.users.followingInProgress