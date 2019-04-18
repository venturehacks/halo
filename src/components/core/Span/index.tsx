import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export interface SpanProps {
  antialiased?: boolean;
  block?: boolean;
  bold?: boolean;
  children?: React.ReactNode;
  className?: string;
  docz?: boolean;
  error?: boolean;
  italic?: boolean;
  light?: boolean;
  monospace?: boolean;
  muted?: boolean;
  semibold?: boolean;
  semistrong?: boolean;
  size?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge';
  strong?: boolean;
  success?: boolean;
  uppercase?: boolean;
  xmuted?: boolean;
  xxmuted?: boolean;
}

class Span extends React.Component<SpanProps> {
  render(): React.ReactNode {
    const {
      antialiased,
      block,
      bold,
      children,
      className,
      docz,
      error,
      italic,
      light,
      monospace,
      muted,
      semibold,
      semistrong,
      size,
      strong,
      success,
      uppercase,
      xmuted,
      xxmuted,
      ...other
    } = this.props;

    const spanClassName = classNames([
      size === 'small' && styles.small,
      size === 'xsmall' && styles.xsmall,
      size === 'xxsmall' && styles.xxsmall,
      size === 'medium' && styles.medium,
      size === 'large' && styles.large,
      size === 'xlarge' && styles.xlarge,
      size === 'xxlarge' && styles.xxlarge,
      antialiased && styles.antialiased,
      docz && styles.docz,
      block && styles.block,
      italic && styles.italic,
      muted && styles.muted,
      xmuted && styles.xmuted,
      xxmuted && styles.xxmuted,
      light && styles.light,
      bold && styles.bold,
      strong && styles.bold,
      semibold && styles.semibold,
      semistrong && styles.semibold,
      uppercase && styles.uppercase,
      monospace && styles.monospace,
      error && styles.error,
      success && styles.success,
      className,
    ]);

    return (
      <span className={spanClassName} {...other}>
        {children}
      </span>
    );
  }
}

export { Span };
