import one from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={one.profile_item}>
            <div>
                <img src={"https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"} alt=""/>
            </div>
            <div className={one.profile_ava}>
                Avatar
            </div>
        </div>
    )
};
export default ProfileInfo;