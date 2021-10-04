import React from 'react';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return <div className={styles.component}>{children}</div>;
};

export default Wrapper;
