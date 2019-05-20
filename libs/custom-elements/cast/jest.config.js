module.exports = {
  name: 'custom-elements-cast',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/custom-elements/cast',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
