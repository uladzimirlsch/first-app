import React from 'react';
import styles from './Form.module.scss';

const TextError = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  return <div className={styles.errorControl}>{props.children}</div>;
};

export default TextError;
