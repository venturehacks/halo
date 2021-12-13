import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

type InterfaceHeaderLevel = 'primary' | 'secondary' | 'tertiary' | 'micro';

/* eslint-disable typescript-sort-keys/interface */
export interface InterfaceHeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  level: InterfaceHeaderLevel;
  /**
   * Optional shorthand for level="primary"
   * @default false
   */
  primary?: boolean;
  /**
   * Optional shorthand for level="secondary"
   * @default false
   */
  secondary?: boolean;
  /**
   * Optional shorthand for level="tertiary"
   * @default false
   */
  tertiary?: boolean;
  /**
   * Optional shorthand for level="micro"
   * @default false
   */
  micro?: boolean;
}
/* eslint-enable typescript-sort-keys/interface */

function InterfaceHeaderRaw({
  className,
  children,
  level,
  primary,
  secondary,
  tertiary,
  micro,
  ...rest
}: InterfaceHeaderProps & ForwardedRefProps<HTMLHeadingElement>) {
  return (
    <header
      className={classNames(
        ' ',
        (primary || level === 'primary') &&
          'text-xl font-normal text-slate-800',
        (secondary || level === 'secondary') &&
          'text-lg font-medium text-dark-aaa',
        (tertiary || level === 'tertiary') &&
          'text-md font-medium text-dark-aaa',
        (micro || level === 'micro') && 'text-xs font-medium text-dark-aa',
        className,
      )}
      {...rest}
    >
      {children}
    </header>
  );
}

const InterfaceHeader = withForwardedRef<
  InterfaceHeaderProps,
  HTMLHeadingElement
>(InterfaceHeaderRaw);

export { InterfaceHeader };
