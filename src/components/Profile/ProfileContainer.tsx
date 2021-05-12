import React, {FC} from "react";
import {Profile} from "./Profile";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {RootState} from "../../redux/redux-store";

export const ProfileContainer: FC = () => {

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    if (!isAuthenticated) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
            <Profile />
        </div>
    )
}





