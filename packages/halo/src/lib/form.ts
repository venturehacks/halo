export type ControlAlignment = 'top' | 'center';

/**
 * Converts literal 'true' or 'false' strings to boolean values.
 * Pass other strings through unchanged.
 */
export function coerceToBooleanOrPassThrough(str: string): string | boolean {
  switch (str) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return str;
  }
}

/**
 * (deprecated in 0.8.x) see coerceToBooleanOrPassThrough
 * Converts literal 'true' or 'false' strings to boolean values.
 * Pass other strings through unchanged.
 */

export function trueFalseToBoolean(str: string): string | boolean {
  return coerceToBooleanOrPassThrough(str);
}

export function stringToInteger(str: string | null): number | null {
  if (str === '' || typeof str !== 'string') {
    return null;
  }

  return Number(str);
}

export function prettyFileSize(
  bytes: number,
  preset: 'KB' | 'MB' | 'GB' = 'MB',
  precision = 2,
) {
  switch (preset) {
    case 'KB':
      bytes /= 1024;
    case 'MB':
      bytes /= 1024;
    case 'GB':
      bytes /= 1024;
  }

  return `${bytes.toFixed(precision)}${preset}`;
}

/**
 * SCROLL-TO-ERROR SUPPORT
 *
 * Submit form and got an error respnse?
 * Add FORM_FIELD_ERROR_IDENTIFIER to the form input's class list.
 * scrollToError(fieldName) will smooth scroll the browser.
 */
export const FORM_FIELD_ERROR_IDENTIFIER = 'js-halo-form-field-error';

interface ScrollToFieldErrorOptions {
  /**
   * Name of field to scroll focus to.
   * Only set when you require explicit control.
   * When unset, window will scroll to first form input with
   * `FORM_FIELD_ERROR_IDENTIFIER`. All TFE form components
   * decorate `FORM_FIELD_ERROR_IDENTIFIER` automatically.
   * @example email
   */
  field?: string;

  /**
   * Pixel offset from master parent scope container (usually `#mail` or `.ReactModal__Content`).
   * Rarely requires override. Override when you need more control
   * over scroll position behavior.
   * Example: a sticky header is overlapping the element.
   * @default 120
   */
  offsetTop?: number;
}
export function scrollToFieldError(options: ScrollToFieldErrorOptions = {}) {
  const { field, offsetTop } = options;

  const container = getFieldContainer(field);
  const errors =
    container === window
      ? findErrorFieldNodes('#main', field)
      : findErrorFieldNodes('.ReactModal__Content');

  if (errors.length === 0) {
    return;
  }

  const errorField = errors[0];
  const errorOffset = errorField.getBoundingClientRect().top;
  const scrollPosition = container === window ? window.pageYOffset : 0;
  const verticalPadding = container === window ? offsetTop : 0;
  const top = scrollPosition + errorOffset - verticalPadding;
  container.scrollTo({ behavior: 'smooth', left: 0, top });
}

// private utilities

function getFieldContainer(errorFieldKey?: string): Element | Window {
  const modalNodes = findErrorFieldNodes('.ReactModal__Content', errorFieldKey);
  if (modalNodes.length > 0) {
    return document.querySelectorAll('.ReactModal__Content')[0];
  }
  return window;
}

function findErrorFieldNodes(
  parentScope: '#main' | '.ReactModal__Content',
  field?: string,
) {
  return field
    ? document.querySelectorAll(`${parentScope} input[name="${field}"]`)
    : document.querySelectorAll(
        `${parentScope} .${FORM_FIELD_ERROR_IDENTIFIER}`,
      );
}
