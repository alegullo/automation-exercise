const {defineConfig} = require("cypress")

module.exports = defineConfig({
  reporter:'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/results/junit/results-[hash].xml',
    },
    cypressMochawesomeReporterReporterOptions: {
      charts:true,
      reportPageTitle: 'Report Automation Exercise',
      embeddedScreens: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  },
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.automationexercise.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
