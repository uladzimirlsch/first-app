import React, {FC, useEffect} from "react";
import Pagination from "../../commonFiles/pagination/Pagination";
import {User} from "./User";
import UsersSearch from "./UsersSearch";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getPageSize, getTotalCount, getUsers, getUsersFilter} from "../../redux/users-selector";
import {UserSearchType, usersRequest} from "../../redux/users-reducer";
import {useHistory} from "react-router-dom";
import * as queryString from "querystring";

export const Users: FC = () => {

    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const totalCount = useSelector(getTotalCount)
    const users = useSelector(getUsers)
    const usersFilter = useSelector(getUsersFilter)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as {term: string, friend: string, page: string}

        let actualUsersPage = currentPage
        let actualUsersFilter = usersFilter

        if (!!parsed.page) actualUsersPage = Number(parsed.page)
        if (!!parsed.term) actualUsersFilter = {...actualUsersFilter, term: parsed.term}
        switch (parsed.friend){
            case 'null':
                actualUsersFilter = {...actualUsersFilter, friend: null}
                break
            case 'true':
                actualUsersFilter = {...actualUsersFilter, friend: true}
                break
            case 'false':
                actualUsersFilter = {...actualUsersFilter, friend: false}
                break
        }
        dispatch(usersRequest(actualUsersPage, pageSize, actualUsersFilter))
    }, [])

    useEffect(() => {
        // ToDo: add queryString. to 'search:'
        history.push({
            pathname: '/users',
            search: `?term=${usersFilter.term}&friend=${usersFilter.friend}&page=${currentPage}`,
        })
    }, [usersFilter, currentPage])

    const onPageChange = (pageNum: number) => {
        dispatch(usersRequest(pageNum, pageSize, usersFilter))
    }
    const onUsersChange = (usersFilter: UserSearchType) => {
        dispatch(usersRequest(1, pageSize, usersFilter))
    }

    return (
        <div>
            <UsersSearch onUsersChange={onUsersChange}/>
            <Pagination currentPageNumber={currentPage}
                        onPageChangeNumber={onPageChange}
                        pageSizeNumber={pageSize}
                        totalItemCount={totalCount}
            />
            {users.map(item => <User key={item.id}
                                     user={item}
            />)}
        </div>
    )
}
