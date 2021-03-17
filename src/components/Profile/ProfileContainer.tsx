import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, loadPhoto, saveDataProfile, updateUserStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {PhotosType, ProfileType} from "../../types/types";
import {RootState} from "../../redux/redux-store";

type StateProps = {
    profile: ProfileType | null
    status: string
}
type DispatchProps = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    loadPhoto: (file: PhotosType) => void
    saveDataProfile: (profile: ProfileType) => void
}
type  OwnProps = {
    isOwner: boolean
}

type PathParamsType = {
    userId: string
}

type  PropsType = StateProps & DispatchProps & OwnProps & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId: number | null = +this.props.match.params.userId || 14459

        this.props.getUserProfile(userId)

        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                         loadPhoto={this.props.loadPhoto}
                         saveDataProfile={this.props.saveDataProfile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: RootState): StateProps => ({
    profile: state.profile.profile,
    status: state.profile.status
})

export default compose<ComponentType>(
    connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
        loadPhoto,
        saveDataProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
