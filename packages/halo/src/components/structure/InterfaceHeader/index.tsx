import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

export type InterfaceHeaderLevel = 'page' | 'section' | 'subdivision' | 'mini';

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
   * Optional shorthand for level="subdivision"
   * @default false
   */
  subdivision?: boolean;
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
  className,
  level,
  page,
  section,
  subdivision,
  mini,
  flow,
  forwardedRef,
  title,
  byline,
  ...rest
}: InterfaceHeaderProps & ForwardedRefProps<HTMLHeadingElement>) {
  if (!level && !page && !section && !subdivision && !mini) {
    throw new Error('[Halo InterfaceHeader] must specify `level`');
  }

  const isPage = page || level === 'page';
  const isSection = section || level === 'section';
  const isSubdivision = subdivision || level === 'subdivision';
  const isMini = mini || level === 'mini';

  return (
    <header
      ref={forwardedRef}
      className={classNames(
        'text-dark-aaaa font-medium antialiased',
        isPage && 'text-xl',
        isSection && 'text-lg',
        isSubdivision && 'text-md',
        isMini && 'text-sm',
        flow && isPage && 'mb-6',
        flow && isSection && 'mb-4',
        flow && isSubdivision && 'mb-4',
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
              isSubdivision && 'text-sm mt-0.5',
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
