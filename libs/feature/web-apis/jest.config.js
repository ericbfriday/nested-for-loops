module.exports = {
  name: 'feature-web-apis',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/web-apis',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
