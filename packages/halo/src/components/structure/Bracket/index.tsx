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
  gap?: '0' | '2' | '4' | '6' | '8';
}
/* eslint-enable typescript-sort-keys/interface */

function BracketRaw({
  className,
  forwardedRef,
  children,
  isolate = 'first-child',
  gap = '4',
  ...rest
}: BracketProps & ForwardedRefProps<HTMLDivElement>) {
  return (
    <div
      ref={forwardedRef}
      className={classNames(
        'flex flex-col md:flex-row md:items-center',
        styles.component,
        isolate === 'first-child' && styles.isolateFirstChild,
        isolate === 'last-child' && styles.isolateLastChild,
        gap === '2' && 'gap-2',
        gap === '4' && 'gap-4',
        gap === '6' && 'gap-6',
        gap === '8' && 'gap-8',
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
