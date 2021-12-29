import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

export type AttentionIndicatorColor = 'orange' | 'red';

export type AttentionIndicatorShape = 'circle' | 'oval';

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
  return (
    <div
      className={classNames(
        styles.component,
        styles[color],
        styles[shape],
        styles[size],
        className,
      )}
    >
      {icon && { icon }}
      {displayCount && <>{displayCount}</>}
    </div>
  );
}

export { AttentionIndicator };
