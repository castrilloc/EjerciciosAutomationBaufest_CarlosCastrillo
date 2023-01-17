const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "riabye",
  browser: "chrome",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
