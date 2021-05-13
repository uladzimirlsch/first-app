import React, {ChangeEvent, FC, useState} from "react";
import styles from "../Profile.module.scss";
import Preloader from "../../../commonFiles/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import userImage from "../../../assets/images/avatar-siba.jpg";
import {ProfileInfoEditMode} from "./ProfileInfoEditMode";
import {ProfileInfoCurrentMode} from "./ProfileInfoCurrentMode";
import {PhotosType, ProfileType} from "../../../types/types";
import {useDispatch} from "react-redux";
import {loadPhoto, saveDataProfile, updateUserStatus} from "../../../redux/profile-reducer";

type  PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
}

export const ProfileInfo: FC<PropsType> = ({isOwner, profile, status}) => {

    const dispatch = useDispatch()

    const userStatus = (status: string) => {
        dispatch(updateUserStatus(status))
    }
    const uploadPhoto = (file: PhotosType) => {
        dispatch(loadPhoto(file))
    }
    const dataProfile = (profile: ProfileType) => {
        dispatch(saveDataProfile(profile))
    }

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const addPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            // @ts-ignore
            uploadPhoto(e.target.files[0])
        }
    }

    const onSubmit = (values: ProfileType) => {
        dataProfile(values)
        setEditMode(false)
    }

    return (
        <>
            <div className={styles.profilePhoto}>
                <img src={profile.photos.large || userImage} alt={''}/>
                {isOwner && <input type={'file'} onChange={addPhoto}/>}
            </div>
            <div className={styles.aboutMe}>
                {profile.fullName}
                <ProfileStatus status={status} updateUserStatus={userStatus}/>
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
                                          }}/>
            }
        </>
    )
}

