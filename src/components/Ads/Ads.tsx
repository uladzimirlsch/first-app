import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Ads.module.scss';

export const Ads: FC = () => {
  return (
    <div className={styles.ads}>
      <div className={styles.news}>
        <Link to="/news">News</Link>
      </div>
    </div>
  );
};
