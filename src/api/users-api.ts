import { UserType } from '../types/types';
import { instance, ResponseData } from './api';
import { profileAPI } from './profile-api';

type requestUsers = {
  items: UserType[];
  totalCount: number;
  error: string;
};
export const usersAPI = {
  requestUsers(
    currentPage = 1,
    pageSize = 10,
    term = '',
    friend: null | boolean = null,
  ) {
    return instance
      .get<requestUsers>(
        `users?page=${currentPage}&count=${pageSize}&term=${term}${
          friend === null ? '' : `&friend=${friend}`
        }`,
      )
      .then((res) => res.data);
  },
  follow(userId: number) {
    return instance
      .post<ResponseData>(`follow/${userId}`)
      .then((res) => res.data);
  },
  unfollow(userId: number) {
    return instance
      .delete<ResponseData>(`follow/${userId}`)
      .then((res) => res.data);
  },
  getUserProfile(userId: number) {
    return profileAPI.getUserProfile(userId);
  },
};
