import {actions} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootState} from "../../../redux/redux-store";
import {PostType} from "../../../types/types";

type StateProps = {
    posts: PostType []
}
type DispatchProps = {
    addPost: (newPost: string | null) => void
    deletePost: (postId: number) => void
}
type  OwnProps = {}

let mapStateToProps = (state: RootState): StateProps => {
    return {
        posts: state.profile.posts,
    }
}
export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, {
    addPost: actions.addPost,
    deletePost: actions.deletePost
})(MyPosts)

