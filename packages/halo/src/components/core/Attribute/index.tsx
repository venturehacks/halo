import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import styles from './styles.module.scss';

export type AttributeSize = 'xs' | 'sm' | 'md' | 'lg';

/* eslint-disable typescript-sort-keys/interface */
export interface AttributeProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  /**
   * Attribute name / term
   */
  name: string;
  /**
   * Attribute value / definition
   */
  value: string;
}
/* eslint-enable typescript-sort-keys/interface */

function AttributeRaw({
  className,
  name,
  value,
  forwardedRef,
  ...rest
}: AttributeProps & ForwardedRefProps<HTMLDivElement>) {
  return (
    <div ref={forwardedRef} className={className} {...rest}>
      <dt className="font-medium text-dark-aaaa">{name}</dt>
      <dd className="font-normal text-dark-aaa">{value}</dd>
    </div>
  );
}

export interface AttributeListProps
  extends React.HTMLAttributes<HTMLDListElement> {
  className?: string;
  /**
   * Size of attribute
   * @default sm
   */
  size?: AttributeSize;
}

function AttributeList({
  children,
  size = 'sm',
  className,
  ...rest
}: AttributeListProps) {
  return (
    <dl
      className={classNames(
        size === 'xs' && 'text-xs',
        size === 'xs' && styles.xs,
        size === 'sm' && 'text-sm',
        size === 'sm' && styles.sm,
        size === 'md' && 'text-md',
        size === 'md' && styles.md,
        size === 'lg' && 'text-lg',
        size === 'lg' && styles.lg,
        className,
      )}
      {...rest}
    >
      {children}
    </dl>
  );
}

const Attribute = withForwardedRef<AttributeProps, HTMLDivElement>(
  AttributeRaw,
);

export { Attribute, AttributeList };
