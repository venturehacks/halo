// import classNames from 'classnames';
import React from 'react';

import { Grid, GridProps } from '../Grid';

/**
 * Shorthand component for grid cells
 */
export interface CellProps extends GridProps {
  children?: React.ReactNode;
  offset?: number;
  span?: number;
}

Cell.defaultProps = {
  offset: 0,
  span: 1,
};

function Cell({ children, offset, span, ...gridProps }: CellProps) {
  return (
    <Grid offset={offset} row={false} span={span} {...gridProps}>
      {children}
    </Grid>
  );
}

export { Cell };
