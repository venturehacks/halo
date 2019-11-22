import classNames from 'classnames';
import * as React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import styles from './styles.scss';

interface FlairProps {
  className?: string;
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md';
  color?: 'blue' | 'gray' | 'orange' | 'red' | 'purple' | 'green';
}

function FlairRaw({
  children,
  className,
  forwardedRef,
  size = 'sm',
  color = 'blue',
}: FlairProps & ForwardedRefProps) {
  const classes = classNames(
    styles.component,
    className,
    styles[color],
    styles[size],
  );

  return (
    <span ref={forwardedRef} className={classes}>
      {children}
    </span>
  );
}

const Flair = withForwardedRef<FlairProps>(FlairRaw);

export default Flair;
export { Flair };
