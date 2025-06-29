const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.laboratoriodetesting.com',
    video: false,
    setupNodeEvents(on, config) {
      // Puedes configurar plugins aquí si es necesario
    },
    viewportWidth: 1280,
    viewportHeight: 720
  },
});