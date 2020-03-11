import classNames from 'classnames';
import React from 'react';

import {
  TextColorScheme,
  TextContrast,
  TextLineHeight,
  TextSize,
} from '../../../lib/text';
import { Span } from '../Span';

import styles from './styles.scss';

type HTMLParagraphElementProps = Omit<
  React.HTMLAttributes<HTMLParagraphElement>,
  'color'
>;

export interface ParagraphProps extends HTMLParagraphElementProps {
  children: React.ReactNode;
  className?: string;
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
   * Apply natural 2em bottom margin for document flow
   * @default true
   */
  flow?: boolean;

  /**
   * Overrides line height associated with type `size` prop
   * @default default
   */
  lineHeight?: TextLineHeight;

  /**
   * Fine control of type size
   * @default md
   */
  size?: TextSize;
}

function Paragraph({
  flow = true,
  children,
  className,
  size = 'md',
  lineHeight = 'default',
  contrast,
  colorScheme,
  ...paragraphElementProps
}: ParagraphProps) {
  const classes = classNames(styles.component, flow && styles.flow, className);

  return (
    <Span
      className={classes}
      colorScheme={colorScheme}
      contrast={contrast}
      lineHeight={lineHeight}
      size={size}
      tag="p"
      {...paragraphElementProps}
    >
      {children}
    </Span>
  );
}

export { Paragraph };
