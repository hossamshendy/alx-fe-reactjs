module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/jest.setup.js"]
};
