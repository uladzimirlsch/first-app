import React from "react";
import one from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
	let myPost = props.post.map( posts => <Post message={posts.message} likes={posts.likes}/> );
	let newPostText = React.createRef()

	let onPostChange = () => {
		props.updateNewPostText(newPostText.current.value)
	}
	let onAddPost = () => {
		props.addPost()
	}
	return (
		<div className={one.itemBlock}>
			<h2>My Posts</h2>
			<div>
                <textarea
					value={props.newPostText}
					onChange={onPostChange}
					placeholder={'Add post'}
					ref={newPostText} />
			</div>
            <button onClick={onAddPost}>Add info</button>
			<div>
				{myPost}
			</div>
		</div>
	)
};
export default MyPosts;