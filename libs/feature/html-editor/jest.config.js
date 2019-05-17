module.exports = {
  name: 'feature-html-editor',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/html-editor',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
