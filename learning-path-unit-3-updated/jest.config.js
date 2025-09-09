module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/units"],
  testMatch: ["**/?(*.)+(spec|test).(ts|tsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }]
  }
};
