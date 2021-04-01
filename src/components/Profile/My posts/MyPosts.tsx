import React, {FC} from "react";
import one from "./MyPosts.module.css"
import Post from "./Post/Post";
import PostForm from "./PostForm";
import {useDispatch, useSelector} from "react-redux";
import {newPost} from "../../../redux/profile-selectors";

const MyPosts: FC = () => {

    const posts = useSelector(newPost)
    const dispatch = useDispatch()

    const addPost = (newPost: string | null) => {
        dispatch({type: 'ADD_POST', newPost})
    }
    const deletePost = (postId: number) => {
        dispatch({type: 'DELETE_POST', postId})
    }

    const addNewPost = (value: { newPost: string | null }) => {
        addPost(value.newPost)
    }

    // const deleteNewPost = (value: { postId: number }) => {
    //     deletePost(value.postId)
    // }
    return (
        <div className={one.itemBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <PostForm onSubmitPost={addNewPost}/>
                </div>
                {posts.map(p => (<Post key={p.id} post={p}/>))}
                {/*<button onClick={deleteNewPost}>Delete post</button>*/}
            </div>
        </div>
    )
};

export default MyPosts;