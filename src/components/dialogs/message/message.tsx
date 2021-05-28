import React, { FC } from 'react';
import styles from '../dialogs.module.scss';
import { MessagesType } from '../../../types/types';

type PropsType = {
  message: MessagesType;
};

export const Message: FC<PropsType> = ({ message }) => {
  return (
    <div>
      <div className={styles.message}>{message.message}</div>
    </div>
  );
};
