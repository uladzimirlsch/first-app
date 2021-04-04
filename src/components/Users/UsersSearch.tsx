import React, {FC} from 'react';
import {Form, Formik} from "formik";
import FormikControl from "../../forms/FormikControl";
import {UserSearchType} from "../../redux/users-reducer";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/users-selector";
import {Button} from "antd";

type FriendType = "null' | 'true' | 'false"

type FilterType = {
    term: string
    friend: FriendType
}
type PropsType = {
    onUsersChange: (usersFilter: UserSearchType) => void
}

const UsersSearch: FC<PropsType> = ({onUsersChange}) => {

    const usersFilter = useSelector(getUsersFilter)

    const dropdownOptions = [
        {key: 'All', value: 'null'},
        {key: 'Followed', value: 'true'},
        {key: 'Unfollowed', value: 'false'},
    ]

    const onSubmit = (values: UserSearchType) => {
        onUsersChange(values)
    }
    return (
        //ToDo: add typing to 'friend: usersFilter.friend'
        <Formik initialValues={{
            term: usersFilter.term,
            friend: usersFilter.friend
        }}
                onSubmit={onSubmit}
                enableReinitialize>
            {formik => <Form>
                <FormikControl control={'input'}
                               type={'text'}
                               name={'term'}
                               placeholder={'Enter name'}/>
                <FormikControl control={'select'}
                               type={'text'}
                               name={'friend'}
                               options={dropdownOptions}/>
                <Button htmlType={'submit'}
                        type={'default'}
                        disabled={!formik.isValid}>Search</Button>
            </Form>
            }
        </Formik>
    );
};

export default UsersSearch;