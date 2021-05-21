import React, { FC } from 'react';
import styles from '../Dialogs.module.scss';
import { MessagesType } from '../../../types/types';

type PropsType = {
  message: MessagesType;
};

export const MessageItem: FC<PropsType> = ({ message }) => {
  return (
    <div>
      <div className={styles.message}>{message.message}</div>
    </div>
  );
};
