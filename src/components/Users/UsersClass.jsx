import styles from "./Users.module.css";
import userImage from "../../assets/images/avatar-siba.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import {instance} from "../../api/api";

const UsersClass = (props) => {

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
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                   props.setFollowingIsProgress(true, u.id)
                                    instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`).then(r => {
                                            if (r.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                           props.setFollowingIsProgress(false, u.id)
                                        }
                                    )
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                   props.setFollowingIsProgress(true, u.id)
                                    instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`).then(r => {
                                            if (r.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                           props.setFollowingIsProgress(false, u.id)
                                        }
                                    )
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div>{u.name} status: {u.status}</div>
                    {/*<div>'"{u.location.country}: {u.location.city}"'</div>*/}
                </div>
            )
            }
        </div>
    )
}

export default UsersClass;