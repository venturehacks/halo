import classNames from 'classnames';
import { FieldProps } from 'formik';
import * as React from 'react';

import * as styles from './styles.scss';

export interface TextFieldProps {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  intrinsicWidth?: 'auto' | '100%';
  type?:
    | 'text'
    | 'email'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'tel'
    | 'url'
    | 'search';
}

function TextField({
  className,
  placeholder,
  disabled,
  type,
  intrinsicWidth,
  // formik FieldProps
  field,
  form,
}: TextFieldProps & FieldProps) {
  const { name, value } = field;
  const { errors, values } = form;

  if (!name) {
    // tslint:disable-next-line: no-console
    console.warn('`name` prop required on form input');
    return null;
  }

  // tslint:disable-next-line: no-console
  console.log('errors:', errors);
  // tslint:disable-next-line: no-console
  console.log('values:', values);

  // const fieldError = errors[name];

  const classes = classNames(
    styles.component,
    className,
    intrinsicWidth === 'auto' && styles.widthAuto,
    // fieldError && styles.error,
  );

  return (
    <>
      <input
        className={classes}
        disabled={disabled}
        id={`form-input--${name}`}
        placeholder={placeholder}
        type={type}
        {...field}
      />

      {/* {fieldError && <FormErrorLabel text={fieldError} />} */}
    </>
  );
}

export { TextField };
