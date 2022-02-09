import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

type InterfaceHeaderLevel = 'page' | 'panel' | 'section' | 'micro';

/* eslint-disable typescript-sort-keys/interface */
export interface InterfaceHeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  level?: InterfaceHeaderLevel;
  /**
   * Include negative space under header.
   * @default false
   */
  flow?: boolean;
  /**
   * Optional shorthand for level="page"
   * @default false
   */
  page?: boolean;
  /**
   * Optional shorthand for level="panel"
   * @default false
   */
  panel?: boolean;
  /**
   * Optional shorthand for level="section"
   * @default false
   */
  section?: boolean;
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
  page,
  panel,
  section,
  micro,
  flow,
  forwardedRef,
  ...rest
}: InterfaceHeaderProps & ForwardedRefProps<HTMLHeadingElement>) {
  if (!level && !page && !panel && !section && !micro) {
    throw new Error('[Halo InterfaceHeader] must specify `level`');
  }

  return (
    <header
      ref={forwardedRef}
      className={classNames(
        (page || level === 'page') && 'text-xl text-slate-800',
        (panel || level === 'panel') && 'text-lg text-dark-aaa',
        (section || level === 'section') && 'text-md text-dark-aaa',
        (micro || level === 'micro') && 'text-xs text-dark-aa',
        'font-medium',
        'antialiased',
        flow && 'mb-4',
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
