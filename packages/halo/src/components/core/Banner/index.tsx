import classNames from 'classnames';
import React from 'react';

import {
  ForwardedRefProps,
  withForwardedRef,
} from '../../../lib/withForwardedRef';

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

function BannerRaw({
  byline,
  children,
  className,
  constrain = true,
  forwardedRef,
  offerDismiss = false,
  onDismiss,
  variant = 'info',
}: BannerProps & ForwardedRefProps<HTMLDivElement>) {
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
    variant === 'info' && 'border-gray-700',
    variant === 'warning' && 'border-orange-300',
    variant === 'error' && 'border-red-600',
    variant === 'success' && 'border-gtmgreen-500',
  );

  return (
    <div ref={forwardedRef} className={classes} data-test="Banner" role="alert">
      <aside className="mr-2 ml-1">
        {variant === 'error' && (
          <CloseIcon className="block w-6 text-red-700" />
        )}
        {variant === 'warning' && (
          <AlertOutlineIcon className="text-dark-warning block w-6" />
        )}
        {variant === 'success' && (
          <CheckIcon className="text-dark-success block w-6" />
        )}

        {/* <InfoIcon className={classNames(variant === 'info' && 'block')} /> */}
      </aside>
      <div className="flex-1">
        {byline ? (
          <div>
            {children}
            <div className="text-dark-aa text-xs font-medium">{byline}</div>
          </div>
        ) : (
          children
        )}
      </div>
      {offerDismiss && (
        <button
          className="text-dark-link cursor-pointer border-0 bg-transparent pl-2 text-sm font-normal"
          data-test="Banner-closeButton"
          onClick={handleDismiss}
        >
          Dismiss
        </button>
      )}
    </div>
  );
}

const Banner = withForwardedRef<BannerProps, HTMLDivElement>(BannerRaw);

export { Banner };
