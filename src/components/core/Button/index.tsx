import classNames from 'classnames';
import * as React from 'react';
import { ForwardedRefProps, withForwardedRef } from '~/lib/withForwardedRef';

import * as styles from './styles.scss';

export interface ButtonProps extends ForwardedRefProps {
  size?: 'large' | 'regular' | 'small' | 'xsmall' | 'inline';
  variant?: 'primary' | 'secondary' | 'gray' | 'secondary-gray' | 'alternate';
  /** apply native disabled property */
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  /** provide hyperlink by styling <a> anchor link like a button */
  href?: string;
  type?: 'submit' | 'button' | 'clear' | 'reset';
  onClick?: EventFunctionT;
}

class ButtonRaw extends React.PureComponent<
  ButtonProps & React.PropsWithoutRef<JSX.IntrinsicElements['button']>
> {
  static defaultProps = {
    variant: 'primary',
    size: 'regular',
    disabled: false,
    type: 'button',
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
      forwardedRef,
      ...other
    } = this.props;

    const buttonClassNames = classNames([
      styles.component,
      variant === 'primary' && styles.primary,
      variant === 'secondary' && styles.secondary,
      variant === 'alternate' && styles.alternate,
      variant === 'gray' && styles.gray,
      variant === 'secondary-gray' && styles.secondaryGray,
      size === 'large' && styles.large,
      size === 'regular' && styles.regular,
      size === 'small' && styles.small,
      size === 'xsmall' && styles.xsmall,
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
          ref={forwardedRef}
        >
          {icon} {children}
        </a>
      );
    }

    return (
      <button
        className={buttonClassNames}
        onClick={onClick}
        ref={forwardedRef}
        {...other}
      >
        {icon} {children}
      </button>
    );
  }
}

const Button = withForwardedRef(ButtonRaw);

export { Button };
