import {ContactsType, ProfileType} from "../../../types/types";
import React, {FC} from "react";
import styles from "./ProfileInfo.module.css";
import {Contacts} from "./ProfileInfo";

type  PropsType = {
    isOwner: boolean
    profile: ProfileType
    upEditMode: () => void
}

const ProfileInfoCurrentMode: FC<PropsType> = ({isOwner, profile, upEditMode}) => {
    return <div className={styles.aboutMe}>
        <div className={styles.aboutMeToo}>
            <b>About me: </b>{profile.aboutMe}
        </div>
        <div className={styles.aboutMeToo}>
            <b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div className={styles.aboutMeToo}>
            <b>My skills: </b>{profile.lookingForAJobDescription}
        </div>
        <div className={styles.aboutMeToo}>
            <b>Contacts: </b>
            {Object
                .keys(profile.contacts)
                .map(keys => <Contacts key={keys}
                                       contactItem={keys}
                                       contactValue={profile.contacts[keys as keyof ContactsType]}/>)
            }
        </div>
        {isOwner && <button onClick={upEditMode}>edit</button>}
    </div>
}

export default ProfileInfoCurrentMode