import classNames from 'classnames';
import { mapKeys } from 'lodash';
import * as React from 'react';

import { PaletteColor } from '../../../lib/colors';

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

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Horizontal alignment. top | bottom | left | right | normal | space-between | space-evenly | stretch
   */
  align?: BoxAlign;
  /**
   * Vertical alignment. top | bottom | left | right | normal | space-between | space-evenly | stretch
   */
  valign?: BoxAlign;

  /**
   * Background color or color palette swatch
   */
  background?: PaletteColor | string;
  children?: React.ReactNode;
  className?: string;
  /**
   * Use flexbox column flow
   * @default false
   */
  column?: boolean;
  margin?: number | boolean | NegativeSpace;
  /**
   * Convenience maximum width. Example: "500px"
   */
  maxWidth?: number | string;
  /**
   * Convenience maximum height. Example: "500px"
   */
  maxHeight?: number | string;
  /**
   * Flexbox order
   */
  order?: number;
  padding?: number | boolean | NegativeSpace;
  /**
   * Establishes a new CSS layout context
   */
  relative?: boolean;
  /**
   * Use flexbox row flow
   */
  row?: boolean;

  textAlign?: 'left' | 'center' | 'right';

  /**
   * Convenience to force width to 100%
   */
  width?: '100%';
  /**
   * Enable flexbox wrap
   * @default false
   */
  wrap?: boolean;
}

function Box({
  align,
  background,
  children,
  className,
  column = false,
  margin = 0,
  maxHeight,
  maxWidth,
  onClick,
  order,
  padding = 0,
  relative,
  row = false,
  textAlign,
  valign,
  width,
  wrap = false,
  ...divElementProps
}: BoxProps) {
  // mutually exclusive: block vs flex-column vs. flex-row
  const isBlockElement = !row && !column;
  const isFlexColumn = !isBlockElement && column && !row;
  const isFlexRow = !isBlockElement && row && !column;

  if (row && column) {
    // tslint:disable-next-line: no-console
    console.warn(`[Halo Box] cannot be both column and row`);
  }

  if (isBlockElement && (wrap || align || valign || order)) {
    // tslint:disable-next-line: no-console
    console.warn(
      `[Halo Box] flexbox-specific props were provided, but this box is not a flexbox`,
    );
  }

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
    isFlexColumn && styles.flexColumn,
    isFlexRow && styles.flexRow,
    relative && styles.relative,
    width === '100%' && styles.width100,
    wrap && styles.wrap,
    onClick && styles.clickable,
    isFlexColumn && align && `__halo_column_align_${align}`,
    isFlexColumn && valign && `__halo_column_valign_${valign}`,
    isFlexRow && align && `__halo_row_align_${align}`,
    isFlexRow && valign && `__halo_row_valign_${valign}`,
    negativeSpaceClasses,
    background && `__halo_background_${background}`,
    textAlign && `__halo_textAlign_${textAlign}`,
  );

  return (
    <div
      className={classes}
      onClick={onClick}
      style={inlineStyles}
      {...divElementProps}
    >
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
