const composition = {
  paean: {
    id: "paean",
    fullName: "Paean",
    firstPerson:
      /^Your paean slams into (?<target>\w+) with all the weight of history's greatest triumphs\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["bard"],
    skill: "composition",
    balance: false,
    tags: [],
    affs: false,
    info: false,
    length: false,
  },
};

export default Object.values(composition);
