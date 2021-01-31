import styles from "./Users.module.css";
import userImage from "../../assets/images/avatars-000715955569-knzo3k-t500x500.jpg";
import React from "react";

const UsersClass = (props) => {
debugger
	let pagesCount = Math.ceil(props.totalCount/props.pageSize)

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
						<img src={u.photos.small || userImage} alt={''}/>
						<div className={styles.userButton}>
							{u.followed
								? <button onClick={() => {
									props.unfollow(u.id)
								}}>Unfollow</button>
								: <button onClick={() => {
									props.follow(u.id)
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