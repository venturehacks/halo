import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'alternate' | 'gray';
  size: 'regular' | 'small' | 'inline';
  /** apply native disabled property */
  disabled: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  /** provide hyperlink by styling <a> like button */
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
}

class Button extends React.PureComponent<ButtonProps> {
  static defaultProps = {
    variant: 'primary',
    size: 'regular',
    disabled: false,
  };

  render(): React.ReactNode {
    const {
      children,
      className,
      href,
      size,
      onClick,
      icon,
      variant,
      ...other
    } = this.props;

    const buttonClassNames = classNames([
      styles.component,
      variant === 'primary' && styles.primary,
      variant === 'secondary' && styles.secondary,
      variant === 'alternate' && styles.alternate,
      variant === 'gray' && styles.gray,
      size === 'regular' && styles.regular,
      size === 'small' && styles.small,
      size === 'inline' && styles.inline,
      icon && styles.icon,
      icon && !children && styles.iconOnly,
      className,
    ]);

    if (href) {
      return (
        <a
          className={buttonClassNames}
          href={href}
          onClick={onClick}
          {...other}
        >
          {icon} {children}
        </a>
      );
    } else {
      return (
        <button className={buttonClassNames} onClick={onClick} {...other}>
          {icon} {children}
        </button>
      );
    }
  }
}

export { Button, ButtonProps };
