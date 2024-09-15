export const runewarden = {
  collide: {
    id: "collide",
    fullName: "Collide",
    firstPerson:
      /^You charge at (?<target>.+?), slamming into \w+ and throwing \w+ back\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["runewarden"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  },
  onslaught: {
    id: "onslaught",
    fullName: "Onslaught",
    firstPerson:
      /^You unleash a ferocious onslaught on (?<target>.+?), relentlessly pounding \w+ with .+\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["runewarden"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  },
  bulwark: {
    id: "bulwark",
    fullName: "Bulwark",
    firstPerson:
      /^The runes on your armour flare brightly as you adopt a defensive stance\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["runewarden"],
    skill: "attainment",
    balance: "battlerage",
    tags: [],
    length: 3.0,
  },
  bulwark: {
    id: "bulwark",
    fullName: "Bulwark",
    firstPerson:
      /^You strike at (?<target>.+?)'s translucent shield with (?:a|an) .+?, drawing the outline of a rough rune that detonates, consuming the shield\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["runewarden"],
    skill: "attainment",
    balance: "battlerage",
    tags: [],
    length: 3.0,
  },
};

export default Object.values(runewarden);
