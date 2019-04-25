import classNames from 'classnames';
import * as React from 'react';

import { Tooltip } from '../Tooltip';

import * as styles from './styles.scss';

export type BadgeColor =
  | 'blue'
  | 'gray'
  | 'green'
  | 'orange'
  | 'purple'
  | 'red';

export interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
  color?: BadgeColor;
  shape?: 'square' | 'circle';
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
