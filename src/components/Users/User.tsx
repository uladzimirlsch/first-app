import React, {FC} from "react";
import styles from "./User.module.css";
import userImage from "../../assets/images/avatar-siba.jpg";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {getFollowingInProgress} from "../../redux/users-selector";
import {follow, unfollow} from "../../redux/users-reducer";

type  PropsType = {
    user: UserType
}

export const User: FC<PropsType> = ({user}) => {

    const followingInProgress = useSelector(getFollowingInProgress)
    const dispatch = useDispatch()

    const userFollow = (userId: number) => dispatch(follow(userId))
    const userUnfollow = (userId: number) => dispatch(unfollow(userId))

    return (
        <div>
            <div className={styles.userPhoto}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small || userImage} alt={''}/>
                </NavLink>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div className={styles.userButton}>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      userUnfollow(user.id)
                                  }}>Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      userFollow(user.id)
                                  }}>Follow</button>}
                </div>
            </div>
        </div>
    )
}
