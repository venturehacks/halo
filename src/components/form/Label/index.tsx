import classNames from 'classnames';
import idx from 'idx';
import React from 'react';

import { ForwardedRefProps, withForwardedRef } from '../../../lib';
import { Span } from '../../core/Span';
import { Tooltip } from '../../core/Tooltip';

import styles from './styles.scss';

export interface LabelProps {
  children?: React.ReactNode;
  className?: string;
  /**
   * set to true if wrapping a set of checkboxes or radio buttons
   * @default false
   */
  containsFieldGroup?: boolean;
  /**
   * Form field this label applies to. This should match the "name" prop on input elements.
   */
  field?: string;
  isRequired?: boolean;
  /**
   * Primary description of field
   */
  title?: string;
  /**
   * Supporting title under title
   */
  supportingText?: string;
}

function LabelRaw({
  children,
  className,
  containsFieldGroup,
  field,
  forwardedRef,
  isRequired = false,
  supportingText,
  title,
}: LabelProps & ForwardedRefProps) {
  if (hasCheckboxOrRadio(children) && !containsFieldGroup) {
    return (
      <Span block error>
        Label component for {title} must set containsFieldGroup prop to true
        because it wraps checkboxes or radios
      </Span>
    );
  }

  const classes = classNames(
    styles.component,
    className,
    children && styles.hasControlChildren,
  );
  const id = `form-input--${field}`;

  const content = (
    <div>
      {title && (
        <div className={styles.title}>
          {title}{' '}
          {isRequired && (
            <Tooltip content="Required">
              <Span xxmuted>*</Span>
            </Tooltip>
          )}
        </div>
      )}
      {supportingText && (
        <div className={styles.supportingText}>{supportingText}</div>
      )}
    </div>
  );

  if (containsFieldGroup) {
    return (
      <fieldset
        ref={forwardedRef}
        className={classNames(classes, styles.fieldset)}
        name={id}
      >
        <legend>{content}</legend>
        {children && <div className={styles.control}>{children}</div>}
      </fieldset>
    );
  }

  return (
    <label ref={forwardedRef} className={classes} htmlFor={id}>
      {content}
      {children && <div className={styles.control}>{children}</div>}
    </label>
  );
}

function hasCheckboxOrRadio(children: React.ReactNode) {
  return React.Children.toArray<React.ReactNode>(children).some(
    (child: any) => {
      const title =
        idx(child, _ => _.type.displayName) || idx(child, _ => _.type.title);

      if (typeof title !== 'string') {
        return false;
      }

      return (
        title &&
        (title.includes('Checkbox') ||
          title.includes('Radio') ||
          title.includes('AtsField'))
      );
    },
  );
}

const Label = withForwardedRef<LabelProps>(LabelRaw);

export { Label };
