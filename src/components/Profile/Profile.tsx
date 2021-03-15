import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import React, {FC} from "react";
import {PhotosType, ProfileType} from "../../types/types";

type  PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string | null
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    loadPhoto: (file: PhotosType) => void
    saveDataProfile: (profile: ProfileType) => void
}

const Profile: FC<PropsType> = ({
                                    isOwner,
                                    profile,
                                    status,
                                    getUserProfile,
                                    getUserStatus,
                                    updateUserStatus,
                                    loadPhoto,
                                    saveDataProfile
                                }) => {
    return (
        <div>
            <ProfileInfo isOwner={isOwner}
                         profile={profile}
                         status={status}
                         getUserProfile={getUserProfile}
                         getUserStatus={getUserStatus}
                         updateUserStatus={updateUserStatus}
                         loadPhoto={loadPhoto}
                         saveDataProfile={saveDataProfile}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;