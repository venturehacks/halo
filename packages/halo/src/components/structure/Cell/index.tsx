/**
 * Tailwind note: Want to convert this component
 * as a final errand. Our "grid" is a flexbox used
 * as a grid, not an actual CSS grid.
 *
 * Conversely, Tailwind "grid" refers to CSS grid.
 * We should probably converge on that.
 */

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
