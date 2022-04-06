import classNames from 'classnames';
import React from 'react';

import { ForwardedRefProps, withForwardedRef } from '../../../lib';
import { Tooltip } from '../../core/Tooltip';

type LabelPropsBase = Omit<React.HTMLAttributes<HTMLLabelElement>, 'title'>;

export interface LabelProps extends LabelPropsBase {
  /**
   * Supporting label under title
   */
  byline?: string;
  /**
   * Input field JSX
   */
  children?: React.ReactNode;
  className?: string;
  /**
   * Set `true` to wrap group of checkboxes or radios.
   * Wraps content in fieldset and legend instead of label.
   * @default false
   */
  containsFieldGroup?: boolean;
  controlClassName?: string;
  /**
   * Form field name the label applies to.
   */
  field?: string;

  /**
   * Mark field required with an asterisk + tooltip.
   * @default false
   */
  isRequired?: boolean;
  /**
   * Primary description
   */
  title?: string;
}

function LabelRaw({
  byline,
  children,
  className,
  color,
  containsFieldGroup,
  field,
  forwardedRef,
  isRequired,
  title,
  ...rest
}: LabelProps & ForwardedRefProps<HTMLLabelElement>) {
  if (hasCheckboxOrRadio(children) && !containsFieldGroup) {
    throw new Error(
      `Label component for ${title} (${field}) must set containsFieldGroup={true} when wrapping checkboxes or radios`,
    );
  }

  const id = `form-input--${field}`;
  const containerClasses = classNames('block', children && 'mb-6', className);

  const labelContent = (
    <div className="mb-1">
      {title && (
        <div className="text-dark-aaaa text-md font-medium antialiased">
          {title}
          {isRequired && (
            <Tooltip content="Required">
              <span className="text-dark-aa">*</span>
            </Tooltip>
          )}
        </div>
      )}
      {byline && <div className="text-dark-a text-sm">{byline}</div>}
    </div>
  );

  // collection of radios, checkboxes
  if (containsFieldGroup) {
    return (
      <fieldset
        ref={forwardedRef as unknown as React.Ref<HTMLFieldSetElement>}
        className={classNames(containerClasses, 'border-none')}
        name={id}
      >
        <legend className="mb-3 w-full">{labelContent}</legend>
        {children}
      </fieldset>
    );
  }

  // single input (most common scenario)
  return (
    <label
      ref={forwardedRef}
      className={containerClasses}
      htmlFor={id}
      {...rest}
    >
      {labelContent}
      {children}
    </label>
  );
}

/**
 * NOTE(drew):
 * Not super happy with this clumsy old helper.
 * Might delete later, as it only provides minor ergonomic benefit.
 */
function hasCheckboxOrRadio(children: React.ReactNode) {
  return React.Children.toArray(children).some((child: any) => {
    // NOTE(drew): for this to work, one must set `displayName` on component
    // ex: Radio.displayName = 'Radio';
    const title = child?.type?.displayName || child?.type?.title;

    if (typeof title !== 'string') {
      return false;
    }

    return (
      title.includes('Checkbox') ||
      title.includes('Radio') ||
      title.includes('AtsField')
    );
  });
}

const Label = withForwardedRef<LabelProps, HTMLLabelElement>(LabelRaw);

export { Label };
