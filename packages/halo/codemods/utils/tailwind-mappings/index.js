import {
  getBorderUtils,
  getBorderColorUtils,
  getBorderRadiusUtils,
} from './borders';
import getColorUtils from './colors';
import TAILWIND_CLASSES from './constants';
import getSpacingUtils from './spacing';

function getTailwindUtils(decl) {
  const prop = TAILWIND_CLASSES[decl.prop];
  // remove !important from values
  const val = decl.value.replace(' !important', '');
  let output = '';
  switch (decl.prop) {
    case 'margin':
    case 'margin-left':
    case 'margin-right':
    case 'margin-top':
    case 'margin-bottom':
    case 'padding':
    case 'padding-left':
    case 'padding-right':
    case 'padding-top':
    case 'padding-bottom':
      output = getSpacingUtils(decl, decl.prop);
      break;

    case 'border':
      output = getBorderUtils(decl);
      break;

    case 'color':
    case 'background-color':
    case 'background':
      if (decl.value !== 'inherit' && !decl.value.includes('var')) {
        output = getColorUtils(decl);
      }
      break;

    case 'border-radius':
      output = getBorderRadiusUtils(decl);
      break;

    case 'border-color':
      output = getBorderColorUtils(decl);
      break;

    case 'opacity':
      if (decl.value.startsWith('.')) {
        decl.value = `0${decl.value}`;
      }
      output = prop[decl.value] || '';
      break;

    default:
      if (prop) {
        output = prop[val] || '';
      }
  }

  return output;
}

export { getTailwindUtils };
