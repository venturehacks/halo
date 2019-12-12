import classNames from 'classnames';
import * as React from 'react';

import * as styles from './styles.scss';

export type BannerVariant = 'default' | 'warning' | 'error' | 'success';

export interface BannerProps {
  children?: React.ReactNode;
  className?: string;
  offerDismiss?: boolean;
  onDismiss?: EventFunctionT;
  variant?: BannerVariant;
}

function Banner({
  children,
  className,
  offerDismiss = true,
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
    variant === 'default' && styles.passive,
    variant === 'error' && styles.error,
    variant === 'warning' && styles.warning,
    variant === 'success' && styles.success,
  );

  return (
    <div className={classes}>
      {children}
      {offerDismiss && <button onClick={handleDismiss}>(X)</button>}
      {/* <CloseIcon
      className={styles.closeIcon}
      onClick={onDismiss}
    /> */}
    </div>
  );
}

export { Banner };
