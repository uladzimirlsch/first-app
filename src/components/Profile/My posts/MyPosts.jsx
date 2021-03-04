import React from "react";
import one from "./MyPosts.module.css"
import Post from "./Post/Post";
import PostForm from "./PostForm";


const MyPosts = (props) => {

    let myPost = props.post.map(posts => (
        <Post message={posts.message} likes={posts.likes} key={posts.id}/>));

    const addPost = (value) => {
        props.addPost(value.newPost)
    }

    const deletePostPost = (value) => {
        props.deletePost(value.postId)
    }

    return (
        <div className={one.itemBlock}>
            <h3>My Posts</h3>
            <div>
                <PostForm onSubmit={addPost} />
            </div>
            <div>
                {myPost}
            </div>
        </div>
    )
};

export default MyPosts;