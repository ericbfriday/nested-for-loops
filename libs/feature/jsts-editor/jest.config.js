module.exports = {
  name: 'feature-jsts-editor',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/jsts-editor',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
