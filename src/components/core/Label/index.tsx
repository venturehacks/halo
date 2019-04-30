import classNames from 'classnames';
import * as React from 'react';

import styles from './styles.scss';

interface LabelProps {
  className?: string;
  children: React.ReactNode;
  color?: 'blue' | 'gray';
}

function Label({ children, className, color = 'blue' }: LabelProps) {
  const classes = classNames(
    styles.component,
    className,
    color && styles[color],
  );

  return <span className={classes}>{children}</span>;
}

export { Label };
