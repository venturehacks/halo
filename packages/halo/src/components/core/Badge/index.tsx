import classNames from 'classnames';
import React from 'react';

import { Tooltip } from '../Tooltip';

export type BadgeColor =
  | 'blue-light'
  | 'gray-light'
  | 'green-light'
  | 'orange-light'
  | 'yellow-light'
  | 'purple-light'
  | 'red-light'
  | 'blue-dark'
  | 'gray-dark'
  | 'green-dark'
  | 'orange-dark'
  | 'purple-dark'
  | 'yellow-dark'
  | 'red-dark';

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

const colorToStyle = {
  'blue-dark': 'bg-blue-400 border-blue-400',
  'gray-dark': 'bg-gray-800 border-gray-800',
  'purple-dark': 'bg-purple-700 border-purple-700',
  'green-dark': 'bg-green-400 border-green-400',
  'red-dark': 'bg-red-600 border-red-100 ',
  'orange-dark': 'bg-orange-600 border-orange-600 ',
  'yellow-dark': 'bg-gtmyellow-700 border-gtmyellow-700 ',
  'gray-light': 'bg-gray-200 text-gray-800',
  'purple-light': 'bg-purple-100 border-purple-100 text-purple-700',
  'blue-light': 'bg-blue-100 border-blue-100 text-blue-400',
  'green-light': 'bg-green-100 border-green-100 text-green-400',
  'red-light': 'bg-red-600 border-red-100 text-white',
  'orange-light': 'bg-orange-100 border-orange-100 text-orange-600',
  'yellow-light': 'bg-gtmyellow-100 border-gtmyellow-100 text-gtmyellow-700',
};

function Badge({
  className,
  count,
  icon,
  color = 'gray-light',
  position = 'top',
  shape = 'circle',
  size = 'sm',
  label,
  tooltip,
}: BadgeProps) {
  const countText = countToString(count);
  const hasContent = countText || label || icon;
  const hasTextContent = label || countText;

  const classnames = classNames(
    className,
    'absolute',
    'border-solid border-gray-200',
    'text-center font-medium uppercase leading-none antialiased p-1',
    hasContent && 'right-0',
    size === 'sm' && hasContent && 'text-2xs',
    size === 'md' && hasContent && 'text-xs',
    size === 'sm' && !hasContent && 'w-2 h-2',
    size === 'md' && !hasContent && 'w-4 h-4',
    color.includes('-dark') && 'text-white',
    colorToStyle[color],
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
          {countText && <span>{countText}</span>}
          {label && <span>{label}</span>}
        </div>
      ) : (
        <>{icon && <div>{icon}</div>}</>
      )}
    </div>
  );

  return tooltip ? <Tooltip content={tooltip}>{component}</Tooltip> : component;
}

function countToString(count?: number) {
  if (!count && count !== 0) {
    return;
  }
  if (count > 99) {
    return '99+';
  }
  return count.toString();
}

export { Badge };
