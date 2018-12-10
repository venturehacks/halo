import classNames from 'classnames'
import * as React from 'react'
import { SFC } from 'react'
import * as styles from './styles.scss'

export interface Props {
  antialiased?: any
  block?: any
  bold?: any
  children?: React.ReactNode
  className?: string
  docz?: any
  error?: any
  italic?: any
  light?: any
  monospace?: any
  muted?: any
  semibold?: any
  semistrong?: any
  size?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  strong?: any
  success?: any
  uppercase?: any
  xmuted?: any
  xxmuted?: any
}

class Span extends React.Component<Props> {
  public render(): React.ReactNode {
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
};

export default Span;
