import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';
import { CloseIcon } from '../../icons';

export type TagColor = 'blue' | 'gray' | 'green' | 'orange' | 'purple' | 'red';

export type TagShape = 'pill' | 'rectangle';

export type TagSize = 'sm' | 'md';

export interface TagProps {
  /**
   * used to override the rendered elements. Mutually exclusive with label.
   */
  children?: React.ReactNode;
  className?: string;
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
  shape?: TagShape;
  size?: TagSize;
}

function TagRaw({
  children,
  className,
  color = 'blue',
  forwardedRef,
  icon,
  onClick,
  onClose,
  shape = 'rectangle',
  size = 'md',
  label,
  ...rest
}: TagProps & ForwardedRefProps<HTMLSpanElement>) {
  const componentClassnames = classNames(
    className,
    'mr-2 last:mr-0',
    color === 'blue' && 'bg-blue-200 bg-opacity-77 text-blue-600',
    color === 'gray' && 'bg-slate-200 bg-opacity-77 text-slate-600',
    color === 'green' && 'bg-green-200 text-green-600',
    color === 'orange' && 'bg-orange-200 bg-opacity-77 text-orange-600',
    color === 'purple' && 'bg-purple-200 bg-opacity-77 text-purple-600',
    color === 'red' && 'bg-red-200 text-red-600',
    shape === 'pill' && 'rounded-full',
    shape === 'rectangle' && 'rounded-md',
    size === 'sm' && 'text-xs min-w-4 px-2 py-1.5',
    size === 'md' && 'text-md min-w-6 px-3 py-2',
  );

  const iconClassnames = classNames(
    'inline-block',
    label && 'mr-1',
    size === 'sm' && 'w-2.5 h-2.5',
    size === 'md' && 'w-3 h-3',
  );

  const closeIconClassnames = classNames(iconClassnames, 'ml-2 mb-0.5');

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
      {icon && <span className={iconClassnames}> {icon} </span>}
      {label && label}
      {renderChildren && children}
      {onClose && (
        <CloseIcon
          className={closeIconClassnames}
          onClick={onClose}
          role="button"
        />
      )}
    </span>
  );
}

const Tag = withForwardedRef<TagProps, HTMLSpanElement>(TagRaw);

export { Tag };
