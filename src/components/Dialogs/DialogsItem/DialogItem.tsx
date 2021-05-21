import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Dialogs.module.scss';
import { DialogsType } from '../../../types/types';

type PropsType = {
  dialog: DialogsType;
};

export const DialogItem: FC<PropsType> = ({ dialog }) => {
  return (
    <div className={styles.dialog}>
      <Link to={`/dialogs/${dialog.id}`}>{dialog.name}</Link>
    </div>
  );
};
