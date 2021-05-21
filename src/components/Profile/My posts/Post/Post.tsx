import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Post.module.scss';
import { PostType } from '../../../../types/types';

type PropsType = {
  post: PostType;
};

export const Post: FC<PropsType> = ({ post }) => {
  const dispatch = useDispatch();

  const deletePost = (postId: number) => {
    dispatch({ type: 'DELETE_POST', postId });
  };

  return (
    <div className={styles.post}>
      {post.post}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <button
        onClick={(_event: React.MouseEvent<HTMLElement>) =>
          deletePost
        }
      >
        Delete
      </button>
    </div>
  );
};
