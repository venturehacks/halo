/**
 * Provide `atsm` custom includePaths
 */
const path = require('path');
const CWD = process.cwd();

module.exports = {
  "includePaths": [
    path.resolve(CWD, 'scss'),
    path.resolve(CWD, 'node_modules'),
  ]
};
