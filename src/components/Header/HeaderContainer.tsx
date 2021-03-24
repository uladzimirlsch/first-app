import React from "react";
import Header from "./Header";
import {logOut} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";

type StateProps = {
    isAuthenticated: boolean
    login: string | null
}
type DispatchProps = {
    logOut: () => void
}

type  PropsType = StateProps & DispatchProps

class HeaderContainer extends React.Component<PropsType> {

    render() {
        return <Header isAuthenticated={this.props.isAuthenticated}
                       login={this.props.login}
                       logOut={this.props.logOut}/>
    }
}

let mapStateToProps = (state: RootState): StateProps => ({
    isAuthenticated: state.auth.isAuthenticated,
    login: state.auth.login,
})

export default (connect<StateProps, DispatchProps, {}, RootState>(mapStateToProps, {
    logOut,
}))(HeaderContainer)