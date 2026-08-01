import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // The definition tests drive `window.GMCP` / `window.eventStream` /
    // `window.nexusclient` stubs, so they need a DOM global.
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.{test,spec}.{js,jsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/base/**"],
    },
  },
});
