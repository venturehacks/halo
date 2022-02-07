const fs = require('fs');
const postcss = require('postcss');

function getCssForClass(fileName, className) {
  console.log(`Getting css code for: ${fileName}`);
  const root = postcss.parse(fs.readFileSync(fileName));

  const value = 'qewr';

  return root;
}

export { getCssForClass };
