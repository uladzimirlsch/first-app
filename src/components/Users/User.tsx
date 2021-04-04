import React, {FC} from "react";
import styles from "./User.module.css";
import userImage from "../../assets/images/avatar-siba.jpg";
import {Link} from "react-router-dom";
import {UserType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {getFollowingInProgress} from "../../redux/users-selector";
import {follow, unfollow} from "../../redux/users-reducer";
import {Button} from "antd";

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
                <Link to={'/profile/' + user.id}>
                    <img src={user.photos.small || userImage} alt={''}/>
                </Link>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div className={styles.userButton}>
                    {user.followed
                        ? <Button htmlType={'submit'}
                                  type={'default'}
                                  disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      userUnfollow(user.id)
                                  }}>Unfollow</Button>

                        : <Button htmlType={'submit'}
                                  type={'default'}
                                  disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      userFollow(user.id)
                                  }}>Follow</Button>}
                </div>
            </div>
        </div>
    )
}
