import {addPost, deletePost} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		post: state.profilePage.post,
	}
}
export default  connect(mapStateToProps, {addPost, deletePost})(MyPosts)

