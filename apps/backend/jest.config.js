module.exports = {
  globalSetup: './jest.global.setup.js',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*\\.test\\..*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  globals: {
    'ts-jest': {
      useBabelrc: true,
    },
  },
};
