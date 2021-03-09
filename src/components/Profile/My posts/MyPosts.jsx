import React from "react";
import one from "./MyPosts.module.css"
import Post from "./Post/Post";
import PostForm from "./PostForm";


const MyPosts = (props) => {

    let myPost = props.posts.map(p => (
        <Post key={p.id} id={p.id} post={p.post} likes={p.likes}/>))

    const addPost = (value) => {
        props.addPost(value.newPost)
    }

    const deletePost = (value) => {
        props.deletePost(value.postId)
    }
    return (
        <div className={one.itemBlock}>
            <h3>My Posts</h3>
            <div>
                {myPost }
                <button onClick={deletePost}>Delete post</button>
                <div>
                    <PostForm onSubmit={addPost}/>
                </div>

            </div>
        </div>
    )
};

export default MyPosts;