import classNames from 'classnames';
import * as React from 'react';
import { PaletteColor } from '~/lib/colors';
import {
  TextColorScheme,
  TextContrast,
  TextSize,
  TextWeight,
  textContrastForConfiguration,
} from '~/lib/text';

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
   * Convenience for medium weight type
   */
  semibold?: boolean;
  bold?: boolean;
  italic?: boolean;

  /**
   * Convenience for bold text
   */
  strong?: boolean;

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
   * Colors text error red
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
  tag?: 'span' | 'div' | 'p';
}

function Span(props: SpanProps) {
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
    monospace,
    semibold,
    size,
    strong,
    success,
    uppercase,
    warning,
  } = props;

  const textContrast: TextContrast = textContrastForConfiguration(props);
  const hasColorOverride = success || error || warning || color;

  const classes = classNames(
    styles[colorScheme],
    !hasColorOverride && styles[textContrast],
    size && styles[`size--${size}`],
    lineHeight && styles[`lineHeight--${lineHeight}`],
    color && styles[color],
    antialiased && styles.antialiased,
    block && styles.block,
    bold && styles.bold,
    error && styles.error,
    italic && styles.italic,
    monospace && styles.monospace,
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
  };

  return React.createElement(tagName, componentProps, children);
}

export { Span };

function tagNameForConfiguration({ block, tag }: SpanProps) {
  if (tag) return tag;
  if (block) return 'div';

  return 'span';
}
