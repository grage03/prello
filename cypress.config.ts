import { defineConfig } from "cypress"

export default defineConfig({
  projectId: 'k69hug',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
