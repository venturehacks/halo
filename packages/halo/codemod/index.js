const path = require('path');

import { getCssClassnames, CSS_FILENAME } from '../codemod/utils/react';
import { getTailwindPropertiesForClass } from '../codemod/utils/sass';

export default (fileInfo, api) => {
  console.log(`Running codemod for file: ${fileInfo.path}`);

  const cssClasses = getCssClassnames(fileInfo.source, api.jscodeshift);
  console.log(`Found css references for: ${cssClasses}`);

  const fileDirectory = path.dirname(fileInfo.path);
  const cssFilename = path.join(fileDirectory, CSS_FILENAME);

  const cssToTailwind = {};
  cssClasses.forEach(className => {
    console.log(`Transforming css for class: '.${className}'`);
    const tailwindProps = getTailwindPropertiesForClass(cssFilename, className);
    cssToTailwind[className] = tailwindProps;
  });

  console.log('---------------------------------------');
  console.log('------- TAILWIND TRANSFOMATION --------');
  console.log('---------------------------------------');
  Object.keys(cssToTailwind).forEach(className => {
    if (cssToTailwind[className]) {
      console.log(`'.${className}' => "${cssToTailwind[className].join(' ')}"`);
    }
  });
};
