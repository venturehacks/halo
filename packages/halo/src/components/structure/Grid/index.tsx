/**
 * Tailwind note: Want to convert this component
 * as a final errand. Our "grid" is a flexbox used
 * as a grid, not an actual CSS grid.
 *
 * Conversely, Tailwind "grid" refers to CSS grid.
 * We should probably converge on that.
 */

import classNames from 'classnames';
import React from 'react';

import { Box, BoxProps } from '../Box';

import styles from './styles.module.scss';

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
    className,
    row && styles.row,
    centered && styles.centered,
    !row && span && `_h_cellSpan_${span}`,
    !row && offset && `_h_cellOffset_${offset}`,
  );

  return (
    <Box className={classes} column={false} row={false} {...boxProps}>
      {children}
    </Box>
  );
}

export { Grid };
