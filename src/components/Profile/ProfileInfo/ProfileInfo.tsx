import styles from "./ProfileInfo.module.css";
import Preloader from "../../../commonFiles/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userImage from "../../../assets/images/avatar-siba.jpg";
import React, {ChangeEvent, FC, useState} from "react";
import ProfileInfoEditMode from "./ProfileInfoEditMode";
import ProfileInfoCurrentMode from "./ProfileInfoCurrentMode";
import {PhotosType, ProfileType} from "../../../types/types";

type  PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    loadPhoto: (file: PhotosType) => void
    saveDataProfile: (profile: ProfileType) => void
}

const ProfileInfo: FC<PropsType> = ({isOwner, profile, status, updateUserStatus, loadPhoto, saveDataProfile}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const addPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            // @ts-ignore
            loadPhoto(e.target.files[0])
        }
    }

    const onSubmit = (values: ProfileType) => {
        saveDataProfile(values)
        setEditMode(false)
    }

    return (
        <div className={styles.profile}>
            <div className={styles.profilePhoto}>
                <img src={profile.photos.large || userImage} alt={''}/>
                {isOwner && <input type={'file'} onChange={addPhoto}/>}
            </div>
            <div className={styles.aboutMe}>
                <b>{profile.fullName}</b>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
            </div>
            {editMode
                ? <ProfileInfoEditMode isOwner={isOwner}
                                       profile={profile}
                                       initialValues={profile}
                                       onSubmit={onSubmit}/>
                : <ProfileInfoCurrentMode isOwner={isOwner}
                                          profile={profile}
                                          upEditMode={() => {
                                              setEditMode(true)
                                          }}/>}
        </div>
    )
}

type  ContactsType = {
    contactItem: string
    contactValue: string
}
export const Contacts: FC<ContactsType> = ({contactItem, contactValue}) => {
    return <div className={styles.aboutContacts}>{contactItem}: {contactValue}</div>
}

export default ProfileInfo;