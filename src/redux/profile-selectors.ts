import {RootState} from "./redux-store";

export const newPost = (state: RootState) => state.profile.posts

export const getProfile = (state: RootState) => state.profile.profile

export const getStatus = (state: RootState) => state.profile.status