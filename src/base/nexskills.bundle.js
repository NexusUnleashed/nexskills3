// IIFE bundle entry for the published `dist/nexskills.min.js`.
//
// The bundle exports nothing: importing `./nexSkills` installs
// `globalThis.nexSkills`, which is the only surface the Nexus host consumes.
// Keeping the entry export-free stops rollup from wrapping the IIFE in a
// second global assignment that would shadow that object.
import "./nexSkills";
