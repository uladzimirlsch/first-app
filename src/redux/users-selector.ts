import { createSelector } from 'reselect';
import { RootState } from './redux-store';

export const getUsersSelect = (state: RootState) => state.users.users;

export const getUsers = createSelector(getUsersSelect, (users) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return users.filter((u) => true);
});

export const getPageSize = (state: RootState) => state.users.pageSize;

export const getTotalCount = (state: RootState) =>
  state.users.totalCount;

export const getCurrentPage = (state: RootState) =>
  state.users.currentPage;

export const getIsFetching = (state: RootState) =>
  state.users.isFetching;

export const getUsersFilter = (state: RootState) =>
  state.users.usersFilter;

export const getFollowingInProgress = (state: RootState) =>
  state.users.followingInProgress;
