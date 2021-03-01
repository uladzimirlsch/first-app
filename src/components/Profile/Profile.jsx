import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import React from "react";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo isOwner={!props.match.params.userId}
						 updateUserStatus={props.updateUserStatus}
						 loadPhoto={props.loadPhoto}
						 profile={props.profile}
						 status={props.status}/>
			<MyPostsContainer />
		</div>
	)
};

export default Profile;