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
  | 'blue-dark'
  | 'gray-dark'
  | 'green-dark'
  | 'orange-dark'
  | 'purple-dark'
  | 'yellow-dark';

export type BadgeShape = 'square' | 'circle';

export type BadgeSize = 'sm' | 'md';

export type BadgePosition = 'top' | 'bottom' | 'center' | 'freeform';

export interface BadgeProps {
  className?: string;
  /**
   * @default gray-light
   */
  color?: BadgeColor;
  /**
   * Count displayed on the badge. Truncates above 100.
   */
  count?: number;
  icon?: React.ReactNode;
  label?: string;
  /**
   * @default top
   */
  position?: BadgePosition;
  /**
   * @default circle
   */
  shape?: BadgeShape;
  /**
   * @default sm
   */
  size?: BadgeSize;
  tooltip?: string;
}

const colorToStyle = {
  'blue-dark': 'bg-gtmblue-400 border-gtmblue-400',
  'gray-dark': 'bg-gray-800 border-gray-800',
  'purple-dark': 'bg-gtmpurple-700 border-gtmpurple-700',
  'green-dark': 'bg-gtmgreen-400 border-gtmgreen-400',
  'orange-dark': 'bg-gtmorange-600 border-gtmorange-600 ',
  'yellow-dark': 'bg-gtmyellow-700 border-gtmyellow-700 ',
  'gray-light': 'bg-gray-200 text-gray-800',
  'purple-light': 'bg-gtmpurple-100 border-gtmpurple-100 text-gtmpurple-700',
  'blue-light': 'bg-gtmblue-100 border-gtmblue-100 text-gtmblue-400',
  'green-light': 'bg-gtmgreen-100 border-gtmgreen-100 text-gtmgreen-400',
  'orange-light': 'bg-gtmorange-100 border-gtmorange-100 text-gtmorange-600',
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
    position !== 'freeform' && 'absolute',
    'border-solid border-gray-200',
    'text-center font-medium uppercase leading-none antialiased p-1',
    position !== 'freeform' && hasContent && 'right-0',
    size === 'sm' && hasContent && 'text-2xs',
    size === 'md' && hasContent && 'text-xs',
    size === 'sm' && !hasContent && 'w-2 h-2',
    size === 'md' && !hasContent && 'w-4 h-4',
    color.includes('-dark') && 'text-white',
    colorToStyle[color],
    shape === 'circle' && 'rounded-full',
    shape === 'circle' && label && 'px-2',
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
