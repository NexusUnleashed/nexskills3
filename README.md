# nexSkills

## Information and Resoureces:

https://nexusunleashed.github.io/nex-files/docs/eventStream/nexSkills/introduction

## Reference database

https://nexusunleashed.github.io/nexskills3/

## Development

Built with [Vite](https://vite.dev/). There are two independent build targets:

| Command              | Output                  | What it is                                          |
| -------------------- | ----------------------- | --------------------------------------------------- |
| `npm run build`      | `dist/nexskills.min.js` | The published IIFE bundle loaded by the Nexus client |
| `npm run build:dev`  | `dist/nexskills.js`     | The same bundle, unminified, for debugging           |
| `npm run build:site` | `build/`                | The reference-database site deployed to GitHub Pages |

Other scripts:

- `npm run dev` — dev server for the reference site (`vite.config.site.js`)
- `npm test` / `npm run test:watch` — Vitest
- `npm run lint` — ESLint (flat config)
- `npm run verify` — lint, test, and both builds
