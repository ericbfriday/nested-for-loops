module.exports = {
  name: 'feature-user-code',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/user-code',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
