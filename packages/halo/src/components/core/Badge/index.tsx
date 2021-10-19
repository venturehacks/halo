import classNames from 'classnames';
import React from 'react';

import { Tooltip } from '../Tooltip';

import styles from './styles.scss';

export type BadgeColor =
  | 'blue'
  | 'gray'
  | 'green'
  | 'orange'
  | 'purple'
  | 'red';

export type BadgeShape = 'square' | 'circle';

export interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
  color?: BadgeColor;
  shape?: BadgeShape;
  tooltip?: string;
}

function Badge({
  children,
  className,
  color = 'gray',
  shape = 'circle',
  tooltip,
}: BadgeProps) {
  const component = (
    <div
      className={classNames(
        styles.component,
        styles[color],
        styles[shape],
        className,
      )}
    >
      {children}
    </div>
  );

  return tooltip ? <Tooltip content={tooltip}>{component}</Tooltip> : component;
}

export { Badge };
