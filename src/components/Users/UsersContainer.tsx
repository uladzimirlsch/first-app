import React from "react";
import {connect} from "react-redux";
import {follow, requestUsers, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../commonFiles/preloader/Preloader";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/users-selector";
import {RootState} from "../../redux/redux-store";
import {UserType} from "../../types/types";

type StatePropsType = {
    currentPage: number
    pageSize: number
    totalCount: number
    isFetching: boolean
    followingInProgress: number[]
    users: UserType[]
}
type DispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
type OwnPropsType = {
    isAuthenticated: boolean
    title: string
}

type  PropsType = StatePropsType & DispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNum: number) => {
        this.props.requestUsers(pageNum, this.props.pageSize)
    }

    render() {

        if (!this.props.isAuthenticated) return (<Redirect to={'/login'}/>)

        return (
            <>
                <h2>{this.props.title}</h2>
                {this.props.isFetching ? <Preloader/> : null}
                <div>
                    <Users currentPageNumber={this.props.currentPage}
                           onPageChangeNumber={this.onPageChange}
                           pageSizeNumber={this.props.pageSize}
                           totalItemCount={this.props.totalCount}
                           followUser={this.props.follow}
                           unfollowUser={this.props.unfollow}
                           followingInProgressUser={this.props.followingInProgress}
                           usersList={this.props.users}
                           {...this.props}/>
                </div>
            </>
        )
    }
}

let mapStateToProps = (state: RootState): StatePropsType => ({
    isFetching: getIsFetching(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    users: getUsers(state),
    followingInProgress: getFollowingInProgress(state),
})

export default compose(
    connect<StatePropsType, DispatchPropsType, OwnPropsType, RootState>(mapStateToProps, {
        follow,
        unfollow,
        requestUsers
    }),
    withAuthRedirect
)(UsersContainer)

