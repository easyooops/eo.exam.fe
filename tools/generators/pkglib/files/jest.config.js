module.exports = {
  testMatch: [
    "**/__tests__/units/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ], //테스트 타겟.
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testEnvironment: "jsdom" // 브라우저 환경 @see jest-environment-jsdom
};
