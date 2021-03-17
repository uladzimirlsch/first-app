import React, {FC} from "react";
import styles from "./User.module.css";
import userImage from "../../assets/images/avatar-siba.jpg";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";

type  PropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number []
    userItem: UserType
}

const User: FC<PropsType> = ({follow, unfollow, followingInProgress, userItem}) => {

    return (
        <div>
            <div className={styles.userPhoto}>
                <NavLink to={'/profile/' + userItem.id}>
                    <img src={userItem.photos.small || userImage} alt={''}/>
                </NavLink>
                <div>{userItem.name}</div>
                <div>{userItem.status}</div>
                <div className={styles.userButton}>
                    {userItem.followed
                        ? <button disabled={followingInProgress.some(id => id === userItem.id)}
                                  onClick={() => {
                                      unfollow(userItem.id)
                                  }}>Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === userItem.id)}
                                  onClick={() => {
                                      follow(userItem.id)
                                  }}>Follow</button>}
                </div>
            </div>
        </div>
    )
}

export default User;