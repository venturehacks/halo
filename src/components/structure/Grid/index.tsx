import classNames from 'classnames';
import React from 'react';

import { Box, BoxProps } from '../Box';

import styles from './styles.scss';

export interface GridProps extends BoxProps {
  centered?: boolean;
  children?: React.ReactNode;
  className?: string;
  offset?: number;
  row?: boolean;
  span?: number;
}

Grid.defaultProps = {
  centered: false,
  offset: 0,
  row: true,
};

function Grid({
  centered,
  children,
  className,
  offset,
  row,
  span,
  ...boxProps
}: GridProps) {
  const classes = classNames(
    styles.component,
    className,
    row && styles.row,
    centered && styles.centered,
    !row && span && `__halo_cellSpan_${span}`,
    !row && offset && `__halo_cellOffset_${offset}`,
  );

  return (
    <Box className={classes} column={false} row={false} {...boxProps}>
      {children}
    </Box>
  );
}

export { Grid };
