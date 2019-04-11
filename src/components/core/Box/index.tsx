import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface BoxProps {
  className?: string;
  children?: React.ReactNode;
  column?: boolean;
  row?: boolean;
  wrap?: boolean;
  padding?: number | boolean;
  margin?: number | boolean;
}

Box.defaultProps = {
  column: true,
  row: false,
  wrap: false,
  padding: 0,
};

function Box({
  children,
  className,
  column,
  row,
  wrap,
  padding,
  margin,
}: BoxProps) {
  const classes = classNames(
    styles.component,
    className,
    column && styles.column,
    row && styles.row,
    wrap && styles.wrap,
    padding && styles[`padding-${Number(padding)}`],
    margin && styles[`margin-${Number(margin)}`],
  );

  return <div className={classes}>{children}</div>;
}

export { Box };
