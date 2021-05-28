import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../profile.module.scss';
import { Post } from './post/post';
import { PostForm } from './post/post-form';
import { newPost } from '../../../redux/profile-selectors';

export const MyPosts: FC = () => {
  const posts = useSelector(newPost);
  const dispatch = useDispatch();

  const addPost = (newPost: string | null) => {
    dispatch({ type: 'ADD_POST', newPost });
  };

  const addNewPost = (value: { newPost: string | null }) => {
    addPost(value.newPost);
  };

  return (
    <div className={styles.postItem}>
      <p>My Posts</p>
      <PostForm onSubmitPost={addNewPost} />
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
};
