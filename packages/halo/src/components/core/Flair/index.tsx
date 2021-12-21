import classNames from 'classnames';
import React from 'react';
import { TextSize } from '~/lib';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import styles from './styles.module.scss';

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
  size?: Extract<TextSize, '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'> | '3xs';

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
}: FlairProps & ForwardedRefProps<HTMLSpanElement>) {
  const classes = classNames(
    styles.component,
    className,
    textTransform === 'none' && styles.textTransformNone,
    styles[color],
    // NOTE(drew): 3xs size is not officially in Halo, but
    // it is useful for this type of element
    size === '3xs' && styles.size_3xs,
    size === '2xs' && styles.size_2xs,
    size === 'xs' && styles.size_xs,
    size === 'sm' && styles.size_sm,
    size === 'md' && styles.size_md,
    size === 'lg' && styles.size_lg,
    size === 'xl' && styles.size_xl,
  );

  return (
    <span ref={forwardedRef} className={classes}>
      {children}
    </span>
  );
}

const Flair = withForwardedRef<FlairProps, HTMLSpanElement>(FlairRaw);

export { Flair };
