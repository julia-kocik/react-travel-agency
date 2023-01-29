//jest.config.ts
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)$',
    testPathIgnorePatterns: ['/node_modules/', 'dist'],
    setupFilesAfterEnv: ['./setupTests.ts'],
    stylePreprocessorOptions: {
        includePaths: ['src/sass'],
    },
    moduleNameMapper: {},
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.css$': 'jest-transform-scss',
        '^.+\\.scss$': 'jest-transform-scss',
    },
}
