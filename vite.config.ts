import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {},
  resolve: {
    alias: {
      "@models": "./src/models/",
      "@repositories": "./src/repositories/",
      "@routers": "./src/routers/",
      "@use-cases": "./src/use-cases/",
      "@database": "./src/database/",
      "@errors": "./src/errors/",
      "@test": "./test/",
    },
  },
});
