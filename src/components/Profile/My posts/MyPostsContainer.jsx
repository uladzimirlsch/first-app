import {addPost, deletePost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		posts: state.profile.posts,
		profile: state.profile.profile
	}
}
export default  connect(mapStateToProps, {addPost, deletePost})(MyPosts)

