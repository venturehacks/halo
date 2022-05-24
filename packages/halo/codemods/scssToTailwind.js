/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
import chalk from 'chalk';

import { getCssClassnames, CSS_FILENAME } from './utils/react';
import { getTailwindPropertiesForClass } from './utils/sass';

const path = require('path');

export default (fileInfo, api) => {
  console.log(chalk.yellow(`Running codemod for file: ${fileInfo.path}`));

  const cssClasses = getCssClassnames(fileInfo.source, api.jscodeshift);
  console.log(chalk.yellow(`Found css references for: ${cssClasses}`));

  const fileDirectory = path.dirname(fileInfo.path);
  const cssFilename = path.join(fileDirectory, CSS_FILENAME);

  const cssToTailwind = {};
  cssClasses.forEach((className) => {
    console.log(chalk.yellow(`Transforming css for class: '.${className}'`));
    const tailwindProps = getTailwindPropertiesForClass(cssFilename, className);
    cssToTailwind[className] = tailwindProps;
  });

  console.log(chalk.magenta('---------------------------------------'));
  console.log(chalk.magenta('------- TAILWIND TRANSFOMATION --------'));
  console.log(chalk.magenta('---------------------------------------'));
  Object.keys(cssToTailwind).forEach((className) => {
    if (cssToTailwind[className]) {
      const msg = `'.${className}' => "${cssToTailwind[className].join(' ')}"`;
      console.log(chalk.magenta(msg));
    }
  });
};
