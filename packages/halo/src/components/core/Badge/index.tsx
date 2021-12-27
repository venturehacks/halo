import classNames from 'classnames';
import React from 'react';

import { Tooltip } from '../Tooltip';

import styles from './styles.module.scss';

export type BadgeColor =
  | 'blue'
  | 'gray'
  | 'green'
  | 'orange'
  | 'purple'
  | 'red';

export type BadgeShape = 'square' | 'circle';

export type BadgeSize = 'sm' | 'md';

export type BadgePosition = 'top' | 'bottom';

export interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
  color?: BadgeColor;
  position?: BadgePosition;
  shape?: BadgeShape;
  size?: BadgeSize;
  tooltip?: string;
}

function Badge({
  children,
  className,
  color = 'gray',
  position = 'top',
  shape = 'circle',
  size = 'sm',
  tooltip,
}: BadgeProps) {
  const component = (
    <div
      className={classNames(
        styles.component,
        styles[color],
        styles[position],
        styles[shape],
        styles[size],
        className,
      )}
    >
      {children}
    </div>
  );

  return tooltip ? <Tooltip content={tooltip}>{component}</Tooltip> : component;
}

export { Badge };
