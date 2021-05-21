import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Users.module.scss';
import userImage from '../../assets/images/avatar-siba.jpg';
import { UserType } from '../../types/types';
import { getFollowingInProgress } from '../../redux/users-selector';
import { follow, unfollow } from '../../redux/users-reducer';

type PropsType = {
  user: UserType;
};

export const User: FC<PropsType> = ({ user }) => {
  const followingInProgress = useSelector(getFollowingInProgress);
  const dispatch = useDispatch();

  const userFollow = (userId: number) => dispatch(follow(userId));
  const userUnfollow = (userId: number) => dispatch(unfollow(userId));

  return (
    <div className={styles.userItem}>
      <Link to={`/profile/${user.id}`}>
        <img src={user.photos.small || userImage} alt="" />
      </Link>
      <Link to={`/profile/${user.id}`}>
        <div>{user.name}</div>
      </Link>
      <div>{user.status}</div>
      <div>
        {user.followed ? (
          <button
            type="submit"
            disabled={followingInProgress.some(
              (id) => id === user.id,
            )}
            onClick={() => {
              userUnfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            type="submit"
            disabled={followingInProgress.some(
              (id) => id === user.id,
            )}
            onClick={() => {
              userFollow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};
