import one from './Users.module.css'

const Users = (props) => {
	debugger
	if (props.users.length === 0) {
		props.setUsers(
			[
				{
					id: 1,
					photoUrl: 'https://cdn.shopify.com/s/files/1/1093/7922/products/Nextup5f1257851e8a535f1257851e9a7.906620455f1257851e9a7_600x.jpg?v=1595039596',
					followed: false,
					firstName: 'Sergey',
					status: 'The world is mine',
					location: {country: 'Belarus', city: 'Minsk'}
				},
				{
					id: 2,
					photoUrl: 'https://i1.sndcdn.com/avatars-000304905983-a0568r-t500x500.jpg',
					followed: false,
					firstName: 'Alina',
					status: 'The world is mine',
					location: {country: 'Belarus', city: 'Brest'}
				},
				{
					id: 3,
					photoUrl: 'https://i1.sndcdn.com/avatars-000304905983-a0568r-t500x500.jpg',
					followed: true,
					firstName: 'Aleksandr',
					status: 'Never give up',
					location: {country: 'Belarus', city: 'Minsk'}
				},
				{
					id: 4,
					photoUrl: 'https://i1.sndcdn.com/avatars-000304905983-a0568r-t500x500.jpg',
					followed: false,
					firstName: 'Anastasia',
					status: "I'm happy",
					location: {country: 'Russia', city: 'Saint-Petersburg'}
				}
			]
		)
	}
	return (
		<div>
			{props.users.map(u => <div key={u.id}>
				<div className={one.userPhoto}>
					<img src={u.photoUrl} alt={''}/>
					<div className={one.userButton}>
					{u.followed ?
						<button onClick={() => {
							props.unfollow(u.id)
						}}>Unfollow</button>
						: <button onClick={() => {
							props.follow(u.id)
						}}>Follow</button>}
				    </div>
				</div>
					<div>{u.firstName} status: {u.status}</div>
					<div>{u.location.country}: {u.location.city}</div>
			</div>)
			}
		</div>
	)
}
export default Users