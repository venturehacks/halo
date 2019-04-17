import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface AvatarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Avatar({ children, className }: AvatarProps) {
  return (
    <div className={classNames(styles.component, className)}>
      <div>Avatar</div>
      {children}
    </div>
  );
}

export { Avatar };
