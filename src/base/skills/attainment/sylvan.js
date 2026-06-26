import { SkillDefinition } from "../../models/SkillDefinition";
export const sylvan = {
  thornpierce: new SkillDefinition({
    id: "thornpierce",
    fullName: "Thornpierce",
    firstPerson:
      /^A thorny vine reaches out from you and pierces through (?<target>.+?)'s translucent shield, causing it to fade\.$/,
    profession: ["sylvan"],
    skill: "attainment",
    balance: "free",
    info: "raze",
    tags: ["pve", "raze"],
    length: 3,
  }),
  torrent: new SkillDefinition({
    id: "torrent",
    fullName: "Torrent",
    firstPerson:
      /^(?<target>.+?) coughs and splutters as you channel a gout of water at \w+ face\.$/,
    profession: ["sylvan"],
    skill: "attainment",
    balance: "free",
    tags: ["pve", "damage"],
    length: 0,
  }),
  rockshot: new SkillDefinition({
    id: "rockshot",
    fullName: "Rockshot",
    firstPerson:
      /^You form a small pebble, then channel air to fling it violently at (?<target>.+?)'s head, causing \w+ to look dazed\.$/,
    profession: ["sylvan"],
    skill: "attainment",
    balance: "free",
    info: "Amensia",
    tags: ["pve", "aff"],
    affs: ["amensia"],
    length: 0,
  }),
  stonevine: new SkillDefinition({
    id: "stonevine",
    fullName: "Stonevine",
    firstPerson:
      /^You summon a great vine to wrap itself around (?<target>.+?), then channel the element of earth into it, causing it to become rock hard and shatter as it constricts around \w+\.$/,
    profession: ["sylvan"],
    skill: "attainment",
    balance: "free",
    info: false,
    tags: ["pve", "damage"],
    affs: [],
    length: 0,
  }),
  leechroot: new SkillDefinition({
    id: "leechroot",
    fullName: "Leechroot",
    firstPerson:
      /^A deadly root flies from your hand and burrows into (?<target>.+?)'s flesh, but is unable to find sufficient sustenance\.$/,
    profession: ["sylvan"],
    skill: "attainment",
    balance: "free",
    info: false,
    tags: ["pve", "damage"],
    affs: [],
    length: 0,
  }),
};
export default Object.values(sylvan);