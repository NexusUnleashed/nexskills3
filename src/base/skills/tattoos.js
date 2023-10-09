//A nearly invisible magical shield forms around a sturdy troll woman.
export const actions = [
    {
        id: "shield",
        fullName: "Shield",
        firstPerson: /^You touch the tattoo and a nearly invisible magical shield forms around you\.$/,
        secondPerson: false,
        thirdPerson:
            /^A nearly invisible magical shield forms around (?<user>.+?)\.$/,
        profession: ["general"],
        skill: "tattoos",
        balance: "equilibrium",
        multiLine: 1,
        tags: [],
        length: 4.0,
    },
];