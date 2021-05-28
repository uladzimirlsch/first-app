import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './header.module.scss';
import { getUserData, userLogin } from '../../redux/auth-selectors';
import { logOut } from '../../redux/auth-reducer';

export const Header: FC = () => {
  const isAuthenticated = useSelector(getUserData);
  const login = useSelector(userLogin);
  const dispatch = useDispatch();

  const logOutside = () => {
    dispatch(logOut());
  };

  return (
    <header>
      <img
        src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
        alt=""
      />
      <div className={styles.loginBlock}>
        {/* eslint-disable-next-line no-constant-condition */}
        {{ isAuthenticated } ? (
          <div className={styles.loginItem}>
            {login}
            <button onClick={logOutside}>Sign out</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};
