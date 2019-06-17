import classNames from 'classnames';
import * as React from 'react';

import { PaletteColor } from '../../../lib/colors';
import {
  TextColorScheme,
  TextContrast,
  TextSize,
  TextWeight,
} from '../../../lib/text';
import { Span } from '../Span';

import * as styles from './styles.scss';

export interface HeaderProps {
  className?: string;

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
   * include page flow margins
   * @default true
   */
  flow?: boolean;

  /**
   * Explicit override over type size
   */
  size?: TextSize;

  /**
   * Fine control of type contrast
   */
  contrast?: TextContrast;

  /**
   * Fine control of type weight
   */
  weight?: TextWeight;

  /**
   * Fine control of type contrast
   */
  colorScheme?: TextColorScheme;

  /**
   * Explicitly set text to a palette color
   */
  color?: PaletteColor;

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
   * Capitalize all letters
   */
  uppercase?: boolean;

  /**
   * HTML tag override
   * @default h3
   */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  children: React.ReactNode;
}

function Header(props: HeaderProps) {
  const {
    children,
    className,
    color,
    colorScheme = 'dark',
    contrast,
    flow = true,
    muted,
    size,
    uppercase = false,
    weight,
    xmuted,
    xxmuted,
  } = props;

  const textSize: TextSize = size || textSizeForConfiguration(props);
  const textWeight: TextWeight = weight || textWeightForConfiguration(props);
  const tagName = tagNameForConfiguration(props);

  const classes = classNames(styles.component, flow && styles.flow, className);

  const componentProps = {
    className: classes,
  };

  const formattedContent = (
    <Span
      color={color}
      colorScheme={colorScheme}
      size={textSize}
      contrast={contrast}
      muted={muted}
      xmuted={xmuted}
      xxmuted={xxmuted}
      weight={textWeight}
      uppercase={uppercase || props.h6}
    >
      {children}
    </Span>
  );

  return React.createElement(tagName, componentProps, formattedContent);
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

function textWeightForConfiguration({ h6 }: HeaderProps): TextWeight {
  if (h6) return 'bold';

  return 'medium';
}

export { Header };
