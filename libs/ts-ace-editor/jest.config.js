module.exports = {
  name: 'ts-ace-editor',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ts-ace-editor',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
