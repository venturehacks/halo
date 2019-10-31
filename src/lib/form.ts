// convert only 'true' or 'false' strings to boolean
// pass other strings through unchanged
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

export function scrollToFieldError(errorFieldKey?: string) {
  const container = getFieldContainer(errorFieldKey);
  const errors =
    container === window
      ? findErrorFieldNodes('#main', errorFieldKey)
      : findErrorFieldNodes('.ReactModal__Content');

  if (errors.length === 0) {
    return;
  }

  const errorField = errors[0];
  const errorOffset = errorField.getBoundingClientRect().top;
  const scrollPosition = container === window ? window.scrollY : 0;
  const verticalPadding = container === window ? 120 : 0;
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
  errorFieldKey?: string,
) {
  return errorFieldKey
    ? document.querySelectorAll(`${parentScope} input[name="${errorFieldKey}"]`)
    : document.querySelectorAll(
        `${parentScope} .${FORM_FIELD_ERROR_IDENTIFIER}`,
      );
}
