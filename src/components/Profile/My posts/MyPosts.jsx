import React from "react";
import one from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePageReducer";

const MyPosts = (props) => {

    let myPost = props.post.map((posts) => <Post message={posts.message} likes={posts.likes}/>);

    let getPost = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = getPost.current.value
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={one.itemBlock}>
            <h2>My Posts</h2>
            <div>
                <textarea onChange={onPostChange} ref={getPost} value={props.newPostText}/>
            </div>
            <button onClick={addPost}>Add info</button>
            <div>
                {myPost}
            </div>
        </div>
    )
};
export default MyPosts;