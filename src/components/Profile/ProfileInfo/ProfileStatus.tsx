import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from '../Profile.module.scss';

type PropsType = {
  status: string;
  updateUserStatus: (status: string) => void;
};

export const ProfileStatus: FC<PropsType> = ({
  status,
  updateUserStatus,
}) => {
  const [editMode, setEditMode] = useState(false);

  const [userStatus, setUserStatus] = useState(status);

  useEffect(() => {
    setUserStatus(status);
  }, [status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateUserStatus(userStatus);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserStatus(e.target.value);
  };

  return (
    <div className={styles.profileStatus}>
      {!editMode ? (
        <div onClick={activateEditMode} aria-hidden="true">
          {status || 'No status'}
        </div>
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            // autoFocus={true}
            onBlur={deactivateEditMode}
            value={userStatus}
          />
        </div>
      )}
    </div>
  );
};
