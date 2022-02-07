export default (fileInfo, api) => {
  const j = api.jscodeshift;

  const root = j(fileInfo.source);

  const importDeclaration = root.find(j.ImportDeclaration, {
    source: {
      type: 'StringLiteral',
      value: './styles.module.scss',
    },
  });
  const importLocalName = importDeclaration.find(j.Identifier).get(0).node.name;
  console.log(`VISHAL localName: ${JSON.stringify(importLocalName)}`);

  const functionCalls = root.find(j.MemberExpression, {
    object: {
      name: importLocalName,
    },
  });

  const methodsCalled = [];
  functionCalls.forEach(nodePath =>
    methodsCalled.push(nodePath.node.property.name),
  );

  console.log(`css methods called in file are [${methodsCalled}]`);

  return root.toSource();
};
