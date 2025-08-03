const baseConfig = require("../../packages/test-config/jest.config.js");

module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: [
    ...baseConfig.setupFilesAfterEnv,
    "<rootDir>/jest-setup.js",
  ],
};
