module.exports = {
  name: 'feature-callbacks',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/callbacks',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
