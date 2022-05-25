/* eslint-disable no-underscore-dangle */
import chroma from 'chroma-js';

import TAILWIND_CLASSES from './constants';
import getColorUtils from './colors';
import getProximateKey from './get-proximate-key';

function getBorderUtils(decl) {
  if (decl.value === 'none') return '';
  if (decl.value === 'transparent') return '';
  if (decl.value === '0') return 'border-0';
  const borderValues = decl.value.split(' ');
  if (borderValues.length > 2) {
    const [width, style, ...colorValue] = borderValues;
    const color = colorValue.join('');

    const borderWidth = TAILWIND_CLASSES['border-width'];
    const borderStyle = TAILWIND_CLASSES['border-style'];
    const borderColor = TAILWIND_CLASSES['border-color'];
    const borderOpacity = TAILWIND_CLASSES['border-opacity'];

    const _width = borderWidth[width] || 'border';
    const _style = borderStyle[style] || '';
    const _color = borderColor[color] || getColorUtils(decl);
    let result = `${_width} ${_style} ${_color}`;
    if (color.includes('rgba')) {
      const [, , , opacity] = chroma(color)._rgb;
      const proximateKey = getProximateKey(borderOpacity, opacity);
      const _opacity = borderOpacity[opacity] || borderOpacity[proximateKey];
      result += ` ${_opacity}`;
    }
    return result;
  }
  return '';
}

function getBorderColorUtils(decl) {
  const borderColor = TAILWIND_CLASSES['border-color'];
  const borderOpacity = TAILWIND_CLASSES['border-opacity'];

  const color = decl.value;
  const _color = borderColor[color] || getColorUtils(decl);
  let result = _color;
  if (color.includes('rgba')) {
    const [, , , opacity] = chroma(color)._rgb;
    const proximateKey = getProximateKey(borderOpacity, opacity);
    const _opacity = borderOpacity[opacity] || borderOpacity[proximateKey];
    result += ` ${_opacity}`;
  }
  return result;
}

function getBorderRadiusUtils(decl) {
  const hash = TAILWIND_CLASSES['border-radius'];
  const proximateKey = getProximateKey(hash, decl.value);
  return hash[decl.value] || hash[proximateKey];
}

export default {
  getBorderUtils,
  getBorderColorUtils,
  getBorderRadiusUtils,
};
