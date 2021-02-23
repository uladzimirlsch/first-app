import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropForRedirect = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if (!props.isAuthenticated)
            return <Redirect to={'/login'}/>
        return <Component {...props}/>
    }
    let ConnectedAuthRedirect = connect(mapStateToPropForRedirect)(RedirectComponent)

    return (
        ConnectedAuthRedirect
    )
}