import classNames from 'classnames';
import * as React from 'react';

import { CloseIcon } from '../../icons';

import styles from './styles.scss';

export type BannerVariant = 'default' | 'warning' | 'error' | 'success';

export interface BannerProps {
  children?: React.ReactNode;
  className?: string;
  /**
   * Constrain maximum width to 20 grid cells wide. This sane default prevents the banner from growing comically wide.
   * @default true
   */
  constrain?: boolean;
  /**
   * Expose a close 'x' button. State is managed internally. Use onDismiss to respond to interaction.
   * @default false
   */
  offerDismiss?: boolean;
  onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: BannerVariant;
}

function Banner({
  children,
  className,
  constrain,
  offerDismiss = false,
  onDismiss,
  variant = 'default',
}: BannerProps) {
  const [isDismissed, setIsDismissed] = React.useState(false);

  const handleDismiss = React.useCallback(
    e => {
      setIsDismissed(true);
      if (onDismiss) {
        onDismiss(e);
      }
    },
    [onDismiss],
  );

  const classes = classNames(
    styles.component,
    className,
    isDismissed && styles.dismissed,
    offerDismiss && styles.offerDismiss,
    constrain && styles.constrain,
    variant === 'default' && styles.passive,
    variant === 'error' && styles.error,
    variant === 'warning' && styles.warning,
    variant === 'success' && styles.success,
  );

  return (
    <div className={classes} role="alert">
      {children}
      {offerDismiss && (
        <button className={styles.closeButton} onClick={handleDismiss}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
}

export { Banner };
