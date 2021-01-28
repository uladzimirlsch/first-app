import React from "react";
import one from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
	let myPost = props.post.map(posts => (<Post message={posts.message} likes={posts.likes} key={posts.id}/>));

	return (
		<div className={one.itemBlock}>
			<h3>My Posts</h3>
			<div>
                <textarea
					value={props.newPostText}
					onChange={(event) => {
						props.updateNewPostText(event.target.value)
					}}
					placeholder={'Add post'}/>
			</div>
			<div>
				<button onClick={() => {
					props.addPost()
				}}>Send
				</button>
			</div>
			<div>
				{myPost}
			</div>
		</div>
	)
};
export default MyPosts;