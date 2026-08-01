import { defineConfig } from "vite";

// Library build for the published Nexus bundle.
//
// Two modes share one config. Production (default) emits the minified
// `dist/nexskills.min.js`. `--mode development` emits an unminified
// `dist/nexskills.js` for debugging — same IIFE, same entry, names intact.
//
// `src/base/**` has no package dependencies, so there is nothing to mark
// external here: the definitions reach the host through the `eventStream`,
// `GMCP`, and `nexusclient` globals rather than through imports.
//
// The reference site that ships to GitHub Pages is a separate build; see
// vite.config.site.js.
export default defineConfig(({ mode }) => {
  const dev = mode === "development";
  return {
    define: {
      "process.env.NODE_ENV": JSON.stringify(dev ? "development" : "production"),
    },
    build: {
      outDir: "dist",
      emptyOutDir: false, // dist/package.json is checked in alongside the bundle
      copyPublicDir: false, // the site build owns public/
      target: "es2020",
      lib: {
        entry: "src/base/nexskills.bundle.js",
        name: "nexSkills",
        fileName: () => (dev ? "nexskills.js" : "nexskills.min.js"),
        formats: ["iife"],
      },
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
        },
      },
      minify: dev ? false : "terser",
      terserOptions: {
        ecma: 2020,
        mangle: true,
        keep_fnames: true,
        keep_classnames: true,
        compress: {
          inline: 0,
          reduce_funcs: false,
          reduce_vars: false,
          passes: 1,
          keep_fargs: true,
        },
      },
    },
  };
});
