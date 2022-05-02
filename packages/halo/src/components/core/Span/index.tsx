import classNames from 'classnames';
import React from 'react';

import { Color } from '../../../lib/colors';
import {
  TextColorScheme,
  TextContrast,
  TextSize,
  TextWeight,
  textContrastForConfiguration,
} from '../../../lib/text';
import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

export interface SpanProps {
  /**
   * Sharpens text. Ideal for light text on dark backgrounds
   */
  antialiased?: boolean;

  /**
   * Renders as a block-level element
   */
  block?: boolean;

  /**
   * Convenience for 700 weight, same as strong
   */
  bold?: boolean;

  children?: React.ReactNode;
  className?: string;
  /**
   * Explicit text color override
   */
  color?: Color;
  /**
   * Dark or light text
   * @default dark
   */
  colorScheme?: TextColorScheme;
  /**
   * Fine control of type contrast
   * @default AAAA
   */
  contrast?: TextContrast;
  /**
   * Red error text
   */
  error?: boolean;

  italic?: boolean;

  /**
   * Convenience for 500 weight
   */
  medium?: boolean;

  monospace?: boolean;

  /**
   * Convenience for contrast AAA typography
   */
  muted?: boolean;

  /**
   * Convenience for 400 weight
   */
  regular?: boolean;

  /**
   * Convenience for 600 weight
   */
  semibold?: boolean;
  /**
   * Type size override
   * @default (pass through)
   */
  size?: TextSize;

  /**
   * Convenience for 700 weight, same as bold
   */
  strong?: boolean;

  /**
   * Green successful text
   */
  success?: boolean;

  /**
   * HTML tag override
   * @default span
   */
  tag?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Tranform text to all capitals
   */
  uppercase?: boolean;
  /**
   * Orange warning text
   */
  warning?: boolean;

  /**
   * Fine control of type weight
   */
  weight?: TextWeight;

  /**
   * Convenience for contrast AA typography
   */
  xmuted?: boolean;

  /**
   * Convenience for contrast A typography
   */
  xxmuted?: boolean;
}

function SpanRaw(
  props: SpanProps & ForwardedRefProps & React.HTMLAttributes<HTMLSpanElement>,
) {
  const {
    antialiased,
    block,
    bold,
    children,
    colorScheme,
    className,
    color,
    contrast,
    error,
    forwardedRef,
    italic,
    medium,
    monospace,
    muted,
    regular,
    semibold,
    size,
    strong,
    success,
    tag,
    uppercase,
    warning,
    weight,
    xmuted,
    xxmuted,
    ...spanElementProps
  } = props;

  const colorFromContrastSettings = textContrastForConfiguration(props);
  const hasColorOverride = success || error || warning || color;
  const applyColorDerivedByContrast =
    !hasColorOverride && (contrast || muted || xmuted || xxmuted);

  // [warning] mutually exclusive color
  if (contrast && hasColorOverride) {
    console.warn(
      `[Halo] conflicting props provided. 'contrast' cannot coexist with: success error warning color muted xmuted xxmuted`,
    );
  }

  const classes = classNames(
    className,
    applyColorDerivedByContrast && colorFromContrastSettings,
    // TODO(drew): force inclusion of these rules so we can remove
    // these conditional expressions (save kb)
    size === '2xs' && 'text-2xs',
    size === 'xs' && 'text-xs',
    size === 'sm' && 'text-sm',
    size === 'md' && 'text-md',
    size === 'lg' && 'text-lg',
    size === 'xl' && 'text-xl',
    size === '2xl' && 'text-2xl',
    size === '3xl' && 'text-3xl',
    size === '4xl' && 'text-4xl',
    size === '5xl' && 'text-5xl',
    weight === 'light' && 'font-light',
    weight === 'regular' && 'font-normal',
    weight === 'medium' && 'font-medium',
    weight === 'semibold' && 'font-semibold',
    weight === 'bold' && 'font-bold',
    color && `text-${color}`,
    antialiased && 'antialiased',
    block && 'block',
    bold && 'font-bold',
    italic && 'italic',
    monospace && 'font-mono',
    regular && 'font-normal',
    medium && 'font-medium',
    semibold && 'font-semibold',
    strong && 'font-bold',
    uppercase && 'uppercase',
    error && 'text-dark-error',
    success && 'text-dark-success',
    warning && 'text-dark-warning',
  );

  const tagName = tagNameForConfiguration(props);

  const componentProps = {
    className: classes,
    ref: forwardedRef,

    ...spanElementProps,
  };

  return React.createElement(tagName, componentProps, children);
}

const Span = withForwardedRef<SpanProps>(SpanRaw);

export { Span };

// helpers

function tagNameForConfiguration({ block, tag }: SpanProps) {
  if (tag) return tag;
  if (block) return 'div';

  return 'span';
}
