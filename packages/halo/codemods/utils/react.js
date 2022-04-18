/* eslint-disable no-console */
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
    console.log('`styles` import statement was not found.`');
    return [];
  }

  // get the local name for the imported module
  const importLocalName = importDeclaration.find(j.Identifier).get(0).node.name;

  const cssClassesReferenced = [];
  root
    .find(j.MemberExpression, { object: { name: importLocalName } })
    .forEach((nodePath) => {
      const cssClassname = nodePath.node.property.name;
      // ensure classnames are deduped
      if (!cssClassesReferenced.includes(cssClassname)) {
        cssClassesReferenced.push(cssClassname);
      }
    });

  return cssClassesReferenced;
}

export { getCssClassnames, CSS_FILENAME };
