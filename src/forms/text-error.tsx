import React from 'react';
import styles from './form.module.scss';

const TextError = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  // eslint-disable-next-line react/destructuring-assignment
  return <div className={styles.errorControl}>{props.children}</div>;
};

export default TextError;
