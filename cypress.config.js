const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    env: {
      apiBaseUrl: 'https://serverest.dev'
    },
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});

