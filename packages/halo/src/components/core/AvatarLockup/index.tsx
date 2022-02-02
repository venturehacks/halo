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
    'flex items-center gap-2',
    (orientation === 'left' || orientation === 'right') && 'flex-row',
    orientation === 'top' && 'flex-col',
    size === 'sm' && 'h-12',
    size === 'md' && 'h-16 gap-3',
    size === 'lg' && 'h-22 gap-4',
  );

  return (
    <div className={classnames} {...rest}>
      <Avatar imageUrl={imageUrl} size={size} />
      {children}
    </div>
  );
}

const AvatarLockup = withForwardedRef<AvatarLockupProps, HTMLDivElement>(
  AvatarLockupRaw,
);

export { AvatarLockup };
