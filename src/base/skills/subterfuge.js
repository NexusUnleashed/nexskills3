export const subterfuge = {
  garrote: {
    id: "garrote",
    fullName: "Garrote",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) slips behind (?<target>.+?) and garrotes \w+ with \w+ whip\.$/,
    profession: ["serpent"],
    skill: "subterfuge",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 3.0,
  },
  doublestab: {
    id: "doublestab",
    fullName: "Double Stab",
    firstPerson: /^(?<user>\w+) quickly pricks you with \w+ dirk\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["serpent"],
    skill: "subterfuge",
    balance: "balance",
    tags: [],
    length: 2.8,
  },
  flay: {
    id: "flay",
    fullName: "Flay",
    firstPerson:
      /^With fluid grace, (?<user>\w+) snaps \w+ wrist, bringing .+? back to crack viciously into you\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["serpent"],
    skill: "subterfuge",
    balance: "balance",
    tags: [],
    length: 2.0,
  },
  lightwall: {
    id: "lightwall",
    fullName: "Lightwall",
    firstPerson:
      /^(?<user>\w+) forms a ball of light in \w+ palm and hurls it (?<dir>\w+)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["serpent"],
    skill: "subterfuge",
    balance: "balance",
    tags: [],
    length: 2.0,
    reaction(action) {
      action.info = action.dir;
    },
  },
};
//Thato forms a ball of light in her palm and hurls it southwards.
//Your left foot explodes in white hot pain as an arrow slams into it.
//With fluid grace, Thato snaps her wrist, bringing a serpentine, steel-tipped whip back to crack viciously into you.
export default Object.values(subterfuge);
