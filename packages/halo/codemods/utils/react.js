/* eslint-disable no-console */
import chalk from 'chalk';

const CSS_FILENAME = './styles.module.scss';

/**
 * Returns an array of all css classnames referenced in file
 */
function getCssClassnames(source, jscodeshiftApi) {
  const j = jscodeshiftApi;
  const root = j(source);

  const importDeclaration = root.find(j.ImportDeclaration, {
    source: {
      type: 'StringLiteral',
      value: CSS_FILENAME,
    },
  });

  if (importDeclaration.length === 0) {
    console.log(chalk.red('`styles` import statement was not found.'));
    return [];
  }

  // get the local name for the imported module
  const importLocalName = importDeclaration.find(j.Identifier).get(0).node.name;

  const cssClassesReferenced = new Set();
  root
    .find(j.MemberExpression, { object: { name: importLocalName } })
    .forEach((nodePath) => {
      cssClassesReferenced.push(nodePath.node.property.name);
    });

  return Array.from(cssClassesReferenced);
}

export { getCssClassnames, CSS_FILENAME };
