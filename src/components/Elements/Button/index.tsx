import classNames from 'classnames'
import * as React from 'react'
import { SFC } from 'react'
import * as styles from './styles.scss'

export interface Props {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  href?: string
  onClick?:
    React.MouseEvent<HTMLButtonElement> |
    React.MouseEvent<HTMLAnchorElement>
  primary?: any
  secondary?: any
  size?: 'regular'|'small'|'inline'
}

class Button extends React.Component<Props &
    React.AnchorHTMLAttributes<HTMLAnchorElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>> {
  public render(): React.ReactNode {
    const {
      children,
      className,
      href,
      primary,
      secondary,
      size,
      ...other
    } = this.props;

    const buttonClassNames = classNames([
      styles.component,
      !secondary && styles.primary,
      secondary && styles.secondary,
      size === 'regular' && styles.regular,
      size === 'small' && styles.small,
      size === 'inline' && styles.inline,
      className,
    ]);

    if (href) {
      return (
        <a href={href} className={buttonClassNames} {...other}>
          {children}
        </a>
      );
    } else {
      return (
        <button className={buttonClassNames} {...other}>
          {children}
        </button>
      );
    }
  }
};

Button.defaultProps = {
  size: 'regular'
};

export default Button;
