import classNames from 'classnames';
import * as React from 'react';

import { PaletteColor } from '../../../lib/colors';
import {
  TextColorScheme,
  TextContrast,
  TextLineHeight,
  TextSize,
  TextWeight,
  textContrastForConfiguration,
} from '../../../lib/text';
import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import * as styles from './styles.scss';

export interface SpanProps {
  /**
   * Type size override
   * @default (pass through)
   */
  size?: TextSize;

  /**
   * Fine control over line height
   * @default (pass through)
   */
  lineHeight?: TextLineHeight;

  /**
   * Fine control of type contrast
   * @default AAAA
   */
  contrast?: TextContrast;

  /**
   * Dark or light text
   * @default dark
   */
  colorScheme?: TextColorScheme;

  /**
   * Fine control of type weight
   */
  weight?: TextWeight;

  /**
   * Explicit text color override
   */
  color?: PaletteColor;

  /**
   * Renders as a block-level element
   */
  block?: boolean;

  /**
   * Convenience for 500 weight
   */
  medium?: boolean;

  /**
   * Convenience for 600 weight
   */
  semibold?: boolean;

  /**
   * Convenience for 700 weight, same as strong
   */
  bold?: boolean;

  /**
   * Convenience for 700 weight, same as bold
   */
  strong?: boolean;

  italic?: boolean;

  children?: React.ReactNode;
  className?: string;

  /**
   * Green successful text
   */
  success?: boolean;

  /**
   * Orange warning text
   */
  warning?: boolean;

  /**
   * Red error text
   */
  error?: boolean;

  /**
   * Convenience for contrast AAA typography
   */
  muted?: boolean;

  /**
   * Convenience for contrast AA typography
   */
  xmuted?: boolean;

  /**
   * Convenience for contrast A typography
   */
  xxmuted?: boolean;

  /**
   * Tranform text to all capitals
   */
  uppercase?: boolean;
  monospace?: boolean;

  /**
   * Sharpens text. Ideal for light text on dark backgrounds
   */
  antialiased?: boolean;

  /**
   * HTML tag override
   * @default span
   */
  tag?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

function SpanRaw(props: SpanProps & ForwardedRefProps) {
  const {
    antialiased,
    block,
    bold,
    children,
    className,
    color,
    colorScheme = 'dark',
    lineHeight,
    error,
    italic,
    medium,
    monospace,
    semibold,
    size,
    strong,
    success,
    uppercase,
    warning,
    weight,
    forwardedRef,
  } = props;

  const textContrast: TextContrast = textContrastForConfiguration(props);
  const hasColorOverride = success || error || warning || color;

  const classes = classNames(
    !hasColorOverride && `__halo_textContrast_${colorScheme}_${textContrast}`,
    size && `__halo_fontSizeMap_size--${size}`,
    lineHeight && `__halo_lineHeight_${lineHeight}`,
    weight && `__halo_fontWeight_${weight}`,
    color && `__halo_color_${color}`,
    (antialiased || colorScheme === 'light') && styles.antialiased,
    block && styles.block,
    bold && styles.bold,
    error && styles.error,
    italic && styles.italic,
    monospace && styles.monospace,
    medium && styles.medium,
    semibold && styles.semibold,
    strong && styles.bold,
    success && styles.success,
    uppercase && styles.uppercase,
    warning && styles.warning,
    className,
  );

  const tagName = tagNameForConfiguration(props);

  const componentProps = {
    className: classes,
    ref: forwardedRef,
  };

  return React.createElement(tagName, componentProps, children);
}

const Span = withForwardedRef<SpanProps>(SpanRaw);

export { Span };

function tagNameForConfiguration({ block, tag }: SpanProps) {
  if (tag) return tag;
  if (block) return 'div';

  return 'span';
}
