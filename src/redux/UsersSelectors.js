import {createSelector} from "reselect";

export const getUsersSelect = (state) => state.usersPage.users

export const getUsers = createSelector(getUsersSelect, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state) => state.usersPage.pageSize

export const getTotalCount = (state) => state.usersPage.totalCount

export const getCurrentPage = (state) => state.usersPage.currentPage

export const getIsFetching = (state) => state.usersPage.isFetching

export const getFollowingInProgress = (state) => state.usersPage.followingInProgress