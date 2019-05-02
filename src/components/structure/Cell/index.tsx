// import classNames from 'classnames';
import * as React from 'react';

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
  span: 1,
  offset: 0,
};

function Cell({ children, offset, span, ...gridProps }: CellProps) {
  return (
    <Grid row={false} span={span} offset={offset} {...gridProps}>
      {children}
    </Grid>
  );
}

export { Cell };
