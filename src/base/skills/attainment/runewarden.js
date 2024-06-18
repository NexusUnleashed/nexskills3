export const runewarden = {
  //#region Attainment
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
  //#endregion
};

export default Object.values(runewarden);
