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
   * @default md
   */
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
  size = 'sm',
  label,
  ...rest
}: TagProps & ForwardedRefProps<HTMLSpanElement>) {
  const componentClassnames = classNames(
    className,
    'inline-flex flex-row items-center mr-2 last:mr-0',
    color === 'blue' && 'bg-blue-100 bg-opacity-75 text-dark-aaaa',
    color === 'gray' && 'bg-slate-100 bg-opacity-75 text-dark-aaa',
    color === 'green' && 'bg-green-200 text-green-600',
    color === 'orange' && 'bg-orange-200 bg-opacity-75 text-orange-600',
    color === 'purple' && 'bg-purple-200 bg-opacity-75 text-purple-600',
    color === 'red' && 'bg-red-200 text-red-600',
    shape === 'pill' && 'rounded-full',
    shape === 'rectangle' && 'rounded-md',
    size === '2xs' && 'gap-0.5 text-4xs h-4 px-1.5 py-1',
    size === 'xs' && 'gap-1 text-2xs h-6 px-2 py-1',
    size === 'sm' && 'gap-1.5 text-xs h-8 px-3 py-2',
    size === 'md' && 'gap-2 text-md h-10 px-3 py-2',
  );
  const iconClassnames = classNames(
    size === '2xs' && 'w-1.5 h-1.5',
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
          onClick={e => {
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
