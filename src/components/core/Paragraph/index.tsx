import classNames from 'classnames';
import * as React from 'react';

import {
  TextColorScheme,
  TextContrast,
  TextLineHeight,
  TextSize,
} from '../../../lib/text';
import { Span } from '../Span';

import * as styles from './styles.scss';

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Apply natural 2em bottom margin for document flow
   * @default true
   */
  flow?: boolean;

  /**
   * Fine control of type size
   * @default md
   */
  size?: TextSize;

  /**
   * Overrides line height associated with type `size` prop
   * @default default
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
  children: React.ReactNode;
  className?: string;
}

function Paragraph({
  flow = true,
  children,
  className,
  size = 'md',
  lineHeight = 'default',
  contrast,
  colorScheme,
}: ParagraphProps) {
  const classes = classNames(styles.component, flow && styles.flow, className);

  return (
    <Span
      tag="p"
      className={classes}
      size={size}
      contrast={contrast}
      colorScheme={colorScheme}
      lineHeight={lineHeight}
    >
      {children}
    </Span>
  );
}

export { Paragraph };
