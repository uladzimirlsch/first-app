import { Redirect } from 'react-router-dom';
import React, { ComponentType, FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../redux/redux-store';

type StatePropsType = {
  isAuthenticated: boolean;
};
const mapStateToPropForRedirect = (state: RootState): StatePropsType => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export const withAuthRedirect = (Component: ComponentType) => {
  const RedirectComponent: FC<StatePropsType> = (isAuthenticated) => {
    if (!isAuthenticated) return <Redirect to="/login" />;
    return <Component {...isAuthenticated} />;
  };
  const ConnectedAuthRedirect = connect(mapStateToPropForRedirect)(
    RedirectComponent,
  );
  return ConnectedAuthRedirect;
};
