module.exports = {
  name: 'feature-editor',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/editor',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
