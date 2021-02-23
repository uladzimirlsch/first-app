import {addPost} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		post: state.profilePage.post,
		newPostText: state.profilePage.newPostText
	}
}
export default  connect(mapStateToProps, {addPost})(MyPosts)

