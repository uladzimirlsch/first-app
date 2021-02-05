import one from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={one.profile}>
            <div>
                <img src={"https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"} alt=""/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
        </div>
    )
};
export default ProfileInfo;