export const propagation = {
  thornrend: {
    id: "thornrend",
    fullName: "Thornrend",
    firstPerson:
      /^You command the razor-edged thorny vines around you to lash out and rend the flesh of (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["sylvan"],
    skill: "propagation",
    balance: "equilibrium",
    multiLine: 0,
    tags: ["pve", "damage"],
    length: 3,
  },
};

export default Object.values(propagation);
