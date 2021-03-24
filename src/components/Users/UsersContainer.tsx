import React, {FC} from "react";
import {useSelector} from "react-redux";
import {Users} from "./Users";
import Preloader from "../../commonFiles/preloader/Preloader";
import {getIsFetching} from "../../redux/users-selector";

export const UsersContainer: FC = () => {

    const isFetching = useSelector(getIsFetching)
    // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    //
    // if (!isAuthenticated) {
    //     return <Redirect to={'/login'}/>
    // }

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <div>
                <Users/>
            </div>
        </>
    )
}




