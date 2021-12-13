import classNames from 'classnames';
import React from 'react';

import {
  Color,
  ForwardedRefProps,
  TextWeight,
  withForwardedRef,
} from '../../../lib';
import { Span, SpanProps } from '../../core/Span';
import { Tooltip } from '../../core/Tooltip';

import styles from './styles.module.scss';

type LabelPropsBase = Pick<SpanProps, 'weight' | 'color'> &
  Omit<React.HTMLAttributes<HTMLLabelElement>, 'title'>;

export interface LabelProps extends LabelPropsBase {
  children?: React.ReactNode;
  className?: string;
  /**
   * set to true if wrapping a set of checkboxes or radio buttons
   * @default false
   */
  containsFieldGroup?: boolean;
  controlClassName?: string;
  /**
   * Form field this label applies to. This should match the "name" prop on input elements.
   */
  field?: string;
  isRequired?: boolean;

  /**
   * Supporting title under title
   */
  supportingText?: string;
  /**
   * Primary description of field
   */
  title?: React.ReactNode;
}

LabelRaw.defaultProps = {
  color: 'slate--900' as Color,
  isRequired: false,
  weight: 'medium' as TextWeight,
};

function LabelRaw({
  children,
  className,
  containsFieldGroup,
  field,
  forwardedRef,
  isRequired,
  supportingText,
  title,
  controlClassName,
  weight,
  color,
  ...rest
}: LabelProps & ForwardedRefProps<HTMLLabelElement>) {
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
    children && styles.hasControlChildren,
    className,
  );
  const id = `form-input--${field}`;

  const content = (
    <div>
      {title && (
        <div className={styles.title}>
          <Span color={color} weight={weight}>
            {title}
          </Span>{' '}
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
        ref={(forwardedRef as unknown) as React.Ref<HTMLFieldSetElement>}
        className={classNames(classes, styles.fieldset)}
        name={id}
      >
        <legend className={styles.legend}>{content}</legend>
        {children && (
          <div className={classNames(styles.control, controlClassName)}>
            {children}
          </div>
        )}
      </fieldset>
    );
  }

  return (
    <label ref={forwardedRef} className={classes} htmlFor={id} {...rest}>
      {content}
      {children && (
        <div className={classNames(styles.control, controlClassName)}>
          {children}
        </div>
      )}
    </label>
  );
}

function hasCheckboxOrRadio(children: React.ReactNode) {
  return React.Children.toArray(children).some((child: any) => {
    const title = child?.type?.displayName || child?.type?.title;

    if (typeof title !== 'string') {
      return false;
    }

    return (
      title &&
      (title.includes('Checkbox') ||
        title.includes('Radio') ||
        title.includes('AtsField'))
    );
  });
}

const Label = withForwardedRef<LabelProps, HTMLLabelElement>(LabelRaw);

export { Label };
