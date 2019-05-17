module.exports = {
  name: 'feature-render-queue',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/render-queue',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
