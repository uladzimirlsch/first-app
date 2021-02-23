import React from "react";
import one from "./MyPosts.module.css"
import Post from "./Post/Post";
import ReduxTextAreaForm from "../../Dialogs/NewTextArea";


const MyPosts = (props) => {
	let myPost = props.post.map(posts => (<Post message={posts.message} likes={posts.likes} key={posts.id}/>));

	const addPost = (values) => {
		props.addPost(values.newMessage)
	}

	return (
		<div className={one.itemBlock}>
			<h3>My Posts</h3>
			<div>
				<ReduxTextAreaForm onSubmit={addPost}/>
			</div>
			<div>
				{myPost}
			</div>
		</div>
	)
};
export default MyPosts;