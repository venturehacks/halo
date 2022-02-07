const path = require('path');

import { getCssClassnames, CSS_FILENAME } from '../codemod/utils/react';
import { getCssForClass } from '../codemod/utils/sass';

export default (fileInfo, api) => {
  console.log(`Running codemod for file: ${fileInfo.path}`);

  const cssClasses = getCssClassnames(fileInfo.source, api.jscodeshift);
  console.log(`Found css references for: ${cssClasses}`);

  const fileDirectory = path.dirname(fileInfo.path);
  const cssFilename = path.join(fileDirectory, CSS_FILENAME);
  const cssData = getCssForClass(cssFilename, cssClasses[0]);
  console.log(`Found css data: ${cssData}`);
};
