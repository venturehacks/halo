import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'alternate';
  size: 'regular' | 'small' | 'inline';
  /** apply native disabled property */
  disabled: boolean;
  children?: React.ReactNode;
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
      variant,
      ...other
    } = this.props;

    const buttonClassNames = classNames([
      styles.component,
      variant === 'primary' && styles.primary,
      variant === 'secondary' && styles.secondary,
      variant === 'alternate' && styles.alternate,
      size === 'regular' && styles.regular,
      size === 'small' && styles.small,
      size === 'inline' && styles.inline,
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
          {children}
        </a>
      );
    } else {
      return (
        <button className={buttonClassNames} onClick={onClick} {...other}>
          {children}
        </button>
      );
    }
  }
}

export { Button, ButtonProps };
