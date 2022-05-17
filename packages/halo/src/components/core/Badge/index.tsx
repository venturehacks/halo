import classNames from 'classnames';
import React from 'react';

import { Tooltip } from '../Tooltip';

export type BadgeColor =
  | 'blue'
  | 'gray'
  | 'green'
  | 'orange'
  | 'purple'
  | 'red';

export type BadgeShape = 'square' | 'circle';

export type BadgeSize = 'sm' | 'md';

export type BadgePosition = 'top' | 'bottom' | 'center';

export interface BadgeProps {
  className?: string;
  color?: BadgeColor;
  /**
   * Count displayed on the badge. Truncates above 100.
   */
  count?: number;
  icon?: React.ReactNode;
  label?: string;
  position?: BadgePosition;
  shape?: BadgeShape;
  size?: BadgeSize;
  tooltip?: string;
}

function Badge({
  className,
  count,
  icon,
  color = 'gray',
  position = 'top',
  shape = 'circle',
  size = 'sm',
  label,
  tooltip,
}: BadgeProps) {
  const hasContent = count || label || icon;
  const hasTextContent = label || count;

  const classnames = classNames(
    className,
    'absolute',
    'border-solid border-gray-100',
    'text-center font-medium uppercase leading-none antialiased p-1',
    hasContent && 'right-0',
    size === 'sm' && hasContent && 'text-2xs',
    size === 'md' && hasContent && 'text-xs',
    size === 'sm' && !hasContent && 'w-2 h-2',
    size === 'md' && !hasContent && 'w-4 h-4',
    color === 'gray' && 'bg-gray-600 border-gray-100 text-white',
    color === 'purple' && 'bg-purple-600 border-purple-100 text-white',
    color === 'blue' && 'bg-blue-600 border-blue-100 text-white',
    color === 'green' && 'bg-green-600 border-green-100 text-white',
    color === 'red' && 'bg-red-600 border-red-100 text-white',
    color === 'orange' && 'bg-orange-200 border-orange-200 text-orange-600',
    shape === 'circle' && 'rounded-full',
    shape === 'square' && hasContent && 'rounded-md',
    shape === 'square' && size === 'md' && !hasContent && 'rounded-md',
    shape === 'square' && size === 'sm' && !hasContent && 'rounded-sm',
    position === 'bottom' && !hasContent && 'bottom-0 right-0',
    position === 'bottom' && hasContent && '-bottom-2 -right-1',
    position === 'top' && !hasContent && '-top-1 right-1',
    position === 'top' && hasContent && '-top-3 right-1',
    position === 'center' && 'right-0 top-1/2 -translate-y-1/2',
  );

  const component = (
    <div className={classnames}>
      {hasTextContent ? (
        <div className="flex justify-center gap-1">
          {count && <span>{countToString(count)}</span>}
          {label && <span>{label}</span>}
        </div>
      ) : (
        <>{icon && <div>{icon}</div>}</>
      )}
    </div>
  );

  return tooltip ? <Tooltip content={tooltip}>{component}</Tooltip> : component;
}

function countToString(count: number) {
  if (count > 99) {
    return '99+';
  }
  return count.toString();
}

export { Badge };
