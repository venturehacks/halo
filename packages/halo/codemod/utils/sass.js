const fs = require('fs');
const postcss = require('postcss');
const { getTailwindUtils } = require('tailwind-mappings');

const TEMPO_VAL_PX = 8;

function getCssForClass(fileName, className) {
  console.log(`Getting css code for: ${fileName}`);
  const parsedCss = postcss.parse(fs.readFileSync(fileName));

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
    console.log(`No matching nodes were found for the css class: ${className}`);
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
      return tailwindVal;
    } catch (error) {
      console.log(`Error during transformation: ${error}`);
      return '';
    }
  });

  return tailwindClasses;
}

function extractCssDeclarations(classNode) {
  if (!classNode || !classNode.nodes || classNode.nodes.length === 0) {
    return [];
  }

  // TODO: how do we handle inner classes?

  // TODO: how do we deal with mixins?

  return classNode.nodes.filter(node => node.type === 'decl');
}

// const ruleNodes = nodes.filter(node => node.type === 'rule');
// let selectors = ruleNodes.map(r => r.selector);
// ruleNodes.forEach(ruleNode => {
//   selectors = selectors.concat(extractCssSelectors(ruleNode.nodes));
// });

// return selectors;

export { getCssForClass };
