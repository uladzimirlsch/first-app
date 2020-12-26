import React from "react";
import one from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let myPost =
        props.myPostData.map((posts) => <Post message={posts.message} likes={posts.likes}/>);

    let getPost = React.createRef()

    let addPost = () => {
        props.addPost()
        props.updateNewPostText('')
    }
    let onPostChange = () => {
        let text = getPost.current.value
        props.updateNewPostText(text)
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