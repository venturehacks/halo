import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';
import { Avatar } from '../Avatar';

export type AvatarLockupOrientation = 'left' | 'right' | 'top';

export type AvatarLockupSize = 'sm' | 'md' | 'lg';

export interface AvatarLockupProps {
  children: React.ReactNode;
  className?: string;
  imageUrl: string;
  orientation: AvatarLockupOrientation;
  size: AvatarLockupSize;
}

function AvatarLockupRaw({
  className,
  children,
  imageUrl,
  orientation = 'left',
  size = 'md',
  forwardedRef,
  ...rest
}: AvatarLockupProps &
  ForwardedRefProps<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement>) {
  const classnames = classNames(
    className,
    'flex gap-2 text-left',
    (orientation === 'left' || orientation === 'right') &&
      'flex-row items-center',
    orientation === 'top' && 'flex-col',
    size === 'sm' && 'gap-1 text-sm',
    size === 'md' && 'gap-3 text-md font-medium',
    size === 'lg' && 'gap-4 text-lg font-medium',
  );

  return (
    <div className={classnames} {...rest}>
      {orientation === 'right' && children}
      <Avatar imageUrl={imageUrl} size={size} />
      {orientation !== 'right' && children}
    </div>
  );
}

const AvatarLockup = withForwardedRef<AvatarLockupProps, HTMLDivElement>(
  AvatarLockupRaw,
);

export { AvatarLockup };
