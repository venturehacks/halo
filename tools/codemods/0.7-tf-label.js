/**
 * [SUMMARY]
 *
 * Important: this transforms Talent Frontend form/Label (to Halo's form/Label API)
 * It does not rename the legacy Halo core/Label component to core/Flair.
 * You should rename to Flair manually.
 *
 * Transforms usages of
 *   <Label name="...">
 * to
 *   <Label title="...">
 *
 * [USAGE]
 * npx jscodeshift -t tools/codemods/0.7-tf-label.js ../AngelList/frontend/talent  --extensions=tsx --parse
r=tsx --ignore-pattern="*.d.ts" --dry --print --verbose=2
 */

function transform(fileInfo, api) {
  const j = api.jscodeshift;
  const ast = j(fileInfo.source);

  const specifiers = [];

  // find <Label>'s
  const result = ast
    .find(j.JSXOpeningElement, {
      name: {
        name: 'Label',
      },
    })
    .forEach((path) => {
      // find `name="foo"` props
      j(path)
        .find(j.JSXIdentifier, {
          name: 'name',
        })
        .forEach((identifierPath) => {
          // change prop name
          identifierPath.value.name = 'title';
        });
    })
    .toSource();

  // console.log(result);
  return result;
}

module.exports = transform;
module.exports.parser = 'tsx';

export default transform;
