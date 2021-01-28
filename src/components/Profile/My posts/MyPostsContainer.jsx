import {addPostAC, updateNewPostTextAC} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		post: state.profilePage.post,
		newPostText: state.profilePage.newPostText
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostAC())
		},
		updateNewPostText: (text) => {
			dispatch(updateNewPostTextAC(text))
		}
	}
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;