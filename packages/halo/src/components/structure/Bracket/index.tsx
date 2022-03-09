import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import styles from './styles.module.scss';

/* eslint-disable typescript-sort-keys/interface */
export interface BracketProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  /**
   * Which child to separate from the others?
   * @default first-child
   */
  isolate?: 'first-child' | 'last-child';
}

function BracketRaw({
  className,
  forwardedRef,
  children,
  isolate = 'first-child',
  ...rest
}: BracketProps & ForwardedRefProps<HTMLDivElement>) {
  const hasGap = className?.includes('gap-');
  return (
    <div
      ref={forwardedRef}
      className={classNames(
        'flex flex-col md:flex-row md:items-center',
        styles.component,
        isolate === 'first-child' && styles.isolateFirstChild,
        isolate === 'last-child' && styles.isolateLastChild,
        !hasGap && 'gap-4',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

const Bracket = withForwardedRef<BracketProps, HTMLDivElement>(BracketRaw);

export { Bracket };
