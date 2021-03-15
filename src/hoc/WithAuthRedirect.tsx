import {Redirect} from "react-router-dom";
import React, {ComponentType, FC} from "react";
import {connect} from "react-redux";
import {RootState} from "../redux/redux-store";

type StatePropsType = {
    isAuthenticated: boolean
}
let mapStateToPropForRedirect = (state: RootState): StatePropsType => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export const withAuthRedirect = (Component: ComponentType) => {
    let RedirectComponent: FC<StatePropsType> = (isAuthenticated) => {
        if (!isAuthenticated.isAuthenticated)
            return <Redirect to={'/login'}/>
        return <Component {...isAuthenticated}/>
    }
    let ConnectedAuthRedirect = connect(mapStateToPropForRedirect)(RedirectComponent)
    return (
        ConnectedAuthRedirect
    )
}