import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface NumberProps {
  className?: string;
  children?: React.ReactNode;
}

function Number({ children, className }: NumberProps) {
  return (
    <div className={classNames(styles.component, className)}>
      <div>Number</div>
      {children}
    </div>
  );
}

export { Number };
