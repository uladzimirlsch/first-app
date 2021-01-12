import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
	let state = props.store.getState()

	let onPostChange = (text) => {
		props.store.dispatch(updateNewPostTextActionCreator(text))
	}
	let addPost = () => {
	props.store.dispatch(addPostActionCreator())
	}
	return (
		<MyPosts updateNewPostText={onPostChange}
				 addPost={addPost}
				 post={state.profilePage.post}
				 newPostText={state.profilePage.newPostText}/>
	)
};
export default MyPostsContainer;