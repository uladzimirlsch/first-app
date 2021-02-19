import React from "react";
import Header from "./Header";
import {authAccess} from "../../redux/AuthReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authAccess()
    }
    render() {
        return <Header{...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    login: state.auth.login,
})

export default connect(mapStateToProps, {
    authAccess
})(HeaderContainer)