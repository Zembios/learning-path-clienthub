module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/units"],
  testMatch: ["**/?(*.)+(spec|test).(js|jsx)"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};
