import classNames from 'classnames';
import { mapKeys } from 'lodash';
import * as React from 'react';
import { PaletteColor } from '~/lib/colors';

import * as styles from './styles.scss';

export type BoxAlign =
  | 'top'
  | 'center'
  | 'bottom'
  | 'left'
  | 'right'
  | 'normal'
  | 'space-between'
  | 'space-evenly'
  | 'stretch';

export interface NegativeSpace {
  top?: number | boolean;
  bottom?: number | boolean;
  left?: number | boolean;
  right?: number | boolean;
}

export interface BoxProps {
  align?: BoxAlign;
  background?: PaletteColor | string;
  children?: React.ReactNode;
  className?: string;
  column?: boolean;
  margin?: number | boolean | NegativeSpace;
  maxHeight?: number | string;
  maxWidth?: number | string;
  order?: number;
  padding?: number | boolean | NegativeSpace;
  relative?: boolean;
  row?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  valign?: BoxAlign;
  wrap?: boolean;
}

Box.defaultProps = {
  column: true,
  margin: 0,
  padding: 0,
  row: false,
  wrap: false,
};

function Box({
  align,
  background,
  children,
  className,
  column,
  margin,
  maxHeight,
  maxWidth,
  order,
  padding,
  relative,
  row,
  textAlign,
  valign,
  wrap,
}: BoxProps) {
  // mutually exclusive: grid vs flexcolumn vs. flexrow
  const isGridElement = !row && !column;
  const isGenericFlexColumn = !isGridElement && column && !row;
  const isGenericFlexRow = !isGridElement && row;

  // parse 4-direction hashes for padding/margin
  let negativeSpaceClasses: Dictionary<number | boolean> = {};
  negativeSpaceClasses = augmentNegativeSpaceClasses(
    negativeSpaceClasses,
    margin,
    'margin',
  );
  negativeSpaceClasses = augmentNegativeSpaceClasses(
    negativeSpaceClasses,
    padding,
    'padding',
  );

  // inline styles for order, etc.
  const inlineStyles: Dictionary<string | number> = {};

  if (order) {
    inlineStyles.order = order;
  }

  if (maxWidth) {
    inlineStyles.maxWidth = maxWidth;
  }

  if (maxHeight) {
    inlineStyles.maxHeight = maxHeight;
  }

  if (background) {
    // TODO: filter PaletteColors
    inlineStyles.background = background;
  }

  const classes = classNames(
    styles.component,
    className,
    isGenericFlexColumn && styles.flexColumn,
    isGenericFlexRow && styles.flexRow,
    relative && styles.relative,
    textAlign && styles[`__halo_textAlign_${textAlign}`],
    wrap && styles.wrap,
    isGenericFlexColumn && align && `__halo_column_align_${align}`,
    isGenericFlexColumn && valign && `__halo_column_valign_${valign}`,
    isGenericFlexRow && align && `__halo_row_align_${align}`,
    isGenericFlexRow && valign && `__halo_row_valign_${valign}`,
    negativeSpaceClasses,
    background && styles[`background-${background}`],
  );

  return (
    <div className={classes} style={inlineStyles}>
      {children}
    </div>
  );
}

function augmentNegativeSpaceClasses(
  classes: Dictionary<number | boolean>,
  space: NegativeSpace | number | boolean,
  metric: 'padding' | 'margin',
) {
  if (typeof space === 'object') {
    return {
      ...classes,
      ...mapKeys(space, (value, key) => `__halo_${metric}_${key}_${value}`),
    };
  } else if (
    (typeof space === 'number' || typeof space === 'boolean') &&
    space
  ) {
    return {
      ...classes,
      ...{
        [`__halo_${metric}_top_${Number(space)}`]: true,
        [`__halo_${metric}_bottom_${Number(space)}`]: true,
        [`__halo_${metric}_left_${Number(space)}`]: true,
        [`__halo_${metric}_right_${Number(space)}`]: true,
      },
    };
  }

  return classes;
}

export { Box };
