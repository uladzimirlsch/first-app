import React, {FC, MouseEventHandler} from "react";
import one from "./MyPosts.module.css"
import Post from "./Post/Post";
import PostForm from "./PostForm";
import {PostType} from "../../../types/types";

type PropsType = {
    posts: PostType []
    addPost: (newPost: string | null) => void
    deletePost: (postId: number) => void
}

const MyPosts: FC<PropsType> = ({posts, addPost, deletePost}) => {

    let myPost = posts.map(p => (<Post key={p.id} post={p}/>))

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
                {myPost }
                {/*<button onClick={deleteNewPost}>Delete post</button>*/}
            </div>
        </div>
    )
};

export default MyPosts;