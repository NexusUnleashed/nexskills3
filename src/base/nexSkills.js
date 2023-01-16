/* global eventStream, GMCP, nexGui */

import { startUp } from "./mongo";

export const classList = [
  "Alchemist",
  "Apostate",
  "Bard",
  "Blademaster",
  "Depthswalker",
  "Dragon",
  "Druid",
  "Infernal",
  "Jester",
  "Magi",
  "Monk",
  "Occultist",
  "Paladin",
  "Pariah",
  "Priest",
  "Psion",
  "Runewarden",
  "Sentinel",
  "Serpent",
  "Shaman",
  "Sylvan",
  "Unnamable",
  "Air Elemental Lord",
  "Earth Elemental Lord",
  "Fire Elemental Lord",
  "Water Elemental Lord",
];
const skills = [
  {
    id: "warp",
    fullName: "Warp",
    firstPerson:
      /^You reach out and clench a fist before (?<target>.+?), who screams and doubles over in agony as \w+ skin suddenly bubbles with gangrenous growths\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) reaches out and clenches a fist before (?<target>.+?), who screams and doubles over in agony as \w+ skin suddenly bubbles with gangrenous growths\.$/,
    profession: "occultist",
    skill: "occultism",
    balance: "equilibrium",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "gut",
    fullName: "Gut",
    firstPerson:
      /^You rip into (?<target>.+?) with your massive, deadly claws\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) rips into (?<target>.+?) with \w+ massive, deadly claws\.$/,
    profession: "dragon",
    skill: "dragoncraft",
    balance: "balance",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "incantation",
    fullName: "Incantation",
    firstPerson:
      /^Drawing from the well of your puissance, you invoke a dramatic chant in the dragon tongue. Your voice resonates with each word, culminating in a wave of magical energy that you bend to your will and thrust towards (?<target>.+), bombarding \w+ with the ancient power\.$/,
    secondPerson: false,
    thirdPerson:
      /^A resonant vibration emanates from (?<user>\w+) as \w+ invokes a rumbling, sonorous chant in the dragon tongue. As the sound increases, (?<target>.+?) jerks violently, \w+ body wracked by an unseen force\.$/,
    profession: "dragon",
    skill: "dragoncraft",
    balance: "equilibrium",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "glaciate",
    fullName: "Glaciate",
    firstPerson:
      /^You breathe a column of icy air at (?<target>.+?)'s head, stunning \w+\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: ["stun"],
    length: 3.0,
  },
  {
    id: "frostrive",
    fullName: "Frostrive",
    firstPerson:
      /^(?<target>.+?)'s translucent shield cracks and fades away as you breathe an icy blast at it\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "override",
    fullName: "Override",
    firstPerson:
      /^You barrel into (?<target>.+?) and knock \w+ to the ground before stomping over \w+ prone form\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "tailsmash",
    fullName: "Tailsmash",
    firstPerson:
      /^You flick your tail at (?<target>.+?), dismissively brushing aside the paltry shield protecting \w+\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "ague",
    fullName: "Ague",
    firstPerson:
      /^You let loose a steady stream of cold air around (?<target>.+?), who begins to shiver uncontrollably\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "dragonchill",
    fullName: "Dragonchill",
    firstPerson:
      /^You form small chunks of ice in your enormous maw, then spit them at (?<target>.+?) in a barrage\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "frostwave",
    fullName: "Frostwave",
    firstPerson: /^You breathe a wave of icy air at (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "corrode",
    fullName: "Corrode",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) opens \w+ gigantic maw and spews acid on (?<target>.+?)\. \w+ is too clumsy to dodge and is covered in the corrosive slime\.$/,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "dragonblaze",
    fullName: "Dragonblaze",
    firstPerson:
      /^You breathe a long torrent of flame at (?<target>.+?), igniting \w+ skin\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "dragonblazeTick",
    fullName: "Dragonblaze tick",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<target>.+?) is wracked with pain as the flames of dragonbreath wreathe over \w+ skin\.$/,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "scorch",
    fullName: "Scorch",
    firstPerson:
      /^You blacken (?<target>.+?)'s flesh with a quick blast of flame, slowing \w+ healing process\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "overwhelm",
    fullName: "Overwhelm",
    firstPerson:
      /^You charge quickly at (?<target>.+?), throwing your mighty form into \w+ and sending \w+ staggering back\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "dragontaunt",
    fullName: "Dragontaunt",
    firstPerson:
      /^You slap your tail on the ground while growling at (?<target>.+?), forcing \w+ to recklessly attack\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "flamebath",
    fullName: "Flamebath",
    firstPerson:
      /^You blast (?<target>.+?) with a bath of flame, but \w+ is able to avoid the brunt of the blast\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "melt",
    fullName: "Melt",
    firstPerson:
      /^You breathe a white-hot blast of flame at (?<target>.+?) and burn away \w+ translucent shield\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "dragon",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "harry",
    fullName: "Harry",
    firstPerson:
      /^Raising your hands in the air, you summon horrific visions to torment (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "occultist",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "harryTick",
    fullName: "Harry tick",
    firstPerson:
      /^(?<target>.+?) is tormented by horrific visions from the Plane of Chaos\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "occultist",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "chaosgate",
    fullName: "Chaosgate",
    firstPerson:
      /^You cup your hands together and fling them outwards, sending a spiral of shimmering portals into (?<target>.+?)'s body\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "occultist",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
  {
    id: "stagnate",
    fullName: "Stagnate",
    firstPerson:
      /^You wave one arm at (?<target>.+?), causing a small time rift to form around her\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: "occultist",
    skill: "attainment",
    balance: "battlerage",
    afflictions: [],
    length: 3.0,
  },
];

