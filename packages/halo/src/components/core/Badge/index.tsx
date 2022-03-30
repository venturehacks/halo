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

export type BadgePosition = 'top' | 'bottom';

export interface BadgeProps {
  className?: string;
  color?: BadgeColor;
  count?: number;
  icon?: React.ReactNode;
  position?: BadgePosition;
  shape?: BadgeShape;
  size?: BadgeSize;
  text?: string;
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
  text,
  tooltip,
}: BadgeProps) {
  const hasContent = count || text || icon;

  const classnames = classNames(
    className,
    'absolute',
    'border-solid border-gray-100',
    'text-center text-2xs font-medium uppercase leading-none antialiased',
    hasContent && 'right-0',
    color === 'gray' && 'bg-gray-600 border-gray-100 text-white',
    color === 'purple' && 'bg-purple-600 border-purple-100 text-white',
    color === 'blue' && 'bg-blue-600 border-blue-100 text-white',
    color === 'green' && 'bg-green-600 border-green-100 text-white',
    color === 'red' && 'bg-red-600 border-red-100 text-white',
    color === 'orange' && 'bg-orange-200 border-orange-200 text-orange-600',
    shape === 'circle' && 'rounded-full',
    shape === 'square' && 'rounded-md',
    size === 'sm' && 'p-1',
    size === 'md' && 'min-w-3 min-h-3 p-2',
    position === 'bottom' && hasContent && 'bottom-0',
    position === 'top' && size === 'sm' && hasContent && '-top-1',
    position === 'top' && size === 'md' && hasContent && '-top-3',
    position === 'top' && !hasContent && 'top-0 ',
    position === 'top' && !hasContent && size === 'sm' && 'right-1',
    position === 'top' && !hasContent && size === 'md' && 'right-3',
    position === 'bottom' && !hasContent && size === 'sm' && 'right-1 bottom-3',
    position === 'bottom' && !hasContent && size === 'md' && 'right-3 bottom-2',
  );

  const component = (
    <div className={classnames}>
      {icon && <div>{icon}</div>}
      <div className="flex gap-1">
        {count && <div>{countToString(count)}</div>}
        {text && <div>{text}</div>}
      </div>
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
