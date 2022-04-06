import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

export type InterfaceHeaderLevel = 'page' | 'section' | 'subsection' | 'mini';

/* eslint-disable typescript-sort-keys/interface */
export interface InterfaceHeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
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
   * Optional shorthand for level="subsection"
   * @default false
   */
  subsection?: boolean;
  /**
   * Optional shorthand for level="section"
   * @default false
   */
  section?: boolean;
  /**
   * Optional shorthand for level="mini"
   * @default false
   */
  mini?: boolean;
  title: string;
  byline?: string;
}
/* eslint-enable typescript-sort-keys/interface */

function InterfaceHeaderRaw({
  byline,
  className,
  flow,
  forwardedRef,
  level,
  mini,
  page,
  section,
  subsection,
  title,
  ...rest
}: InterfaceHeaderProps & ForwardedRefProps<HTMLHeadingElement>) {
  if (!level && !page && !section && !subsection && !mini) {
    throw new Error('[Halo InterfaceHeader] must specify `level`');
  }

  const isPage = page || level === 'page';
  const isSection = section || level === 'section';
  const isSubsection = subsection || level === 'subsection';
  const isMini = mini || level === 'mini';

  return (
    <header
      ref={forwardedRef}
      className={classNames(
        'text-dark-aaaa font-medium antialiased',
        isPage && 'text-xl',
        isSection && 'text-lg',
        isSubsection && 'text-md',
        isMini && 'text-sm',
        flow && isPage && 'mb-6',
        flow && isSection && 'mb-4',
        flow && isSubsection && 'mb-4',
        flow && isMini && 'mb-4',
        className,
      )}
      {...rest}
    >
      {byline ? (
        <>
          <div>{title}</div>
          <div
            className={classNames(
              'text-dark-aa',
              'font-normal',
              isPage && 'text-md mt-2',
              isSection && 'text-md mt-1',
              isSubsection && 'mt-0.5 text-sm',
              isMini && 'text-xs',
            )}
          >
            {byline}
          </div>
        </>
      ) : (
        title
      )}
    </header>
  );
}

const InterfaceHeader = withForwardedRef<
  InterfaceHeaderProps,
  HTMLHeadingElement
>(InterfaceHeaderRaw);

export { InterfaceHeader };
