import classNames from 'classnames';
import { mapKeys } from 'lodash';
import * as React from 'react';

import * as styles from './styles.scss';

export type BoxAlign =
  | 'top'
  | 'center'
  | 'bottom'
  | 'left'
  | 'right'
  | 'normal'
  | 'space-between'
  | 'space-evenly';

export interface NegativeSpace {
  top?: number | boolean;
  bottom?: number | boolean;
  left?: number | boolean;
  right?: number | boolean;
}

export interface BoxProps {
  align?: BoxAlign;
  background?: string;
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
    inlineStyles.background = background;
  }

  const classes = classNames(
    styles.component,
    className,
    isGenericFlexColumn && styles.flexColumn,
    isGenericFlexRow && styles.flexRow,
    relative && styles.relative,
    textAlign && styles[`textAlign_${textAlign}`],
    wrap && styles.wrap,
    align && styles[`align_${align}`],
    valign && styles[`valign_${valign}`],
    negativeSpaceClasses,
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
      ...mapKeys(space, (value, key) => styles[`${metric}_${key}_${value}`]),
    };
  } else if (
    (typeof space === 'number' || typeof space === 'boolean') &&
    space
  ) {
    return {
      ...classes,
      ...{
        [styles[`${metric}_top_${Number(space)}`]]: true,
        [styles[`${metric}_bottom_${Number(space)}`]]: true,
        [styles[`${metric}_left_${Number(space)}`]]: true,
        [styles[`${metric}_right_${Number(space)}`]]: true,
      },
    };
  }

  return classes;
}

export { Box };