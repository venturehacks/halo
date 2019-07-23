import classNames from 'classnames';
import * as React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import styles from './styles.scss';

interface LabelProps {
  className?: string;
  children: React.ReactNode;
  size: 'xs' | 'sm' | 'md';
  color?: 'blue' | 'gray' | 'orange' | 'red' | 'purple' | 'green';
}

function LabelRaw({
  children,
  className,
  forwardedRef,
  size = 'sm',
  color = 'blue',
}: LabelProps & ForwardedRefProps) {
  const classes = classNames(
    styles.component,
    className,
    styles[color],
    styles[size],
  );

  return (
    <span className={classes} ref={forwardedRef}>
      {children}
    </span>
  );
}

const Label = withForwardedRef<LabelProps>(LabelRaw);

export default Label;
export { Label };
