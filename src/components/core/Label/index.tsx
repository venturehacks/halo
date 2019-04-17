import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface LabelProps {
  className?: string;
  children?: React.ReactNode;
}

function Label({ children, className }: LabelProps) {
  return (
    <div className={classNames(styles.component, className)}>
      <div>Label</div>
      {children}
    </div>
  );
}

export { Label };
