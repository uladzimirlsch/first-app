import React from "react";
import Pagination from "../../commonFiles/pagination/Pagination";
import User from "./User";

const Users = ({currentPage, onPageChange, pageSize, totalCount, ...props}) => {
    return (
        <div>
            <Pagination currentPage={currentPage}
                        onPageChange={onPageChange}
                        pageSize={pageSize}
                        totalItemCount={totalCount}
            />
            {props.users.map(u => (<User key={u.id}
                                         user={u}
                                         {...props}/>))}
        </div>
    )
}

export default Users;