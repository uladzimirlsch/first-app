import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../redux/redux-store';
import { Dialogs } from './Dialogs';

export const DialogsContainer: FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Dialogs />
    </div>
  );
};
