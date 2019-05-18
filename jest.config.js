const { pathsToModuleNameMapper } = require('ts-jest/utils');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig');

module.exports = {
  automock: true,
  verbose: true,
  preset: 'ts-jest/presets/default',
  // testEnvironment: 'node',
  resolver: '@nrwl/builders/plugins/jest/resolver',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: { '^.+\\.(ts|js|html)$': 'ts-jest' },
  transformIgnorePatterns: ['node_modules/(?!(jest-test|@ngrx))'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  testPathIgnorePatterns: ['<rootDir>/apps/my-app', '<rootDir>/node_modules']
};
