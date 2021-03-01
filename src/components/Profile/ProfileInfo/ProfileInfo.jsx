import styles from "./ProfileInfo.module.css";
import Preloader from "../../../commonFiles/preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import userImage from "../../../assets/images/avatar-siba.jpg";
import React from "react";

const ProfileInfo = ({isOwner, updateUserStatus, loadPhoto, profile, status}) => {

    if (!profile) {
        return <Preloader/>
    }

    const addPhoto = (e) => {
        if (e.target.files.length) {
            loadPhoto(e.target.files[0])
        }
    }

    return (
        <div className={styles.profile}>
            <div>
                <img
                    src={"https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"}
                    alt=""/>
            </div>
            <div className={styles.profilePhoto}>
                <img src={profile.photos.large || userImage} alt={''}/>
                {isOwner && <input type={'file'} onChange={addPhoto}/>}
                <ProfileStatusHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo;