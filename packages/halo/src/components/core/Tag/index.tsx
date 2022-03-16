import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import { CloseIcon } from '../../icons';

export type TagColor = 'blue' | 'gray' | 'green' | 'orange' | 'purple' | 'red';

export type TagShape = 'pill' | 'rectangle';

export type TagSize = '2xs' | 'xs' | 'sm' | 'md';

export interface TagProps {
  /**
   * used to override the rendered elements. Mutually exclusive with label.
   */
  children?: React.ReactNode;
  className?: string;
  /**
   * Removes background color
   * @default false
   */
  clearBackground?: boolean;
  /**
   * @default blue
   */
  color?: TagColor;
  /**
   * icon displayed at start of tag
   */
  icon?: React.ReactNode;
  /**
   * text rendered inside the tag
   */
  label?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  /**
   * displays a 'x' icon and adds event handler
   */
  onClose?: React.MouseEventHandler<HTMLSpanElement>;
  /**
   * @default rectangle
   */
  shape?: TagShape;
  /**
   * @default sm
   */
  size?: TagSize;
}

function TagRaw({
  children,
  className,
  clearBackground,
  color = 'blue',
  forwardedRef,
  icon,
  label,
  onClick,
  onClose,
  shape = 'rectangle',
  size = 'sm',
  ...rest
}: TagProps & ForwardedRefProps<HTMLSpanElement>) {
  const componentClassnames = classNames(
    className,
    'inline-flex flex-row items-center mr-2 last:mr-0',
    color === 'blue' && 'bg-blue-100 text-dark-aaaa',
    color === 'gray' && 'bg-gray-100 text-dark-aaa',
    color === 'green' && 'bg-green-100 text-green-600',
    color === 'orange' && 'bg-orange-100 text-orange-600',
    color === 'purple' && 'bg-purple-100 text-purple-600',
    color === 'red' && 'bg-red-100 text-red-600',
    shape === 'pill' && 'rounded-full',
    shape === 'rectangle' && 'rounded-md',
    size === '2xs' && 'gap-1 text-3xs px-2 py-0.5 antialiased',
    size === 'xs' && 'gap-1 text-2xs px-2 py-0.5 antialiased',
    size === 'sm' && 'gap-2 text-xs px-3 py-1',
    size === 'md' && 'gap-2 text-md px-3 py-2',
    clearBackground ? 'bg-opacity-0' : 'bg-opacity-75',
  );
  const iconClassnames = classNames(
    size === '2xs' && 'w-2 h-2',
    size === 'xs' && 'w-2 h-2',
    size === 'sm' && 'w-3 h-3',
    size === 'md' && 'w-4 h-4',
  );

  const onClickProps = onClick
    ? {
        onClick,
        role: 'button',
        tabIndex: 0,
      }
    : {};

  // will only render children if no text has been provided.
  const renderChildren = children && !label;

  return (
    <span
      ref={forwardedRef}
      className={componentClassnames}
      {...onClickProps}
      {...rest}
    >
      {icon && <span className={iconClassnames}>{icon}</span>}
      {label && label}
      {renderChildren && children}
      {onClose && (
        <CloseIcon
          className={classNames(iconClassnames, 'opacity-50')}
          onClick={(e) => {
            e.stopPropagation();
            onClose(e);
          }}
          role="button"
          tabIndex={0}
        />
      )}
    </span>
  );
}

const Tag = withForwardedRef<TagProps, HTMLSpanElement>(TagRaw);

export { Tag };
