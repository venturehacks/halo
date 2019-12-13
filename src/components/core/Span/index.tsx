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

export interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
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
  color?: PaletteColor;
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
   * Fine control over line height
   * @default (pass through)
   */
  lineHeight?: TextLineHeight;

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

function SpanRaw(props: SpanProps & ForwardedRefProps) {
  const {
    antialiased,
    block,
    bold,
    children,
    className,
    color,
    colorScheme = 'dark',
    contrast,
    error,
    forwardedRef,
    italic,
    lineHeight,
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

  const textContrast: TextContrast = textContrastForConfiguration(props);
  const hasColorOverride = success || error || warning || color;
  const applyColorDerivedByContrast = contrast && !hasColorOverride;

  // [warning] mutually exclusive color
  if (contrast && hasColorOverride) {
    // tslint:disable-next-line: no-console
    console.warn(
      `[Halo] conflicting props provided: 'contrast' cannot coexist with: 'success' 'error' 'warning' 'color'`,
    );
  }

  const classes = classNames(
    applyColorDerivedByContrast &&
      `__halo_textContrast_${colorScheme}_${textContrast}`,
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
    regular && styles.regular,
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

    ...spanElementProps,
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
