import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Reference-database site: the browsable skill/NPC explorer published at
// https://nexusunleashed.github.io/nexskills3/ and used as the local dev
// harness for the definitions in `src/base`.
//
// `base` has to match the GitHub Pages project path so the hashed asset URLs
// resolve under /nexskills3/ (this replaces the CRA `homepage` field).
// `outDir: "build"` is what the deploy workflow publishes.
export default defineConfig({
  plugins: [react()],
  base: "/nexskills3/",
  build: {
    outDir: "build",
    emptyOutDir: true,
    target: "es2020",
  },
  server: {
    open: true,
  },
});
