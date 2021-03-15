import React, {FC} from "react";
import Pagination from "../../commonFiles/pagination/Pagination";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    currentPageNumber: number
    onPageChangeNumber: (page: number) => void
    pageSizeNumber: number
    totalItemCount: number
    pageLimit?: number
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    followingInProgressUser: number[]
    usersList: UserType[]
}

const Users: FC<PropsType> = ({
                                  currentPageNumber,
                                  onPageChangeNumber,
                                  pageSizeNumber,
                                  totalItemCount,
                                  followUser,
                                  unfollowUser,
                                  followingInProgressUser,
                                  usersList
                              }) => {
    return (
        <div>
            <Pagination currentPageNumber={currentPageNumber}
                        onPageChangeNumber={onPageChangeNumber}
                        pageSizeNumber={pageSizeNumber}
                        totalItemCount={totalItemCount}
            />
            {usersList.map(item => <User key={item.id}
                                         userItem={item}
                                         follow={followUser}
                                         unfollow={unfollowUser}
                                         followingInProgress={followingInProgressUser}
            />)}
        </div>
    )
}

export default Users;