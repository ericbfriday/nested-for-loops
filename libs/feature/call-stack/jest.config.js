module.exports = {
  name: 'feature-call-stack',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/call-stack',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
