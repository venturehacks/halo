import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface IconProps {
  className?: string;
}

function Icon({ className }: IconProps) {
  return <div className={classNames(styles.component, className)}>Icon</div>;
}

export { Icon };
