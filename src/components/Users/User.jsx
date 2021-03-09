import React from "react";
import styles from "./User.module.css";
import userImage from "../../assets/images/avatar-siba.jpg";
import {NavLink} from "react-router-dom";

const User = (props) => {
    debugger
    return (
        <div>
            <div className={styles.userPhoto}>
                <NavLink to={'/profile/' + props.user.id}>
                    <img src={props.user.photos.small || userImage} alt={''}/>
                </NavLink>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
                <div className={styles.userButton}>
                    {props.user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.unfollow(props.user.id)
                                  }}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.follow(props.user.id)
                                  }}>Follow</button>}
                </div>
            </div>
        </div>
    )
}

export default User;