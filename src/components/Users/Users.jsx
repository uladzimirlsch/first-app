import styles from './Users.module.css'
import * as axios from "axios";
import userImage from '../../assets/images/avatars-000715955569-knzo3k-t500x500.jpg'

const Users = (props) => {
	let getUsers = () => {
		if (props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then(r => {
					props.setUsers(r.data.items)
				}
			)
		}
	}
	return (
		<div>
			<button onClick={getUsers}>Get users</button>
			{props.users.map(u => <div key={u.id}>
				<div className={styles.userPhoto}>
					<img src={u.photos.small !== null ? u.photos.small : userImage} alt={''}/>
					<div className={styles.userButton}>
						{u.followed
							? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
							: <button onClick={() => {props.follow(u.id)}}>Follow</button>}
					</div>
				</div>
				<div>{u.name} status: {u.status}</div>
				{/*<div>'"{u.location.country}: {u.location.city}"'</div>*/}
			</div>)
			}
		</div>
	)
}
export default Users