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
    .filter(node => node.type === 'decl')
    .forEach(decl => {
      fileConstants[decl.prop] = decl.value;
    });

  // We have all the parsed css nodes - iterate and fetch the css for matching classname
  const matchingNodes = parsedCss.nodes.filter(
    node => node.type === 'rule' && node.selector === `.${className}`,
  );

  if (matchingNodes.length === 0) {
    console.log(CONSOLE_RED, `COULD NOT FIND CSS FOR '.${className}'`);
    return;
  }

  const classNode = matchingNodes[0];
  const cssDeclarations = extractCssDeclarations(classNode);

  // Convert each of the declarations into its tailwind value
  const tailwindClasses = cssDeclarations.map(declaration => {
    const transformedDecl = {
      prop: declaration.prop,
      value: declaration.value,
    };

    try {
      // replace any file constants with actual value
      if (fileConstants.hasOwnProperty(transformedDecl.value)) {
        transformedDecl.value = fileConstants[transformedDecl.value];
      }
      // replace tempo(x) values with pixel value
      const groups = transformedDecl.value.match(/tempo\((.*?)\)/);
      if (groups && groups.length > 1) {
        const tempoVal = groups[1];
        const pixelVal = parseFloat(tempoVal) * TEMPO_VAL_PX;
        transformedDecl.value = `${pixelVal}px`;
      }
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

  return tailwindClasses.filter(c => c !== '');
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

  return classNode.nodes.filter(node => node.type === 'decl');
}

export { getTailwindPropertiesForClass };
