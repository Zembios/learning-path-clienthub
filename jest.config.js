module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/units"],
  testMatch: ["**/?(*.)+(spec|test).(js|jsx|ts|tsx)"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }]
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testPathIgnorePatterns: ["/node_modules/", "/.git/"]
};
