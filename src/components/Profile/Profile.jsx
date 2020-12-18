import one from './Profile.module.css';
import MyPosts from "./My posts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src={"https://www.traveldailymedia.com/oachugot/2020/01/thailandblogger.jpg"} alt=""/>
            </div>
            <div>
                Avatar
            </div>
            <MyPosts/>
        </div>
    )
};
export default Profile;