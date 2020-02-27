import React from 'react';

// @ts-ignore
import * as styles from './styles.scss';

const Wrapper = ({ children }) => (
  <div className={styles.component}>{children}</div>
);
export default Wrapper;
