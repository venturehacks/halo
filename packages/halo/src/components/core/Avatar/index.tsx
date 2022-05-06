import classNames from 'classnames';
import React from 'react';
import { CompanyIcon } from '../../icons';

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
  /**
   * Falsy value or url containing nopic_startup will result in
   * startup fallback icon.
   */
  imageUrl: Nullable<string>;
  name?: string;
  /**
   * Circle for individuals, square for startups
   * @default circle
   */
  shape?: AvatarShape;
  /**
   * @default sm
   */
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

  const useStartupFallbackIcon =
    shape === 'square' && (!imageUrl || imageUrl?.includes('nopic_startup'));

  const componentClassnames = classNames(
    className,
    'inline-flex flex-row items-center relative',
    'border border-gray-300',
    shape === 'circle' && 'rounded-full',
    shape === 'square' && 'rounded-md',
    size === 'xxs' && 'h-4 w-4',
    size === 'xs' && 'h-6 w-6',
    size === 'sm' && 'h-8 w-8',
    size === 'md' && 'h-12 w-12',
    size === 'lg' && 'h-18 w-18',
    size === 'xl' && 'h-28 w-28',
    useStartupFallbackIcon && 'bg-slate-100',
  );

  const iconClassnames = classNames(
    'm-auto text-slate-400',
    size === 'xxs' && 'h-3 w-3',
    size === 'xs' && 'h-4 w-4',
    size === 'sm' && 'h-5 w-5',
    size === 'md' && 'h-7 w-7',
    (size === 'xl' || size === 'lg') && 'h-10 w-10',
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
      {useStartupFallbackIcon ? (
        <CompanyIcon className={iconClassnames} />
      ) : (
        <img
          alt={name ? `Avatar for ${name}` : 'Avatar'}
          className={avatarClassNames}
          /* accomodate 1px border */
          height={IMAGE_SIZES[size] - 2}
          src={imageUrl}
          width={IMAGE_SIZES[size] - 2}
        />
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
