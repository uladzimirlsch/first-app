import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/UsersPageReducer";
import * as axios from "axios";
import UsersClass from "./UsersClass";
import * as React from "react";
import Preloader from "../../commonFiles/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(r => {
                this.props.setIsFetching(false)
                this.props.setUsers(r.data.items)
                this.props.setTotalUsersCount(r.data.totalCount)

            }
        )
    }

    onPageChange = (pageNum) => {
        this.props.setCurrentPage(pageNum)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(r => {
                this.props.setIsFetching(false)
                this.props.setUsers(r.data.items)
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
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching})
(UsersContainer)

