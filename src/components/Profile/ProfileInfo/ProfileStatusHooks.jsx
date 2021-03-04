import React from 'react';
import styles from "./ProfileInfo.module.css";
import {useState, useEffect} from "react";

const ProfileStatusHooks = (props) => {

    const [editMode, setEditMode] = useState(false)

    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            {!editMode
                ?
                <div className={styles.profileStatus}>
                    <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    );
};

export default ProfileStatusHooks;