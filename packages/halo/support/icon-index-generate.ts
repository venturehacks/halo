/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/**
 * Halo Iconset Documentation Generator
 *
 * Reads icon directory and generates two sources:
 * (1) Icon export index: central list of default export => named export
 * (2) Documentation MDX: visual grid of icons shown on Halo docs website
 *
 * Usage:
 *
 * ts-node support/icon-index-generate.ts
 * == or ==
 * yarn icons
 *
 */

const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const ICONS_DIRECTORY = path.join(__dirname, '..', 'src/components/icons');
const ICONS_INDEX_PATH = path.join(ICONS_DIRECTORY, 'index.tsx');
const DOCUMENTATION_PATH = path.join(ICONS_DIRECTORY, 'index.mdx');

// resolve alphabetical list of SVG icons
const files = fs.readdirSync(ICONS_DIRECTORY);
const iconNameRegex = /([A-Za-z0-9]+)Icon/;
const iconNames = _.compact(
  files.map((icon) => icon.match(iconNameRegex)?.[0]),
).sort();

console.log(iconNames);

// ICON INDEX

const iconIndex = `${iconNames
  .map((icon) => `export { default as ${icon} } from './${icon}.svg';`)
  .join('\n')}\n`;

fs.writeFileSync(ICONS_INDEX_PATH, iconIndex);

console.log('✅  Icons export index generated.');

// DOCUMENTATION MDX

const iconImport = `import { ${iconNames.join(', ')} } from './';`;

const iconDocs = iconNames
  .map(
    (icon) =>
      `<div className="flex flex-col items-center justify-between border rounded border-gray-300">
   <div className="p-4"><${icon} /></div>
   <span className="font-medium text-sm mb-2">${icon}</span>
 </div>`,
  )
  .join('\n');

const documentation = `---
name: Icons
route: /icons
updated: ${new Date().toISOString()}
figma: https://www.figma.com/file/8EbOKQuVfc61d9aft8p7cO/Halo-Design-Library?node-id=12%3A1388
video: https://www.youtube.com/embed/mfEjrRpjjhM?start=47
---

${iconImport}

# Icons

<div className="grid grid-cols-4 gap-4 text-center max-w-3xl">

${iconDocs}

</div>
`;

fs.writeFileSync(DOCUMENTATION_PATH, documentation);

console.log('✅  Icons documentation mdx generated.');
