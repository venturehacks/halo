import classNames from 'classnames';
import * as React from 'react';

import { Box, BoxProps } from '../Box';

import * as styles from './styles.scss';

export interface GridProps {
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
}: GridProps & BoxProps) {
  const classes = classNames(
    styles.component,
    className,
    row && styles.row,
    !row && centered && styles.centered,
    !row && span && styles[`cellSpan_${span}`],
    !row && offset && styles[`cellOffset_${offset}`],
  );

  return (
    <Box className={classes} column={false} row={false} {...boxProps}>
      {children}
    </Box>
  );
}

export { Grid };
