import classNames from 'classnames';
import React from 'react';

import { ForwardedRefProps, withForwardedRef } from '../../../lib/withForwardedRef';
import { Badge, BadgeColor } from '../Badge';

import styles from './styles.scss';

export type AvatarShape = 'circle' | 'square';

export type AvatarSize = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large';

interface Props extends ForwardedRefProps {
  badge?: string | boolean;
  badgeColor?: BadgeColor;
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
  className,
  imageUrl,
  name,
  shape = 'circle',
  size = 'medium',
  tooltip,
  forwardedRef,
}: Props) {
  const badgeOptions = {
    color: badgeColor,
    tooltip,
  };

  return (
    <div
      className={classNames(
        styles.component,
        className,
        styles[shape],
        styles[size],
      )}
      ref={forwardedRef}
    >
      <img
        className={classNames(styles.avatar, styles[shape], styles[size])}
        src={imageUrl}
        alt={`Avatar for ${name}`}
      />
      {badge && <Badge {...badgeOptions}>{badge}</Badge>}
    </div>
  );
}

const Avatar = withForwardedRef(AvatarRaw);

export { Avatar };
