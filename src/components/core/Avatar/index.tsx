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
}: AvatarProps & ForwardedRefProps) {
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
    >
      <img
        alt={`Avatar for ${name}`}
        className={classNames(styles.avatar, styles[shape])}
        src={imageUrl}
      />
      {badge && <Badge {...badgeOptions}>{badge}</Badge>}
    </div>
  );
}

const Avatar = withForwardedRef<AvatarProps>(AvatarRaw);

export { Avatar };
