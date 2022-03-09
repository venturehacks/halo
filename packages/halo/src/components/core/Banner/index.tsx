import classNames from 'classnames';
import React from 'react';

import { AlertOutlineIcon, CheckIcon, CloseIcon } from '../../icons';

export type BannerVariant = 'info' | 'warning' | 'success' | 'error';

export const bannerClassNameBase =
  'text-md font-medium rounded relative p-4 mb-2 border-solid border-0 border-t-4 w-full bg-blue-100 shadow-sm flex flex-row justify-start items-center overflow-hidden';

export interface BannerProps {
  byline?: string;
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
  byline,
  children,
  className,
  constrain = true,
  offerDismiss = false,
  onDismiss,
  variant = 'info',
}: BannerProps) {
  const [isDismissed, setIsDismissed] = React.useState(false);

  const handleDismiss = React.useCallback(
    (e) => {
      setIsDismissed(true);
      if (onDismiss) {
        onDismiss(e);
      }
    },
    [onDismiss],
  );

  const classes = classNames(
    bannerClassNameBase,
    className,
    constrain && 'max-w-screen-desktop',
    isDismissed && 'max-h-0 opacity-0 m-0 p-0 pointer-events-none dismissed',
    variant === 'info' && 'border-slate-700',
    variant === 'warning' && 'border-orange-300',
    variant === 'error' && 'border-red-600',
    variant === 'success' && 'border-green-500',
  );

  return (
    <div className={classes} data-test="Banner" role="alert">
      <aside className="mr-2 ml-1">
        {variant === 'error' && (
          <CloseIcon className="block text-red-700 w-6" />
        )}
        {variant === 'warning' && (
          <AlertOutlineIcon className="block text-dark-warning w-6" />
        )}
        {variant === 'success' && (
          <CheckIcon className="block text-dark-success w-6" />
        )}

        {/* <InfoIcon className={classNames(variant === 'info' && 'block')} /> */}
      </aside>
      <div className="flex-1">
        {byline ? (
          <div>
            {children}
            <div className="font-medium text-xs text-dark-aa">{byline}</div>
          </div>
        ) : (
          children
        )}
      </div>
      {offerDismiss && (
        <button
          className="text-sm pl-2 bg-transparent border-0 cursor-pointer text-dark-link font-normal"
          data-test="Banner-closeButton"
          onClick={handleDismiss}
        >
          Dismiss
        </button>
      )}
    </div>
  );
}

export { Banner };
