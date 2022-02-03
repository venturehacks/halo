import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';
import { Box } from '../../structure/Box';
import { Avatar } from '../Avatar';

export type AvatarLockupOrientation = 'left' | 'right' | 'top';

export type AvatarLockupSize = 'sm' | 'md' | 'lg';

export interface AvatarLockupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional byline to be displayed below the title. Mututally exclusive with children.
   */
  byline?: string;
  /**
   * Can be used to override the content to be placed next to the avatar. Should be used in the
   * case where there is more than just a title/byline.
   */
  children?: React.ReactNode;
  className?: string;
  imageUrl: string;
  orientation?: AvatarLockupOrientation;
  size?: AvatarLockupSize;
  /**
   * Optional title to be placed next to the avatar. Mututally exclusive with children.
   */
  title?: string;
}

function AvatarLockupRaw({
  className,
  forwardedRef,
  byline,
  children,
  imageUrl,
  orientation = 'left',
  size = 'md',
  title,
  ...rest
}: AvatarLockupProps & ForwardedRefProps<HTMLDivElement>) {
  const componentClassnames = classNames(
    className,
    'flex gap-2 text-left',
    (orientation === 'left' || orientation === 'right') &&
      'flex-row items-center',
    orientation === 'top' && 'flex-col',
    size === 'sm' && 'gap-1',
    size === 'md' && 'gap-3',
    size === 'lg' && 'gap-4',
  );
  const titleClassnames = classNames(
    size === 'sm' && 'text-sm font-normal',
    size === 'md' && 'text-md font-medium',
    size === 'lg' && 'text-lg font-medium',
  );
  const bylineClassnames = classNames(
    size === 'sm' && 'text-xs font-light',
    size === 'md' && 'text-sm font-light',
    size === 'lg' && 'text-md font-normal',
  );

  // should either render the children OR title + byline, not both.
  const hasChildren = children && !byline && !title;

  const content = (
    <>
      {hasChildren && children}
      {!hasChildren && (
        <Box>
          <div className={titleClassnames}>{title}</div>
          <div className={bylineClassnames}>{byline}</div>
        </Box>
      )}
    </>
  );

  return (
    <div className={componentClassnames} {...rest}>
      {orientation === 'right' && content}
      <Avatar imageUrl={imageUrl} size={size} />
      {orientation !== 'right' && content}
    </div>
  );
}

const AvatarLockup = withForwardedRef<AvatarLockupProps, HTMLDivElement>(
  AvatarLockupRaw,
);

export { AvatarLockup };
