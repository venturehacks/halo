import classNames from 'classnames';
import { camelCase } from 'lodash';
import React from 'react';

import styles from './styles.module.scss';

export type AttentionIndicatorColor = 'orange' | 'red';

export type AttentionIndicatorShape = 'circle' | 'rounded-rectangle';

export type AttentionIndicatorSize = 'sm' | 'md';

export interface AttentionIndicatorProps {
  className?: string;
  color?: AttentionIndicatorColor;
  /**
   * The count displayed on the indicator
   */
  displayCount?: number;
  /**
   * JSX icon rendered within the indicator
   */
  icon?: React.ReactNode;
  shape?: AttentionIndicatorShape;
  size?: AttentionIndicatorSize;
}

function AttentionIndicator({
  className,
  color = 'red',
  displayCount,
  icon,
  shape = 'circle',
  size = 'sm',
}: AttentionIndicatorProps) {
  let displayString: any = displayCount;
  if (displayString && displayString > 99) {
    displayString = '99+';
  }

  const shapeClass = styles[camelCase(shape)];

  return (
    <div
      className={classNames(
        styles.component,
        styles[color],
        styles[size],
        shapeClass,
        className,
      )}
    >
      {icon && (
        <div className={classNames(styles.icon, styles[size], shapeClass)}>
          {icon}
        </div>
      )}
      {displayString && <>{displayString}</>}
    </div>
  );
}

export { AttentionIndicator };
