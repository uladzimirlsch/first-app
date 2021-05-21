import { ProfileType } from '../types/types';
import { instance, ResponseData } from './api';

type loadPhoto = {
  photos: {
    small: string | null;
    large: string | null;
  };
};
export const profileAPI = {
  getUserProfile(userId: number) {
    return instance
      .get<ProfileType>(`profile/${userId}`)
      .then((res) => res.data);
  },
  getUserStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`);
  },
  updateUserStatus(status: string) {
    return instance
      .put<ResponseData>(`profile/status/`, { status })
      .then((res) => res.data);
  },
  loadPhoto(filePhoto: any) {
    const formData = new FormData();
    formData.append('imageUpload', filePhoto);
    return instance
      .put<ResponseData<loadPhoto>>(`profile/photo/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data);
  },
  saveDataProfile(profile: ProfileType) {
    return instance
      .put<ResponseData>(`profile`, profile)
      .then((res) => res.data);
  },
};
