import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import { CloseIcon } from '../../icons';

export type TagColor = 'blue' | 'gray' | 'green' | 'orange' | 'purple' | 'red';

export type TagSize = 'xs' | 'sm' | 'md';

export type LabelDecoration = 'underline';

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
  labelDecoration?: LabelDecoration;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  /**
   * displays a 'x' icon and adds event handler
   */
  onClose?: React.MouseEventHandler<HTMLSpanElement>;
  /**
   * @default sm
   */
  size?: TagSize;
}

function TagRaw({
  children,
  className,
  clearBackground,
  color = 'gray',
  forwardedRef,
  icon,
  label,
  onClick,
  onClose,
  size = 'xs',
  labelDecoration,
  ...rest
}: TagProps & ForwardedRefProps<HTMLSpanElement>) {
  const componentClassnames = classNames(
    className,
    'inline-flex flex-row items-center mr-2 last:mr-0 rounded-full uppercase font-bold',
    color === 'blue' && 'bg-gtmblue-100 text-dark-aaaa',
    color === 'gray' && 'bg-gray-200 text-gray-700',
    color === 'green' && 'bg-green-100 text-green-600',
    color === 'orange' && 'bg-orange-100 text-orange-600',
    color === 'purple' && 'bg-purple-100 text-purple-600',
    color === 'red' && 'bg-red-100 text-red-600',
    size === 'xs' && 'gap-1 text-2xs px-2 py-0.5 antialiased',
    size === 'sm' && 'gap-2 text-xs px-3 py-1',
    size === 'md' && 'gap-2 text-sm px-3 py-2',
    labelDecoration === 'underline' && labelDecoration,
    clearBackground && 'bg-opacity-0',
  );
  const iconClassnames = classNames(
    'text-black',
    size === 'xs' && 'w-3 h-3',
    size === 'sm' && 'w-4 h-4',
    size === 'md' && 'w-5 h-5',
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
          className={classNames(iconClassnames)}
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
