import classNames from 'classnames';
import React from 'react';

import { Color } from '../../../lib/colors';
import {
  TextColorScheme,
  TextContrast,
  TextSize,
  TextWeight,
} from '../../../lib/text';
import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';
import { Span } from '../Span';

import styles from './styles.scss';

export interface HeaderProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Explicitly set text to a palette color
   */
  color?: Color;
  /**
   * Fine control of type contrast
   */
  colorScheme?: TextColorScheme;

  /**
   * Fine control of type contrast
   */
  contrast?: TextContrast;

  /**
   * include page flow margins
   * @default true
   */
  flow?: boolean;
  /**
   * <h1> preset, 3xl text
   */
  h1?: boolean;

  /**
   * <h2> preset, 2xl text
   */
  h2?: boolean;

  /**
   * <h3> preset, xl text
   */
  h3?: boolean;

  /**
   * <h4> preset, lg text
   */
  h4?: boolean;

  /**
   * <h5> preset, sm text
   */
  h5?: boolean;

  /**
   * <h6> preset, xs text, all caps
   */
  h6?: boolean;

  /**
   * Display as inline block; useful when attaching tooltips
   * @default false
   */
  inlineBlock?: boolean;

  /**
   * Convenience for contrast AAA typography
   */
  muted?: boolean;

  /**
   * Explicit override over type size
   */
  size?: TextSize;

  /**
   * HTML tag override
   * @default h3
   */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Capitalize all letters
   */
  uppercase?: boolean;

  /**
   * Fine control of type weight
   */
  weight?: TextWeight;

  /**
   * Convenience alias contrast AA typography
   */
  xmuted?: boolean;

  /**
   * Convenience alias contrast A typography
   */
  xxmuted?: boolean;
}

function HeaderRaw(
  props: HeaderProps &
    ForwardedRefProps &
    React.HTMLAttributes<HTMLHeadingElement>,
) {
  const {
    children,
    className,
    color,
    colorScheme = 'dark',
    contrast,
    flow = true,
    forwardedRef,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    inlineBlock,
    muted,
    size,
    tag,
    uppercase = false,
    weight = 'medium',
    xmuted,
    xxmuted,
    ...headerElementProps
  } = props;

  const textSize: TextSize = size || textSizeForConfiguration(props);
  const tagName = tagNameForConfiguration(props);

  const classes = classNames(
    styles.component,
    flow && styles.flow,
    inlineBlock && styles.inlineBlock,
    className,
  );

  return (
    <Span
      ref={forwardedRef}
      className={classes}
      color={color}
      colorScheme={colorScheme}
      contrast={contrast}
      muted={muted}
      size={textSize}
      tag={tagName}
      uppercase={uppercase || props.h6}
      weight={weight}
      xmuted={xmuted}
      xxmuted={xxmuted}
      {...headerElementProps}
    >
      {children}
    </Span>
  );
}

function textSizeForConfiguration({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}: HeaderProps): TextSize {
  if (h1) return '4xl';
  if (h2) return '2xl';
  if (h3) return 'xl';
  if (h4) return 'lg';
  if (h5) return 'sm';
  if (h6) return 'xs';

  return 'xl'; // h3 is default
}

function tagNameForConfiguration({ h1, h2, h3, h4, h5, h6, tag }: HeaderProps) {
  if (tag) return tag;
  if (h1) return 'h1';
  if (h2) return 'h2';
  if (h3) return 'h3';
  if (h4) return 'h4';
  if (h5) return 'h5';
  if (h6) return 'h6';

  return 'h3';
}

const Header = withForwardedRef<HeaderProps>(HeaderRaw);

export { Header };
