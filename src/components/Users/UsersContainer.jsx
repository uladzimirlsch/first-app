import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setFollowingIsProgress,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/UsersPageReducer";
import UsersClass from "./UsersClass";
import React from "react";
import Preloader from "../../commonFiles/preloader/Preloader";
import {UsersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)

        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            }
        )
    }

    onPageChange = (pageNum) => {
        this.props.setCurrentPage(pageNum)
        this.props.setIsFetching(true)
        UsersAPI.getUsers(pageNum, this.props.pageSize).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            }
        )
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <UsersClass totalCount={this.props.totalCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            onPageChange={this.onPageChange}
                            users={this.props.users}
                            unfollow={this.props.unfollow}
                            follow={this.props.follow}
                            followingInProgress={this.props.followingInProgress}
                            setFollowingIsProgress={this.props.setFollowingIsProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
})

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    setFollowingIsProgress
})
(UsersContainer)

