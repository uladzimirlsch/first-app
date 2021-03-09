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

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNum) => {
        this.props.requestUsers(pageNum, this.props.pageSize)
    }

    render() {

        if (!this.props.isAuthenticated) return (<Redirect to={'/login'}/>)

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <div>
                    <Users currentPage={this.currentPage}
                           onPageChange={this.onPageChange}
                           pageSize={this.pageSize}
                           totalCount={this.totalCount}
                           {...this.props}/>
                </div>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    isFetching: getIsFetching(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    users: getUsers(state),
    followingInProgress: getFollowingInProgress(state),
})

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        requestUsers
    }),
    withAuthRedirect
)(UsersContainer)

