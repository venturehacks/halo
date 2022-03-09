/**
 * [SUMMARY]
 *
 * (1)
 * Transforms
 *   <Box> (no 'block' prop, no 'row' prop, no 'column' prop)
 * to
 *   <Box column>
 *
 * (2)
 * Transforms
 *   <Box block>
 * to
 *   <Box>
 *
 * [USAGE]
 * TSX files:
 * jscodeshift -t tools/codemods/0.7-box.js ../AngelList/app/javascripts  --extensions=jsx --parser=babel --ignore-pattern="*.
d.ts"
 *
 * JSX files:
 * jscodeshift -t tools/codemods/0.7-box.js ../AngelList/app/javascripts  --extensions=tsx --parser=tsx --ignore-pattern="*.
d.ts"
 */

function transform(fileInfo, api) {
  const j = api.jscodeshift;
  const ast = j(fileInfo.source);

  // === STEP 1 ===
  const addColumnProp = (boxPath) => {
    boxPath.node.attributes = [
      ...boxPath.node.attributes,
      j.jsxAttribute(j.jsxIdentifier('column')),
    ];
  };

  // find <Box>'s
  ast
    .find(j.JSXOpeningElement, {
      name: {
        name: 'Box',
      },
    })
    .forEach((boxPath) => {
      const attributes = j(boxPath.node.attributes);
      const props = attributes.find(j.JSXIdentifier);
      // ensure there is no `row` or `block` prop
      if (
        props.every(
          (identifierPath) =>
            identifierPath.value.name !== 'block' &&
            identifierPath.value.name !== 'row' &&
            identifierPath.value.name !== 'column',
        )
      ) {
        addColumnProp(boxPath);
      }
    });

  // === STEP 2 ===
  const removeBlockProp = (boxPath) => {
    const attributes = j(boxPath.node.attributes);
    const props = attributes.find(j.JSXIdentifier);
    props.filter((propNode) => propNode.value.name === 'block').remove();
  };

  // find <Box>'s
  ast
    .find(j.JSXOpeningElement, {
      name: {
        name: 'Box',
      },
    })
    .forEach(removeBlockProp);

  const result = ast.toSource();
  // console.log(result);
  return result;
}

module.exports = transform;
module.exports.parser = 'tsx';

export default transform;
