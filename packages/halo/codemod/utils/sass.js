/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const fs = require('fs');
const postcss = require('postcss');
const { getTailwindUtils } = require('tailwind-mappings');

const CONSOLE_RED = '\x1b[31m%s\x1b[0m';
const TEMPO_VAL_PX = 8;

function getTailwindPropertiesForClass(fileName, className) {
  // need to remove all single line comments because parser cannot handle them
  const cssSource = fs.readFileSync(fileName).toString();
  const cssWithoutComments = cssSource.replace(/\/\/.*/, '');
  const parsedCss = postcss.parse(cssWithoutComments);

  const fileConstants = {};
  parsedCss.nodes
    .filter((node) => node.type === 'decl')
    .forEach((decl) => {
      fileConstants[decl.prop] = decl.value;
    });

  // We have all the parsed css nodes - iterate and fetch the css for matching classname
  const matchingNodes = parsedCss.nodes.filter(
    (node) => node.type === 'rule' && node.selector === `.${className}`,
  );

  if (matchingNodes.length === 0) {
    console.log(CONSOLE_RED, `COULD NOT FIND CSS FOR '.${className}'`);
    return;
  }

  const classNode = matchingNodes[0];
  const cssDeclarations = extractCssDeclarations(classNode);

  // Convert each of the declarations into its tailwind value
  const tailwindClasses = cssDeclarations.map((declaration) => {
    const transformedDecl = {
      prop: declaration.prop,
      value: declaration.value,
    };

    try {
      // replace any file constants with actual value
      // eslint-disable-next-line no-prototype-builtins
      if (fileConstants.hasOwnProperty(transformedDecl.value)) {
        transformedDecl.value = fileConstants[transformedDecl.value];
      }

      // replace tempo(x) values with pixel value
      transformedDecl.value = replaceTempoWithPixel(transformedDecl.value);

      const tailwindVal = getTailwindUtils(transformedDecl);

      if (tailwindVal === '') {
        logTransformationError(transformedDecl);
      }
      return tailwindVal;
    } catch (error) {
      logTransformationError(transformedDecl);
      return '';
    }
  });

  return tailwindClasses.filter((c) => c !== '');
}

/**
 * Returns a string that replaces tempo function calls with the respective pixel value.
 * e.g. "tempo(1) tempo(2)" => "4px 8px"
 *
 * NOTE: this does not work on strings that contain other words as well.
 * e.g. "tempo(1) tempo(2) 3px" => "4px 8px"
 */
function replaceTempoWithPixel(input) {
  const tempoValRegex = /tempo\((.*?)\)/;
  const tempoStringRegex = /tempo\((.*?)\)/g;

  const matches = input.match(tempoStringRegex);
  if (!matches || matches.length === 0) {
    return input;
  }

  let result = '';
  matches.forEach((tempoString) => {
    const tempoVal = tempoString.match(tempoValRegex)[1];
    const pixelVal = parseFloat(tempoVal) * TEMPO_VAL_PX;
    result += `${pixelVal}px `;
  });

  return result;
}

function logTransformationError(declaration) {
  console.log(
    CONSOLE_RED,
    `COULD NOT TRANSFORM '${declaration.prop}: ${declaration.value}'`,
  );
}

function extractCssDeclarations(classNode) {
  if (!classNode || !classNode.nodes || classNode.nodes.length === 0) {
    return [];
  }

  // TODO: how do we handle inner classes?
  // TODO: how do we deal with mixins?

  return classNode.nodes.filter((node) => node.type === 'decl');
}

export { getTailwindPropertiesForClass };
