import classNames from 'classnames';
import React from 'react';

export type AttentionIndicatorColor = 'orange' | 'red';

export type AttentionIndicatorShape = 'circle' | 'rounded-rectangle';

export type AttentionIndicatorSize = 'sm' | 'md';

export interface AttentionIndicatorProps {
  className?: string;
  color?: AttentionIndicatorColor;
  /**
   * The count displayed on the indicator
   */
  count?: number;
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
  count,
  icon,
  shape = 'circle',
  size = 'sm',
}: AttentionIndicatorProps) {
  let displayString: any = count;
  if (displayString && displayString > 99) {
    displayString = '99+';
  }

  const componentClasses = classNames(
    className,
    'absolute',
    'flex flex-col items-center justify-center',
    'leading-none',
    'p-0.5',
    'right-0',
    'text-center',
    'text-white',
    'top-0',
    'antialiased',
    color === 'red' && 'bg-red-600',
    color === 'orange' && 'bg-orange-600',
    size === 'sm' && 'h-3 min-w-3 text-4xs',
    size === 'md' && 'h-4 min-w-4 text-3xs font-medium',
    shape === 'circle' && 'rounded-full',
    shape === 'rounded-rectangle' && 'font-medium leading-normal',
    shape === 'rounded-rectangle' && size === 'sm' && 'rounded-md h-4',
    shape === 'rounded-rectangle' && size === 'md' && 'rounded-lg h-5',
  );

  const iconClasses = classNames(
    className,
    'block',
    'm-auto',
    size === 'sm' && shape === 'circle' && 'w-2 h-2',
    size === 'sm' && shape === 'rounded-rectangle' && 'h-2 w-2',
    size === 'md' && shape === 'circle' && 'h-2.5 w-2.5',
    size === 'md' && shape === 'rounded-rectangle' && 'h-2.5 w-2.5',
  );

  return (
    <div className={componentClasses}>
      {icon && <div className={iconClasses}> {icon} </div>}
      {displayString && <>{displayString}</>}
    </div>
  );
}

export { AttentionIndicator };
