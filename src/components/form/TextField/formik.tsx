import classNames from 'classnames';
import { Field, connect } from 'formik';
import React from 'react';
import { Dictionary, FormikContextProps } from '~/types/custom';

import { FieldError } from '../FieldError';

import styles from './styles.scss';

interface TextFieldProps {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  field: string;
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

function TextFieldRaw({
  className,
  placeholder,
  disabled,
  type,
  intrinsicWidth,
  field,
  formik: { values, errors },
}: TextFieldProps & FormikContextProps) {
  if (!field) {
    // tslint:disable-next-line: no-console
    console.warn('`field` prop required on form input');
    return null;
  }

  const fieldError = errors[field];
  const value = values[field];

  const classes = classNames(
    styles.component,
    className,
    intrinsicWidth === 'auto' && styles.widthAuto,
    fieldError && styles.error,
  );

  return (
    <>
      <Field
        id={field}
        name={field}
        value={value || ''}
        disabled={disabled}
        placeholder={placeholder}
        component="input"
        type={type}
        className={classes}
      />

      {fieldError && <FieldError text={fieldError} />}
    </>
  );
}

const TextField = connect<TextFieldProps, Dictionary<string>>(TextFieldRaw);

export { TextField };
