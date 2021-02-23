import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, unfollow} from "../../redux/UsersPageReducer";
import Users from "./Users";
import Preloader from "../../commonFiles/preloader/Preloader";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize)
    }

    render() {

        if (!this.props.isAuthenticated) return (<Redirect to={'/login'}/>)

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}

                <Users users={this.props.users}
                       totalCount={this.props.totalCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChange={this.onPageChange}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       followingInProgress={this.props.followingInProgress}/>
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

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        getUsers
    }),
    withAuthRedirect
)(UsersContainer)

