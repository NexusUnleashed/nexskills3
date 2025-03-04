import { inBlock } from "../utilities";

const aeonics = {
  accelerate: {
    id: "accelerate",
    fullName: "Accelerate",
    firstPerson:
      /^You accelerate your body's ability to purge afflictions a thousandfold\.$/,
    secondPerson: false,
    thirdPerson:
      /^A look of relief comes over (?<target>\w+) as \w+ grows less pale\.$/,
    profession: ["depthswalker"],
    skill: "aeonics",
    balance: "equilibrium",
    tags: ["cure"],
    affs: [],
    length: 2.5,
    reaction: (action) => {
      if (inBlock(`${action.target} grows older before your eyes.`)) {
        action.info = "Boosted";
      }
    },
  },
  chronoAeonStrip: {
    id: "chronoAeonStrip",
    fullName: "Chrono Aeon Strip",
    firstPerson:
      /^Directing your will upon (?<target>\w+), you tear away the protection granted to \w+ by the speed elixir\.$/,
    secondPerson:
      /^As the gaze of (?<user>\w+) falls upon you, you feel your speed enhancements torn away\.$/,
    thirdPerson:
      /^As the gaze of (?<user>\w+) falls upon (?<target>\w+), \w+ stumbles but seems to recover without visible issue\.$/,
    profession: ["depthswalker"],
    skill: "aeonics",
    balance: "equilibrium",
    affs: [],
    tags: [],
    info: "Speed strip",
    length: 3.75,
  },
  chronoAeon: {
    id: "chronoAeon",
    fullName: "Chrono Aeon",
    firstPerson:
      /^Invoking the might of Aeon, you bring down a curse of terrible proportions upon (?<target>\w+)\.$/,
    secondPerson:
      /^(?<user>\w+) slashes a hand in your direction and you feel yourself suddenly slow down to a terrifying degree\.$/,
    thirdPerson:
      /^(?<user>\w+) slashes \w+ hand at (?<target>\w+), who suddenly appears to be moving in slow motion\.$/,
    profession: ["depthswalker"],
    skill: "aeonics",
    balance: "equilibrium",
    affs: ["aeon"],
    tags: ["aff"],
    info: false,
    length: 3.75,
  },
  //chrono loop
  //Bending your will upon a scythe of shadows, you corrupt the weapon's timestream.
  timeloop: {
    id: "timeloop",
    fullName: "Timeloop",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^Grey fog begins to rise from the suddenly panicked-looking (?<target>\w+)\.$/,
    profession: ["depthswalker"],
    skill: "aeonics",
    balance: "free",
    affs: ["timeloop"],
    tags: ["aff"],
    length: 0,
  },
  timeloopProc: {
    id: "timeloopProc",
    fullName: "Timeloop Proc",
    firstPerson: false,
    secondPerson: false,
    thirdPerson: /^A grey miasma flares around (?<target>\w+)\.$/,
    profession: ["depthswalker"],
    skill: "aeonics",
    balance: "free",
    affs: [],
    tags: ["aff"],
    length: 0,
  },
};
export default Object.values(aeonics);
