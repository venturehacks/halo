import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';
import { Badge, BadgeColor, BadgeShape } from '../Badge';

import styles from './styles.scss';

export type AvatarShape = 'circle' | 'square';

export type AvatarSize =
  | 'xxxsmall'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large';

export interface AvatarProps {
  badge?: string | boolean;
  badgeColor?: BadgeColor;
  badgeShape?: BadgeShape;
  className?: string;
  imageUrl: string;
  name: string;
  shape?: AvatarShape;
  size: AvatarSize;
  tooltip?: string;
}

function AvatarRaw({
  badge = false,
  badgeColor,
  badgeShape,
  className,
  imageUrl,
  name,
  shape = 'circle',
  size = 'medium',
  tooltip,
  forwardedRef,
  ...rest
}: AvatarProps &
  ForwardedRefProps<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement>) {
  const badgeOptions = {
    color: badgeColor,
    shape: badgeShape,
    tooltip,
  };

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
        alt={`Avatar for ${name}`}
        className={classNames(styles.avatar, styles[shape])}
        height={IMAGE_SIZES[size]}
        src={imageUrl}
        width={IMAGE_SIZES[size]}
      />
      {badge && <Badge {...badgeOptions}>{badge}</Badge>}
    </div>
  );
}

const Avatar = withForwardedRef<AvatarProps, HTMLDivElement>(AvatarRaw);

export { Avatar };

// For setting `height` and `width` attributes on `img` tag directly
// ! Keep in sync with ./styles.scss
/* eslint-disable sort-keys-fix/sort-keys-fix */
export const IMAGE_SIZES: Record<AvatarSize, number> = {
  xxxsmall: 16,
  xxsmall: 24,
  xsmall: 32,
  small: 48,
  medium: 60,
  large: 80,
};
/* eslint-enable sort-keys-fix/sort-keys-fix */
