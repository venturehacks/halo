import classNames from 'classnames';
import React from 'react';

import { CloseIcon } from '../../icons';

import styles from './styles.module.scss';

export type BannerVariant = 'notice' | 'success' | 'error' | 'fatal' | 'info';

export const bannerClassNameBase =
  'text-md font-medium rounded relative p-4 mb-2 border-solid border-slate-700 border-0 border-t-4 w-full bg-blue-100 shadow-sm flex flex-row justify-start overflow-hidden';

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
  offerDismiss = false,
  onDismiss,
  variant = 'notice',
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
    bannerClassNameBase,
    className,
    isDismissed && 'max-h-0 opacity-0 m-0 p-0 pointer-events-none',
    // offerDismiss && 'pr-10',
    // constrain && styles.constrain,
    variant === 'notice' && 'border-orange-300',
    variant === 'error' && 'border-red-600',
    variant === 'success' && 'border-green-500',
  );

  return (
    <div className={classes} data-test="Banner" role="alert">
      {/* <aside className="mr-4 mt-1">
        <CloseIcon className={classNames(variant === 'error' && 'block')}/>
        <WarningTriangleIcon
          className={classNames(variant === 'notice' && 'block')}
        />
        <CheckmarkIcon className={classNames(variant === 'success' && 'block')} />
        <InfoIcon className={classNames(variant === 'info' && 'block')} />
      </aside> */}
      <div className="flex-1">{children}</div>
      {offerDismiss && (
        <button
          className="text-sm pl-2"
          data-test="Banner-closeButton"
          onClick={handleDismiss}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
}

export { Banner };
