import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface BoxProps {
  className?: string;
  children?: React.ReactNode;
  column?: boolean;
  row?: boolean;
  wrap?: boolean;
}

Box.defaultProps = {
  column: true,
  row: false,
  wrap: false,
};

function Box({ children, className, column, row, wrap }: BoxProps) {
  const classes = classNames(
    styles.component,
    className,
    column && styles.column,
    row && styles.row,
    wrap && styles.wrap,
  );

  return <div className={classes}>{children}</div>;
}

export { Box };
