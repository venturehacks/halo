import classNames from 'classnames';
import { mapKeys } from 'lodash';
import React from 'react';

import { Color } from '../../../lib/colors';
import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

export type BoxAlign =
  | 'top'
  | 'center'
  | 'bottom'
  | 'left'
  | 'right'
  | 'normal'
  | 'space-between'
  | 'space-evenly'
  | 'space-around'
  | 'stretch';

export interface NegativeSpace {
  bottom?: number | boolean;
  left?: number | boolean;
  right?: number | boolean;
  top?: number | boolean;
}

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Horizontal alignment. top | bottom | left | right | normal | space-between | space-evenly | stretch
   */
  align?: BoxAlign;
  /**
   * Background color or color palette swatch
   */
  background?: Color | string;

  children?: React.ReactNode;
  className?: string;
  /**
   * Use flexbox column flow
   * @default false
   */
  column?: boolean;
  margin?: number | boolean | NegativeSpace;
  /**
   * Convenience maximum height. Example: "500px"
   */
  maxHeight?: number | string;
  /**
   * Convenience maximum width. Example: "500px"
   */
  maxWidth?: number | string;

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
   * Vertical alignment. top | bottom | left | right | normal | space-between | space-evenly | stretch
   */
  valign?: BoxAlign;
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

function BoxRaw({
  align,
  background,
  children,
  className,
  column = false,
  forwardedRef,
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
}: BoxProps & ForwardedRefProps<HTMLDivElement>) {
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
    // TODO: filter Colors
    inlineStyles.background = background;
  }

  const classes = classNames(
    className,
    flexAlignmentClassNames(align, valign, isFlexColumn, isFlexRow),
    relative && 'relative',
    width === '100%' && 'w-full',
    wrap && 'flex-wrap',
    onClick && 'cursor-pointer',
    negativeSpaceClasses,
    background && `bg-${background.replace('--', '-')}`,
    textAlign && `text-${textAlign}`,
  );

  return (
    <div
      ref={forwardedRef}
      className={classes}
      onClick={onClick}
      style={inlineStyles}
      {...divElementProps}
    >
      {children}
    </div>
  );
}

// NOTE(drew): Function is ugly af. Will replace.
function flexAlignmentClassNames(
  align?: BoxAlign,
  valign?: BoxAlign,
  column?: boolean,
  row?: boolean,
) {
  const classes = [];
  if (column) {
    classes.push('flex', 'flex-col');
    switch (
      align // cross-axis (items)
    ) {
      case 'left':
        classes.push('items-start');
        break;
      case 'right':
        classes.push('items-end');
        break;
      case 'center':
        classes.push('items-center');
        break;
      case 'stretch':
        classes.push('items-stretch');
        break;
    }
    switch (
      valign // main axis (justify)
    ) {
      case 'top':
        classes.push('justify-start');
        break;
      case 'bottom':
        classes.push('justify-end');
        break;
      case 'center':
        classes.push('justify-center');
        break;
      case 'space-between':
        classes.push('justify-between');
        break;
      case 'space-evenly':
        classes.push('justify-evenly');
        break;
      case 'space-around':
        classes.push('justify-around');
        break;
    }
  } else if (row) {
    classes.push('flex', 'flex-row');
    switch (
      valign // cross-axis (items)
    ) {
      case 'top':
        classes.push('items-start');
        break;
      case 'bottom':
        classes.push('items-end');
        break;
      case 'center':
        classes.push('items-center');
        break;
      case 'stretch':
        classes.push('items-stretch');
        break;
    }
    switch (
      align // main axis (justify)
    ) {
      case 'left':
        classes.push('justify-start');
        break;
      case 'right':
        classes.push('justify-end');
        break;
      case 'center':
        classes.push('justify-center');
        break;
      case 'space-between':
        classes.push('justify-between');
        break;
      case 'space-evenly':
        classes.push('justify-evenly');
        break;
      case 'space-around':
        classes.push('justify-around');
        break;
    }
  }

  return classes.join(' ');
}

function augmentNegativeSpaceClasses(
  classes: Dictionary<number | boolean>,
  space: NegativeSpace | number | boolean,
  metric: 'padding' | 'margin',
) {
  if (typeof space === 'object') {
    return {
      ...classes,
      ...mapKeys(
        space,
        (magnitude, direction) => `${metric[0]}${direction[0]}-${magnitude}`,
      ),
    };
  } else if (
    (typeof space === 'number' || typeof space === 'boolean') &&
    space
  ) {
    return {
      ...classes,
      ...{
        [`${metric[0]}-${space}`]: true,
      },
    };
  }

  return classes;
}

const Box = withForwardedRef<BoxProps, HTMLDivElement>(BoxRaw);

export { Box };
