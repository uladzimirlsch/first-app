import styles from "./ProfileInfo.module.css";
import Preloader from "../../../commonFiles/preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import userImage from "../../../assets/images/avatar-siba.jpg";
import React from "react";
import {useState} from "react";
import ProfileInfoEditMode from "./ProfileInfoEditMode";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const addPhoto = (e) => {
        if (e.target.files.length) {
            props.loadPhoto(e.target.files[0])
        }
    }

    const onSubmit = (values) => {
        props.saveDataProfile(values)
        setEditMode(false)
    }

    return (
        <div className={styles.profile}>
            <div className={styles.profilePhoto}>
                <img src={props.profile.photos.large || userImage} alt={''}/>
                {props.isOwner && <input type={'file'} onChange={addPhoto}/>}
            </div>
            <div className={styles.aboutMe}>
                <b>{props.profile.fullName}</b>

                <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus}/>

            </div>
            {editMode
                ? <ProfileInfoEditMode initialValues={props.profile} onSubmit={onSubmit} {...props}/>
                : <ProfileBlock upEditMode={() => {
                    setEditMode(true)
                }} {...props}/>}
        </div>
    )
};

const ProfileBlock = (props) => {
    return <div className={styles.aboutMe}>
        <div className={styles.aboutMeToo}>
            <b>About me: </b>{props.profile.aboutMe}
        </div>
        <div className={styles.aboutMeToo}>
            <b>Looking for a job: </b>{props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div className={styles.aboutMeToo}>
            <b>My skills: </b>{props.profile.lookingForAJobDescription}
        </div>
        <div className={styles.aboutMeToo}>
            <b>Contacts: </b>{Object.keys(props.profile.contacts).map(keys => {
                return <Contacts key={keys} contactItem={keys} contactValue={props.profile.contacts[keys]}/>
            }
        )
        }
        </div>
        {props.isOwner && <button onClick={props.upEditMode}>edit</button>}
    </div>
}

export const Contacts = ({contactItem, contactValue}) => {
    return <div className={styles.aboutContacts}>{contactItem}: {contactValue}</div>
}

export default ProfileInfo;