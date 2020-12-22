import one from './Profile.module.css';
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPostData={props.state.myPostData}/>
        </div>
    )
};
export default Profile;