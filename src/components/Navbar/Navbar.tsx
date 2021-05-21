import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.item}>
        <Link to="/profile">My profile</Link>
      </div>
      <div className={styles.item}>
        <Link to="/dialogs">Messages</Link>
      </div>
      <div className={styles.item}>
        <Link to="/users">Users</Link>
      </div>
      <div className={styles.item}>
        <Link to="/music">Music</Link>
      </div>
      <div className={styles.item}>
        <Link to="/photos">Photos</Link>
      </div>
    </nav>
  );
};
