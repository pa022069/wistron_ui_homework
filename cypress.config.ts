import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.CI_ENVIRONMENT_URL || "http://localhost:3000",
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