//You can use another Battlerage ability again. Available abilities: Overwhelm
//You can use Dragonblaze again.
//The flames of dragonbreath fade from a fortress guardsman's skin.
//A knight of the Siroccian Order's blackened flesh slowly knits together.

const checkSkillsOld = (line) => {
  const text = line;
  let result = false;

  for (let i = 0; i < skills.length; i++) {
    const element = skills[i];
    const checks = [];
    if (
      element.profession === GMCP.Char.Status.class.toLowerCase() ||
      GMCP.Char.Status.class.toLowerCase().indexOf(element.profession) > -1
    ) {
      checks.push(element.firstPerson);
    }
    checks.push(element.secondPerson, element.thirdPerson);

    for (const check of checks) {
      result = text.match(check);
      if (result) {
        break;
      }
    }

    if (result) {
      result.groups.skill = element.id;
      eventStream.raiseEvent("nexSkillMatch", {
        matches: result,
        skill: element,
      });
      break;
    }
  }

  return result ? result : false;
};

const checkSkills = (text) => {
  let result = false;
  let skill = false;

  for (let i = 0; i < skills.length; i++) {
    skill = skills[i];
    if (GMCP.Char.Status.class.toLowerCase().indexOf(skill.profession) > -1) {
      result = text.match(skill.firstPerson);
      if (result) {
        result.groups.user = "self";
        break;
      }
    }

    result = text.match(skill.secondPerson);
    if (result) {
      result.groups.target = "self";
      break;
    }

    result = text.match(skill.thirdPerson);
    if (result) {
      break;
    }
  }

  if (result) {
    console.log({
      matches: result,
      skill: skill,
    });
    eventStream.raiseEvent("nexSkillMatch", {
      matches: result,
      skill: skill,
    });
  }

  return result ? result : false;
};

const nexGuiMsgReplacement = ({ matches, skill }) => {
  nexGui.msg.actionMsg(
    matches.groups.user || "Self",
    skill.id,
    matches.groups.target || "Self"
  );
};

if (typeof eventStream !== "undefined") {
  eventStream.removeListener("nexSkillMatch", "nexGuiMsgReplacement");
  eventStream.registerEvent("nexSkillMatch", nexGuiMsgReplacement);
}

export const nexSkills = {
  skills: skills,
  checkSkills: checkSkills,
  startUp: startUp,
};
