import React from "react";
import Pagination from "../../commonFiles/pagination/Pagination";
import User from "./User";

const Users = (props) => {
    return (
        <div>
            <Pagination {...props}/>
            {props.users.map(u => (<User key={u.id}
                                         user={u}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow}
                                         follow={props.follow}/>))}
        </div>
    )
}

export default Users;