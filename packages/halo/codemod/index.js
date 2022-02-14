const path = require('path');

import { getCssClassnames, CSS_FILENAME } from '../codemod/utils/react';
import { getTailwindPropertiesForClass } from '../codemod/utils/sass';

const CONSOLE_MAGENTA = '\x1b[35m%s\x1b[0m';
const CONSOLE_YELLOW = '\x1b[33m%s\x1b[0m';

export default (fileInfo, api) => {
  console.log(CONSOLE_YELLOW, `Running codemod for file: ${fileInfo.path}`);

  const cssClasses = getCssClassnames(fileInfo.source, api.jscodeshift);
  console.log(CONSOLE_YELLOW, `Found css references for: ${cssClasses}`);

  const fileDirectory = path.dirname(fileInfo.path);
  const cssFilename = path.join(fileDirectory, CSS_FILENAME);

  const cssToTailwind = {};
  cssClasses.forEach(className => {
    console.log(CONSOLE_YELLOW, `Transforming css for class: '.${className}'`);
    const tailwindProps = getTailwindPropertiesForClass(cssFilename, className);
    cssToTailwind[className] = tailwindProps;
  });

  console.log(CONSOLE_MAGENTA, '---------------------------------------');
  console.log(CONSOLE_MAGENTA, '------- TAILWIND TRANSFOMATION --------');
  console.log(CONSOLE_MAGENTA, '---------------------------------------');
  Object.keys(cssToTailwind).forEach(className => {
    if (cssToTailwind[className]) {
      const msg = `'.${className}' => "${cssToTailwind[className].join(' ')}"`;
      console.log(CONSOLE_MAGENTA, msg);
    }
  });
};
