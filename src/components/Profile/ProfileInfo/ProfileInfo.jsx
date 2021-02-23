import styles from "./ProfileInfo.module.css";
import Preloader from "../../../commonFiles/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={styles.profile}>
            <div>
                <img src={"https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"} alt=""/>
            </div>
            <div className={styles.profilePhoto}>
                <img src={props.profile.photos.large} alt={''}/>
                <ProfileStatus {...props}/>
            </div>
        </div>
    )
};

export default ProfileInfo;