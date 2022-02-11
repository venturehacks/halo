const fs = require('fs');
const _ = require('lodash');

const fileContent = fs.readFileSync(`${__dirname}/../src/components/icons/index.tsx`, 'utf8');

console.log('File contents are:');
console.log(fileContent);

const iconNameRegex = /([A-Za-z0-9]+)Icon/gi;
const matches = [...fileContent.matchAll(iconNameRegex)];
const iconNames = _.uniq(matches.map(m => m[0])).sort();

console.log('Icons found:')
console.log(iconNames);


const iconImport = `import { ${iconNames.join(', ')} } from './';`

const iconDocs = iconNames.map(icon =>
  `<div className="flex flex-col items-center border rounded border-slate-300">
  <div className="p-4 mb-2"><${icon} /></div>
  <span className="font-medium text-sm">${icon}</span>
</div>`).join('\n')

const documentation = `---
name: Icons
menu: Core
route: /core/icons
---

${iconImport}

# Icons

<div className="grid grid-cols-4 gap-4 text-center max-w-3xl">

  ${iconDocs}

</div>
`

fs.writeFileSync(`${__dirname}/../src/components/icons/index.mdx`, documentation);

console.log('✅ Generated icon mdx.');
