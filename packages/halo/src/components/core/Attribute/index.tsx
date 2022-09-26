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
   * Attribute value / definition. Alternatively may use children.
   */
  value?: string;
}
/* eslint-enable typescript-sort-keys/interface */

function AttributeRaw({
  className,
  name,
  value,
  forwardedRef,
  children,
  ...rest
}: React.PropsWithChildren<AttributeProps> &
  ForwardedRefProps<HTMLDivElement>) {
  return (
    <div ref={forwardedRef} className={className} {...rest}>
      <dt className="text-dark-aaaa font-medium">{name}</dt>
      <dd className="text-dark-aaa font-normal">{value || children}</dd>
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

function AttributeListRaw({
  children,
  size = 'sm',
  className,
  forwardedRef,
  ...rest
}: AttributeListProps & ForwardedRefProps<HTMLDListElement>) {
  return (
    <dl
      ref={forwardedRef}
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

const AttributeList = withForwardedRef<AttributeProps, HTMLDListElement>(
  AttributeListRaw,
);

const Attribute = withForwardedRef<AttributeProps, HTMLDivElement>(
  AttributeRaw,
);

export { Attribute, AttributeList };
