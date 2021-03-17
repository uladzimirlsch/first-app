import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import styles from "./ProfileInfo.module.css";

type  PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileStatusHooks: FC<PropsType> = ({status, updateUserStatus}) => {

    const [editMode, setEditMode] = useState(false)

    const [userStatus, setUserStatus] = useState(status)

    useEffect(() => {
        setUserStatus(status)
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateUserStatus(userStatus)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserStatus(e.target.value)
    }

    return (
        <div>
            {!editMode
                ?
                <div className={styles.profileStatus}>
                    <span onDoubleClick={activateEditMode}>{status || 'No status'}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={userStatus}/>
                </div>
            }
        </div>
    );
};

export default ProfileStatusHooks;