const fs = require('fs');
const postcss = require('postcss');
import { parse } from 'css-tree';

function getCssForClass(fileName, className) {
  console.log(`Getting css code for: ${fileName}`);
  const root = postcss.parse(fs.readFileSync(fileName)).toString();

  const parsed = parse(root);
  const value = 'qewr';
  const cssSelectors = extractCssSelectors(root.nodes);

  return root;
}

function extractCssSelectors(nodes) {
  if (!nodes || nodes.length === 0) {
    return [];
  }

  const ruleNodes = nodes.filter(node => node.type === 'rule');
  let selectors = ruleNodes.map(r => r.selector);
  ruleNodes.forEach(ruleNode => {
    selectors = selectors.concat(extractCssSelectors(ruleNode.nodes));
  });

  return selectors;
}

export { getCssForClass };
