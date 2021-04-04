import React, {FC} from "react";
import one from "./MyPosts.module.css"
import Post from "./Post/Post";
import PostForm from "./PostForm";
import {useDispatch, useSelector} from "react-redux";
import {newPost} from "../../../redux/profile-selectors";

export const MyPosts: FC = () => {

    const posts = useSelector(newPost)
    const dispatch = useDispatch()

    const addPost = (newPost: string | null) => {
        dispatch({type: 'ADD_POST', newPost})
    }

    const addNewPost = (value: { newPost: string | null }) => {
        addPost(value.newPost)
    }

    return (
        <div className={one.itemBlock}>
            <h4>My Posts</h4>
            <PostForm onSubmitPost={addNewPost}/>
            {posts.map(p => (<Post key={p.id} post={p}/>))}
        </div>
    )
};
