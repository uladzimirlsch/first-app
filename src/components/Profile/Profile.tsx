import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React, {FC, useEffect} from "react";
import {PhotosType, ProfileType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, getStatus} from "../../redux/profile-selectors";
import {getUserProfile, getUserStatus, loadPhoto, saveDataProfile, updateUserStatus} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import MyPosts from "./My posts/MyPosts";


const Profile: FC = () => {

    const profile = useSelector(getProfile)
    const status = useSelector(getStatus)
    const dispatch = useDispatch()
    const params = useParams()

    const userId: number = +params || 14459

    useEffect(() => {
        dispatch(getUserProfile(userId))
    }, [])

    useEffect(() => {
        dispatch(getUserStatus(userId))
    }, [])

    const userStatus = (status: string) => {
        dispatch(updateUserStatus(status))
    }
    const uploadPhoto = (file: PhotosType) => {
        dispatch(loadPhoto(file))
    }
    const dataProfile = (profile: ProfileType) => {
        dispatch(saveDataProfile(profile))
    }

    return (
        <div>
            <ProfileInfo isOwner={!params}
                         profile={profile}
                         status={status}
                         updateUserStatus={userStatus}
                         loadPhoto={uploadPhoto}
                         saveDataProfile={dataProfile}/>
            <MyPosts />
        </div>
    )
};

export default Profile;