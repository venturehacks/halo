import classNames from 'classnames';
import React from 'react';

import {
  TextColorScheme,
  TextContrast,
  TextLineHeight,
  TextSize,
} from '../../../lib/text';
import { Span } from '../Span';

import styles from './styles.module.scss';

export interface ParagraphProps {
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

function ParagraphRaw({
  flow = true,
  children,
  className,
  size = 'md',
  lineHeight = 'default',
  contrast,
  colorScheme,
  ...paragraphElementProps
}: ParagraphProps & React.HTMLAttributes<HTMLParagraphElement>) {
  const classes = classNames(styles.component, flow && styles.flow, className);

  return (
    <Span
      className={classes}
      colorScheme={colorScheme}
      contrast={contrast}
      lineHeight={lineHeight}
      size={size}
      tag="p"
      {...(paragraphElementProps as Omit<
        React.HTMLAttributes<HTMLParagraphElement>,
        'color'
      >)}
    >
      {children}
    </Span>
  );
}

// NOTE(drew): I don't know why react-docgen is so finicky.
// Sometimes the prop table is correct, other times it is not.
export { ParagraphRaw as Paragraph };
