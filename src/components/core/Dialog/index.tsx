import classNames from 'classnames';
import * as React from 'react';

import {
  Button as HaloButton,
  ButtonProps as HaloButtonProps,
} from '../Button';
import { Header } from '../Header';

import styles from './styles.scss';

export type DialogContext = 'inline' | 'modal';

interface DialogProps {
  /**
   * Optionally overrride with a button component that supports Halo's Button prop API.
   * @default HaloButton
   */
  buttonComponent?: React.ComponentType<HaloButtonProps>;
  children: React.ReactNode;
  className?: string;
  contentPadding?: boolean;
  /**
   * If modal context, include drop shadow
   * @default inline
   */
  context?: DialogContext;
  onPrimaryButtonClick?: EventFunctionT;
  onSecondaryButtonClick?: EventFunctionT;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  title?: string | React.ReactNode;
}

function Dialog({
  buttonComponent,
  children,
  className,
  contentPadding = true,
  context = 'modal',
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  primaryButtonLabel,
  secondaryButtonLabel,
  title,
}: DialogProps) {
  const classes = classNames(
    styles.component,
    context === 'modal' && styles.contextModal,
    contentPadding && styles.paddingDefault,
    className,
  );

  const Button = buttonComponent || HaloButton;
  const hasChin = primaryButtonLabel || secondaryButtonLabel;
  const isTitleJSX = typeof title !== 'string';

  return (
    <div className={classes}>
      {title && (
        <div className={styles.title}>
          {isTitleJSX ? (
            title
          ) : (
            <Header flow={false} h4>
              {title}
            </Header>
          )}
        </div>
      )}
      <div className={styles.content}>{children}</div>
      {hasChin && (
        <div className={styles.chin}>
          {secondaryButtonLabel && (
            <Button
              variant="secondary-gray"
              size="small"
              onClick={onSecondaryButtonClick}
            >
              {secondaryButtonLabel}
            </Button>
          )}
          {primaryButtonLabel && (
            <Button
              variant="primary"
              size="small"
              onClick={onPrimaryButtonClick}
            >
              {primaryButtonLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default Dialog;
export { Dialog };
