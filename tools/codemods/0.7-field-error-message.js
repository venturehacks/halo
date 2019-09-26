/**
* [SUMMARY]
*
* Transforms usages of
*   <FieldErrorMessage text="..." color="warning">
* to
*   <FieldErrorMessage message="..." errorSeverity="warning">
*
* [USAGE]
* npx jscodeshift -t tools/codemods/0.7-field-error-message.js ../AngelList/frontend/talent  --extensions=tsx --parse
r=tsx --ignore-pattern="*.d.ts" --dry --print --verbose=2
*/

function transform(fileInfo, api) {
  const j = api.jscodeshift;
  const ast = j(fileInfo.source);

  const specifiers = [];

  // find <FieldErrorMessage>'s
  ast.find(j.JSXOpeningElement, {
    name: {
      name: 'FieldErrorMessage'
    }
  })
  .forEach(path => {
    // find `text="foo"` props
    j(path)
      .find(j.JSXIdentifier, {
        name: 'text'
      })
      .forEach(identifierPath => {
        // change prop name
        identifierPath.value.name = 'message';
      });

    j(path)
      .find(j.JSXIdentifier, {
        name: 'color'
      })
      .forEach(identifierPath => {
        // change prop name
        identifierPath.value.name = 'errorSeverity';
      })
  });


  const result = ast.toSource();

  // console.log(result);
  return result;
}

module.exports = transform;
module.exports.parser = 'tsx';

export default transform;
