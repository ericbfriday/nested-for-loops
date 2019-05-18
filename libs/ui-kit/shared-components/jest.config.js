module.exports = {
  name: 'ui-kit-shared-components',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui-kit/shared-components',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
