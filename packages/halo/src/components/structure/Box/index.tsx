// TODO(drew): fix a11y violations
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
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

const FLEX_ALIGNMENT_MAP: Record<
  'row' | 'column',
  Record<'align' | 'valign', Dictionary<string>>
> = {
  column: {
    align: {
      left: 'items-start',
      right: 'items-end',
      center: 'items-center',
      stretch: 'items-stretch',
    },
    valign: {
      'top': 'justify-start',
      'bottom': 'justify-end',
      'center': 'justify-center',
      'space-between': 'justify-between',
      'space-evenly': 'justify-evenly',
      'space-around': 'justify-around',
    },
  },
  row: {
    valign: {
      top: 'items-start',
      bottom: 'items-end',
      center: 'items-center',
      stretch: 'items-stretch',
    },
    align: {
      'left': 'justify-start',
      'right': 'justify-end',
      'center': 'justify-center',
      'space-between': 'justify-between',
      'space-evenly': 'justify-evenly',
      'space-around': 'justify-around',
    },
  },
};

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
    console.warn(`[Halo Box] cannot be both column and row`);
  }

  if (isBlockElement && (wrap || align || valign || order)) {
    console.warn(
      `[Halo Box] flexbox-specific props were provided, but this box is not a flexbox`,
    );
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

  if (textAlign) {
    inlineStyles.textAlign = textAlign;
  }

  const classes = classNames(
    className,
    isFlexColumn && 'flex flex-col',
    isFlexColumn && align && FLEX_ALIGNMENT_MAP.column.align[align],
    isFlexColumn && valign && FLEX_ALIGNMENT_MAP.column.valign[valign],
    isFlexRow && 'flex flex-row',
    isFlexRow && align && FLEX_ALIGNMENT_MAP.row.align[align],
    isFlexRow && valign && FLEX_ALIGNMENT_MAP.row.valign[valign],
    relative && 'relative',
    width === '100%' && 'w-full',
    wrap && 'flex-wrap',
    onClick && 'cursor-pointer',
    augmentNegativeSpaceClasses(padding, 'padding'),
    augmentNegativeSpaceClasses(margin, 'margin'),
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

function augmentNegativeSpaceClasses(
  space: NegativeSpace | number | boolean,
  metric: 'padding' | 'margin',
) {
  if (space && (typeof space === 'number' || typeof space === 'boolean')) {
    return `${metric[0]}-${Number(space) * 2}`; // Halo magnitude is 2x Tailwind
  }

  if (typeof space === 'object') {
    return Object.keys(space)
      .map((direction) => `${metric[0]}${direction[0]}-${space[direction] * 2}`) // Halo magnitude is 2x Tailwind
      .join(' ');
  }

  return ``;
}

const Box = withForwardedRef<BoxProps, HTMLDivElement>(BoxRaw);

export { Box };
