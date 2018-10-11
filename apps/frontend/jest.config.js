module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  modulePaths: ['<rootDir>/src'],
  testMatch: ['**/*.test.*'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['__snapshots__'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
