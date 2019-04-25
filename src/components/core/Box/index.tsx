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
  valign,
  wrap,
}: BoxProps) {
  // only allow column OR row
  const isColumn = column && !row;

  // negative space classes
  let negativeSpace: Dictionary<number | boolean> = {};

  if (typeof padding === 'object') {
    negativeSpace = {
      ...negativeSpace,
      ...mapKeys(padding, (value, key) => styles[`padding_${key}_${value}`]),
    };
  } else if (typeof padding === 'number' && padding > 0) {
    negativeSpace = {
      ...negativeSpace,
      ...{
        [styles[`padding_top_${padding}`]]: true,
        [styles[`padding_bottom_${padding}`]]: true,
        [styles[`padding_left_${padding}`]]: true,
        [styles[`padding_right_${padding}`]]: true,
      },
    };
  }

  if (typeof margin === 'object') {
    negativeSpace = {
      ...negativeSpace,
      ...mapKeys(margin, (value, key) => styles[`margin_${key}_${value}`]),
    };
  } else if (typeof margin === 'number' && margin > 0) {
    negativeSpace = {
      ...negativeSpace,
      ...{
        [styles[`margin_top_${margin}`]]: true,
        [styles[`margin_bottom_${margin}`]]: true,
        [styles[`margin_left_${margin}`]]: true,
        [styles[`margin_right_${margin}`]]: true,
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

  const classes = classNames(
    styles.component,
    className,
    isColumn && styles.column,
    !isColumn && styles.row,
    relative && styles.relative,
    wrap && styles.wrap,
    align && styles[`align_${align}`],
    valign && styles[`valign_${valign}`],
    negativeSpace,
  );

  return (
    <div className={classes} style={inlineStyles}>
      {children}
    </div>
  );
}

export { Box };
