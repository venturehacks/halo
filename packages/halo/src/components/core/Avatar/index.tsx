import classNames from 'classnames';
import React from 'react';
import { CompanyIcon } from '~/components/icons';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';
import {
  Badge,
  BadgeColor,
  BadgePosition,
  BadgeShape,
  BadgeSize,
} from '../Badge';

export type AvatarShape = 'circle' | 'square';

export type AvatarSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  badge?: string | React.ReactNode;
  badgeColor?: BadgeColor;
  badgePosition?: BadgePosition;
  badgeShape?: BadgeShape;
  className?: string;
  imageUrl?: string;
  name?: string;
  shape?: AvatarShape;
  size: AvatarSize;
  tooltip?: string;
}

function AvatarRaw({
  badge,
  badgeColor,
  badgePosition,
  badgeShape,
  className,
  imageUrl,
  name,
  shape = 'circle',
  size = 'sm',
  tooltip,
  forwardedRef,
  ...rest
}: AvatarProps &
  ForwardedRefProps<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement>) {
  const badgeSize: BadgeSize = size === 'lg' || size === 'xl' ? 'md' : 'sm';

  // 'xxs' avatars are too small to have a badge
  const showBadge = badge && size !== 'xxs';

  const isBadgeJSX = typeof badge !== 'string';

  const showImage =
    shape === 'circle' || (imageUrl && !imageUrl.includes('nopic_startup.png'));

  const componentClassnames = classNames(
    className,
    'inline-flex flex-row items-center relative',
    'border border-gray-200',
    shape === 'circle' && 'rounded-full',
    shape === 'square' && 'rounded-md',
    size === 'xxs' && 'h-4 w-4',
    size === 'xs' && 'h-6 w-6',
    size === 'sm' && 'h-8 w-8',
    size === 'md' && 'h-12 w-12',
    size === 'lg' && 'h-18 w-18',
    size === 'xl' && 'h-28 w-28',
    !showImage && 'bg-slate-100',
  );

  const iconClassnames = classNames(
    'm-auto',
    size === 'xxs' && 'h-4 w-4',
    size === 'xs' && 'h-6 w-6',
    size === 'sm' && 'h-8 w-8',
    (size === 'xl' || size === 'lg' || size === 'md') && 'h-10 w-10',
  );

  const avatarClassNames = classNames(
    shape === 'circle' && 'rounded-full',
    shape === 'square' && 'rounded-md',
  );

  const badgeOptions = {
    color: badgeColor,
    position: badgePosition,
    shape: badgeShape,
    size: badgeSize,
    tooltip,
  };

  return (
    <div
      ref={forwardedRef}
      className={classNames(componentClassnames, className)}
      {...rest}
    >
      {showImage ? (
        <img
          alt={name ? `Avatar for ${name}` : 'Avatar'}
          className={avatarClassNames}
          height={IMAGE_SIZES[size]}
          src={imageUrl}
          width={IMAGE_SIZES[size]}
        />
      ) : (
        <CompanyIcon className={iconClassnames} />
      )}
      {showBadge && (
        <>{isBadgeJSX ? badge : <Badge {...badgeOptions} label={badge} />}</>
      )}
    </div>
  );
}

const Avatar = withForwardedRef<AvatarProps, HTMLDivElement>(AvatarRaw);

export { Avatar };

// For setting `height` and `width` attributes on `img` tag directly
// due to css loading causing layout shifts.
export const IMAGE_SIZES: Record<AvatarSize, number> = {
  xxs: 16,
  xs: 24,
  sm: 32,
  md: 48,
  lg: 72,
  xl: 112,
};
