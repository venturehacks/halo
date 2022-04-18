/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const fs = require('fs');
const postcss = require('postcss');
const { getTailwindUtils } = require('tailwind-mappings');

const CONSOLE_RED = '\x1b[31m%s\x1b[0m';
const TEMPO_VAL_PX = 4;

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

  const allCssRuleNodes = extractRuleNodes(parsedCss.nodes);

  // We have all the parsed css nodes - iterate and fetch the css for matching classname
  const matchingNodes = allCssRuleNodes.filter(
    (node) =>
      node.selector === `.${className}` || node.selector === `&.${className}`,
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

  // Add any tailwindClasses for mixins that aren't supported
  tailwindClasses.push(mixinsToTailwind(classNode));

  return tailwindClasses.flat().filter((c) => c !== '');
}

/**
 * Recursively extracts all the nodes that represent css rules. This ensures that we also
 * extract any inner classes.
 */
function extractRuleNodes(inputNodes) {
  const matchedNodes = inputNodes.filter((node) => node.type === 'rule');

  const matchedChildNodes = [];
  matchedNodes.forEach((matchedNode) => {
    const childNodes = extractRuleNodes(matchedNode.nodes);
    if (childNodes && childNodes.length > 0) {
      matchedChildNodes.push(childNodes);
    }
  });

  matchedNodes.push(matchedChildNodes.flat());
  return matchedNodes.flat();
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

  const { nodes } = classNode;

  // extract all the pure css rules
  const cssDeclarations = nodes.filter((node) => node.type === 'decl');

  // handle mixins one at a time
  const mixins = nodes.filter(
    (node) => node.type === 'atrule' && node.name === 'include',
  );
  mixins.forEach((mixin) => {
    const mixinString = mixin.params;
    if (mixinString.startsWith('border-rounded')) {
      // this is the default from the mixin declaration
      let radiusValue = '4px';
      const extractedRadiusVal = extractParamFromParentheses(mixinString);
      if (extractedRadiusVal) {
        radiusValue = extractedRadiusVal;
      }

      cssDeclarations.push({
        prop: 'border-radius',
        value: radiusValue,
      });
    }
  });

  return cssDeclarations;
}

/**
 * Returns the value inside the FIRST parentheses in the given string
 *
 * e.g. "border-rounded(2px)" => "2px"
 */
function extractParamFromParentheses(input) {
  const parenMatch = input.match(/\((.*?)\)/);
  if (parenMatch && parenMatch.length > 1) {
    return parenMatch[1];
  }
}

/**
 * Returns the tailwind string for all mixins that are not supported earlier.
 *
 * e.g. `font-antialiased` => antialiased
 */
function mixinsToTailwind(classNode) {
  const tailwindClasses = [];
  classNode.nodes
    .filter((node) => node.type === 'atrule' && node.name === 'include')
    .forEach((mixin) => {
      const mixinString = mixin.params;

      if (mixinString === 'font-antialiased') {
        tailwindClasses.push('antialiased');
      } else if (mixinString.startsWith('font(')) {
        // extract size
        const sizeRegex = /size: (.*?)(,|\))/;
        const sizeMatches = mixinString.match(sizeRegex);
        if (sizeMatches && sizeMatches.length > 1) {
          tailwindClasses.push(`text-${sizeMatches[1]}`);
        }
        // extract weight
        const weightRegex = /weight: (.*?)(,|\))/;
        const weightMatches = mixinString.match(weightRegex);
        if (weightMatches && weightMatches.length > 1) {
          tailwindClasses.push(`font-${weightMatches[1]}`);
        }
        // extract color
        const colorRegex = /color: (.*?)(,|\))/;
        const colorMatches = mixinString.match(colorRegex);
        if (colorMatches && colorMatches.length > 1) {
          tailwindClasses.push(`text-${colorMatches[1]}`);
        }
      }
    });

  return tailwindClasses;
}

export { getTailwindPropertiesForClass };
