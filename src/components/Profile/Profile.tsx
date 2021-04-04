import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, getStatus} from "../../redux/profile-selectors";
import {getUserProfile, getUserStatus} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {MyPosts} from "./My posts/MyPosts";
import queryString from "querystring";

const Profile: FC = () => {

    const profile = useSelector(getProfile)
    const status = useSelector(getStatus)
    const dispatch = useDispatch()
    const params = useParams()

    const parsed = (queryString.stringify(params)).substr(7)
    const user = parseInt(parsed, 10)
    const userId: number = user || 14459

    useEffect(() => {
        dispatch(getUserProfile(userId))
    }, [])

    useEffect(() => {
        dispatch(getUserStatus(userId))
    }, [])

    return (
        <div>
            <ProfileInfo isOwner={!user}
                         profile={profile}
                         status={status}
            />
            <MyPosts/>
        </div>
    )
};

export default Profile;