const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  transformIgnorePatterns: [
    '/node_modules/(?!(firebase|@firebase|rxjs)/)',
    '^.+\\.module\\.(css|sass|scss)$',
  ],

  extensionsToTreatAsEsm: ['.ts', '.tsx'], // 👈 necessário para suporte ESM
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],
  },
}

module.exports = createJestConfig(customJestConfig)
