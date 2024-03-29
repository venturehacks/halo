import classNames from 'classnames';
import React from 'react';

import {
  Button as HaloButton,
  ButtonProps as HaloButtonProps,
} from '../../core/Button';
import { Header } from '../../core/Header';

import styles from './styles.module.scss';

export type DialogContext = 'inline' | 'modal';

export interface DialogProps {
  /**
   * Optionally overrride with a button component that supports Halo's Button prop API.
   * @default HaloButton
   */
  buttonComponent?: React.ComponentType<HaloButtonProps>;
  children: React.ReactNode;
  className?: string;
  /**
   * @default true
   */
  contentPadding?: boolean;
  /**
   * If modal context, include drop shadow
   * @default modal
   */
  context?: DialogContext;
  onPrimaryButtonClick?: React.MouseEventHandler;
  onSecondaryButtonClick?: React.MouseEventHandler;
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
    context === 'inline' && styles.contextInline,
    context === 'modal' && 'shadow-sm',
    contentPadding && styles.paddingDefault,
    className,
  );

  const Button = buttonComponent || HaloButton;
  const hasChin = primaryButtonLabel || secondaryButtonLabel;
  const isTitleJSX = typeof title !== 'string';

  return (
    <div className={classes} data-test="Dialog">
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
        <div className={styles.chin} data-test="Dialog-chin">
          {secondaryButtonLabel && (
            <Button
              data-test="Dialog-secondaryButton"
              onClick={onSecondaryButtonClick}
              size="sm"
              variant="secondary"
            >
              {secondaryButtonLabel}
            </Button>
          )}
          {primaryButtonLabel && (
            <Button
              data-test="Dialog-primaryButton"
              onClick={onPrimaryButtonClick}
              size="sm"
              variant="primary"
            >
              {primaryButtonLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export { Dialog };
