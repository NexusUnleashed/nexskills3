import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import vitest from "@vitest/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";

// Host globals injected by the Nexus client. The definitions in `src/base`
// read them directly rather than importing anything.
const hostGlobals = {
  eventStream: "readonly",
  GMCP: "readonly",
  nexAction: "readonly",
  nexGui: "readonly",
  nexMap: "readonly",
  nexSkills: "readonly",
  nexSys: "readonly",
  nexusclient: "readonly",
};

export default defineConfig([
  globalIgnores(["build", "coverage", "dist", "node_modules"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...hostGlobals,
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactPlugin.configs.flat["jsx-runtime"].rules,
      ...reactHooksPlugin.configs.recommended.rules,

      // `semi` was the only rule the old .eslintrc enforced; keep it hard.
      semi: "error",
      "no-redeclare": ["error", { builtinGlobals: false }],

      // The reference site has never used PropTypes.
      "react/prop-types": "off",

      // Everything below reports on code that predates this config: the CRA
      // setup linted nothing but `semi`, so switching these on as errors would
      // block the build on findings unrelated to the toolchain. They stay
      // visible as warnings until they are triaged — `no-dupe-keys` and the
      // `no-undef` hits in particular are real defects, not style noise.
      "no-dupe-keys": "warn",
      "no-undef": "warn",
      "no-unreachable": "warn",
      "no-useless-escape": "warn",
      "no-unused-vars": [
        "warn",
        {
          args: "none",
          varsIgnorePattern: "^[A-Z_]",
        },
      ],
    },
  },
  {
    files: ["*.config.js"],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ["**/*.{test,spec}.{js,jsx}"],
    plugins: { vitest },
    rules: {
      ...vitest.configs.recommended.rules,
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  },
]);
