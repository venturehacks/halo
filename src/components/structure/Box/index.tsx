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
  gridRow?: boolean;
  gridCellSpan?: number;
  gridCentered?: boolean;
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
  gridCellSpan,
  gridCentered,
  gridRow,
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
  // mutually exclusive: gridRow vs. gridCell
  const isGridElement = gridRow || gridCellSpan;
  const isGridRow = isGridElement && !gridCellSpan;
  const isGridCell = isGridElement && !isGridRow;

  // mutually exclusive: column vs. row (grid takes precedence over both)
  const isGenericFlexColumn = !isGridElement && column && !row;
  const isGenericFlexRow = !isGridElement && row;

  // parse 4-direction hash of padding/margin
  let negativeSpaceClasses: Dictionary<number | boolean> = {};

  if (typeof padding === 'object') {
    negativeSpaceClasses = {
      ...negativeSpaceClasses,
      ...mapKeys(padding, (value, key) => styles[`padding_${key}_${value}`]),
    };
  } else if (
    (typeof padding === 'number' || typeof padding === 'boolean') &&
    padding
  ) {
    negativeSpaceClasses = {
      ...negativeSpaceClasses,
      ...{
        [styles[`padding_top_${Number(padding)}`]]: true,
        [styles[`padding_bottom_${Number(padding)}`]]: true,
        [styles[`padding_left_${Number(padding)}`]]: true,
        [styles[`padding_right_${Number(padding)}`]]: true,
      },
    };
  }

  if (typeof margin === 'object') {
    negativeSpaceClasses = {
      ...negativeSpaceClasses,
      ...mapKeys(margin, (value, key) => styles[`margin_${key}_${value}`]),
    };
  } else if (
    (typeof margin === 'number' || typeof margin === 'boolean') &&
    margin
  ) {
    negativeSpaceClasses = {
      ...negativeSpaceClasses,
      ...{
        [styles[`margin_top_${Number(margin)}`]]: true,
        [styles[`margin_bottom_${Number(margin)}`]]: true,
        [styles[`margin_left_${Number(margin)}`]]: !isGridElement, // disallow for grid elements
        [styles[`margin_right_${Number(margin)}`]]: !isGridElement, // disallow for grid elements
      },
    };
  }

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
    isGridRow && styles.gridRow,
    isGridCell && styles[`gridCell_${gridCellSpan}`],
    isGridCell && gridCentered && styles.gridCellCentered,
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

export { Box };
