export default propagation = [
  {
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
];
