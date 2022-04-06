import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import { CloseIcon } from '../../icons';

import styles from './styles.module.scss';

export type TagColor = 'blue' | 'gray';

export type TagSize = 'xs' | 'sm' | 'md';

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
  ...rest
}: TagProps & ForwardedRefProps<HTMLSpanElement>) {
  const componentClassnames = classNames(
    className,
    styles.component,
    'inline-flex flex-row items-center mr-2 last:mr-0 rounded-full',
    color === 'blue' && 'bg-gtmblue-100 text-dark-aaaa',
    color === 'gray' && 'bg-gray-200 text-gray-700',
    size === 'xs' && 'gap-1 text-2xs px-2 py-0.5',
    size === 'sm' && 'gap-2 text-xs px-3 py-1',
    size === 'md' && 'gap-2 text-sm px-3 py-2',
    onClick && 'hover:underline',
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
      {label && <span className="font-medium uppercase">{label}</span>}
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
