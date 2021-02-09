import React from "react";
import styles from "./Users.module.css";
import userImage from "../../assets/images/avatar-siba.jpg";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(page => (
                    <span className={props.currentPage === page && styles.activePage}
                          onClick={(e) => {
                              props.onPageChange(page)
                          }}>{page}</span>
                ))}
            </div>
            {props.users.map(u => <div key={u.id}>
                    <div className={styles.userPhoto}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small || userImage} alt={''}/>
                        </NavLink>
                        <div className={styles.userButton}>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </div>
                    <div>{u.name} status: {u.status}</div>
                </div>
            )
            }
        </div>
    )
}
export default Users;