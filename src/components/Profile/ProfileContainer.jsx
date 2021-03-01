import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, loadPhoto, updateUserStatus} from "../../redux/ProfilePageReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || 14459

        this.props.getUserProfile(userId)

        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile isOwner={!this.props.match.params.userId}
                         updateUserStatus={this.props.updateUserStatus}
                         loadPhoto={this.props.loadPhoto}
                         profile={this.props.profile}
                         status={this.props.status}
                         {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, loadPhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
