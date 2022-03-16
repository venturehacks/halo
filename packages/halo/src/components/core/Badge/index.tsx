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
  const classnames = classNames(
    className,
    'absolute',
    'right-0',
    'border-solid border-gray-100',
    'text-center text-2xs font-medium uppercase leading-none antialiased',
    color === 'gray' && 'bg-gray-600 border-gray-100 text-white',
    color === 'purple' && 'bg-purple-600 border-purple-100 text-white',
    color === 'blue' && 'bg-blue-600 border-blue-100 text-white',
    color === 'green' && 'bg-green-600 border-green-100 text-white',
    color === 'red' && 'bg-red-600 border-red-100 text-white',
    color === 'orange' && 'bg-orange-200 border-orange-200 text-orange-600',
    shape === 'circle' && 'rounded-full',
    shape === 'square' && 'rounded-md',
    size === 'sm' && 'min-w-4 p-1',
    size === 'md' && 'min-w-6 p-1',
    position === 'bottom' && 'bottom-1',
    position === 'top' && size === 'sm' && '-top-1',
    position === 'top' && size === 'md' && '-top-2',
  );

  const component = <div className={classnames}>{children}</div>;

  return tooltip ? <Tooltip content={tooltip}>{component}</Tooltip> : component;
}

export { Badge };
