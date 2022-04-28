import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

import { TextColorScheme, TextContrast, TextSize } from '../../../lib/text';
import { Span } from '../Span';

import styles from './styles.module.scss';

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
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
   * Fine control of type size
   * @default md
   */
  size?: TextSize;
}

function ParagraphRaw({
  flow = true,
  children,
  className,
  forwardedRef,
  size = 'md',
  contrast,
  colorScheme,
  ...paragraphElementProps
}: ParagraphProps & ForwardedRefProps<HTMLHeadingElement>) {
  const classes = classNames(
    styles.component,
    flow ? 'mb-4' : 'm-0',
    className,
  );

  return (
    <Span
      ref={forwardedRef}
      className={classes}
      colorScheme={colorScheme}
      contrast={contrast}
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

const Paragraph = withForwardedRef<ParagraphProps, HTMLHeadingElement>(
  ParagraphRaw,
);

export { Paragraph };
