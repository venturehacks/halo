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
        (page || level === 'page') && 'text-xl font-normal text-slate-800',
        (panel || level === 'panel') && 'text-lg font-medium text-dark-aaa',
        (section || level === 'section') && 'text-md font-medium text-dark-aaa',
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
