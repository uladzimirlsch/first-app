import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/UsersPageReducer";
import * as axios from "axios";
import UsersClass from "./UsersClass";
import * as React from "react";

class UsersContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(r => {
				this.props.setUsers(r.data.items)
				this.props.setTotalUsersCount(r.data.totalCount)
			}
		)
	}

	onPageChange = (pageNum) => {
		this.props.setCurrentPage(pageNum)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(r => {
				this.props.setUsers(r.data.items)
			}
		)
	}

	render() {
		return (
			<UsersClass totalCount={this.props.totalCount}
						pageSize={this.props.pageSize}
						currentPage={this.props.currentPage}
						onPageChange={this.onPageChange}
						users={this.props.users}
						unfollow={this.props.unfollow}
						follow={this.props.follow}
			/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalCount: state.usersPage.totalCount,
		currentPage: state.usersPage.currentPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userID) => {
			dispatch(followAC(userID))
		},
		unfollow: (userID) => {
			dispatch(unfollowAC(userID))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (currentPage) => {
			dispatch(setCurrentPageAC(currentPage))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC(totalCount))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

