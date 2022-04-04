import classNames from 'classnames';
import React from 'react';

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

import styles from './styles.module.scss';

export type AvatarShape = 'circle' | 'square';

export type AvatarSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  badge?: string | React.ReactNode;
  badgeColor?: BadgeColor;
  badgePosition?: BadgePosition;
  badgeShape?: BadgeShape;
  className?: string;
  imageUrl: string;
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
  size = 'md',
  tooltip,
  forwardedRef,
  ...rest
}: AvatarProps &
  ForwardedRefProps<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement>) {
  const badgeSize: BadgeSize = size === 'lg' || size === 'xl' ? 'md' : 'sm';
  const badgeOptions = {
    color: badgeColor,
    position: badgePosition,
    shape: badgeShape,
    size: badgeSize,
    tooltip,
  };
  const isBadgeJSX = typeof badge !== 'string';
  // 'xxs' avatars are too small to have a badge
  const showBadge = badge && size !== 'xxs';

  return (
    <div
      ref={forwardedRef}
      className={classNames(
        styles.component,
        className,
        styles[size],
        styles[shape],
      )}
      {...rest}
    >
      <img
        alt={name ? `Avatar for ${name}` : 'Avatar'}
        className={classNames(styles.avatar, styles[shape])}
        height={IMAGE_SIZES[size]}
        src={imageUrl}
        width={IMAGE_SIZES[size]}
      />
      {showBadge && (
        <div className={styles.badge}>
          {isBadgeJSX ? badge : <Badge {...badgeOptions} label={badge} />}
        </div>
      )}
    </div>
  );
}

const Avatar = withForwardedRef<AvatarProps, HTMLDivElement>(AvatarRaw);

export { Avatar };

// For setting `height` and `width` attributes on `img` tag directly
// ! Keep in sync with ./styles.module.scss
export const IMAGE_SIZES: Record<AvatarSize, number> = {
  xxs: 16,
  xs: 24,
  sm: 32,
  md: 48,
  lg: 72,
  xl: 112,
};
