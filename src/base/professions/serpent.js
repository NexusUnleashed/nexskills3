export const actions = [
    //#region Subterfuge
    {
        id: "garrote",
        fullName: "Garrote",
        firstPerson: false,
        secondPerson: false,
        thirdPerson: /^(?<user>\w+?) slips behind (?<target>.+?) and garrotes \w+ with \w+ whip\.$/,
        profession: ["serpent"],
        skill: "subterfuge",
        balance: "balance",
        tags: ["damage"],
        length: 3.0,
    },
    //#endregion
    //#region Venom
    {
        id: "garrote",
        fullName: "Garrote",
        firstPerson: false,
        secondPerson: false,
        thirdPerson: /^(?<user>\w+?) hunches \w+ shoulders and lets out a soft hiss\.$/,
        profession: ["serpent"],
        skill: "subterfuge",
        balance: "balance",
        tags: ["damage"],
        length: 3.0,
    },
    //#endregion
];
