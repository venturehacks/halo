/* eslint-disable sort-keys-fix/sort-keys-fix */

/**
 * Separate jest config file used for package task
 * yarn run test:dev
 *
 * Runs only unit tests. No prettier or linters.
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultConfig = require('./jest.config');

const config = {
  ...defaultConfig,
  verbose: true,
  // Unit tests only.
  projects: defaultConfig.projects.filter(
    project => project.displayName === 'unit',
  ),
  // NOTE(drew): coming Jest 27+, not ready
  // extensionsToTreatAsEsm: ['.ts', '.mjs'],
};

module.exports = config;
