import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    loadPhoto,
    saveDataProfile,
    updateUserStatus
} from "../../redux/profile-reducer";
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
                         {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, loadPhoto, saveDataProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
