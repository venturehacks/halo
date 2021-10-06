import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import styles from './styles.scss';

export interface FlairProps {
  children: React.ReactNode;
  className?: string;
  /**
   * @default blue
   */
  color?: 'blue' | 'gray' | 'orange' | 'red' | 'purple' | 'green';
  /**
   * @default sm
   */
  size?: 'xs' | 'sm' | 'md';

  /**
   * Label text transform.
   * @default uppercase
   */
  textTransform?: 'uppercase' | 'none';
}

function FlairRaw({
  children,
  className,
  forwardedRef,
  size = 'sm',
  color = 'blue',
  textTransform = 'uppercase',
}: FlairProps & ForwardedRefProps) {
  const classes = classNames(
    styles.component,
    className,
    textTransform === 'uppercase' && styles.uppercase,
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

export { Flair };
