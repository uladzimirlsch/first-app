import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import queryString from 'querystring';
import styles from './Profile.module.scss';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { getProfile, getStatus } from '../../redux/profile-selectors';
import {
  getUserProfile,
  getUserStatus,
} from '../../redux/profile-reducer';
import { MyPosts } from './My posts/MyPosts';
import { RootState } from '../../redux/redux-store';

export const Profile: FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  const profile = useSelector(getProfile);
  const status = useSelector(getStatus);
  const dispatch = useDispatch();
  const params = useParams();

  const parsed = queryString.stringify(params).substr(7);
  const user = parseInt(parsed, 10);
  const userId: number = user || 14459;

  useEffect(() => {
    dispatch(getUserProfile(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    dispatch(getUserStatus(userId));
  }, [dispatch, userId]);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={styles.profileItem}>
      <ProfileInfo
        isOwner={!user}
        profile={profile}
        status={status}
      />
      <MyPosts />
    </div>
  );
};
