import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './dialogs.module.scss';
import { Dialog } from './dialog/dialog';
import { Message } from './message/message';
import { MessageForm } from './message/message-form';
import { getDialogs, getMessages } from '../../redux/dialogs-selectors';
import { RootState } from '../../redux/redux-store';

export const Dialogs: FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const dialogs = useSelector(getDialogs);
  const messages = useSelector(getMessages);
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  const addMessage = (newMessage: string | null) => {
    dispatch({ type: 'ADD_MESSAGE', newMessage });
  };

  const addNewMessage = (value: { newMessage: string | null }) => {
    addMessage(value.newMessage);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_item}>
        {dialogs.map((d) => (
          <Dialog key={d.id} dialog={d} />
        ))}
      </div>
      <div className={styles.messages_item}>
        <MessageForm onSubmitMessage={addNewMessage} />
        {messages.map((m) => (
          <Message key={m.id} message={m} />
        ))}
      </div>
    </div>
  );
};
