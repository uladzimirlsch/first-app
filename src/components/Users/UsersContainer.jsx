import React from "react";
import {connect} from "react-redux";
import {follow, requestUsers, unfollow} from "../../redux/UsersPageReducer";
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
} from "../../redux/UsersSelectors";

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
                    <Users onPageChange={this.onPageChange} {...this.props}/>
                </div>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
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

