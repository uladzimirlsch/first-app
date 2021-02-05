import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import Preloader from "../../commonFiles/preloader/Preloader";

const Profile = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			<ProfileInfo profile={props.profile}/>
			<MyPostsContainer />
		</div>
	)
};
export default Profile;