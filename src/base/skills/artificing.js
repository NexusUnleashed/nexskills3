import { SkillDefinition } from "../models/SkillDefinition";
const artificing = {
  scintilla: new SkillDefinition({
    id: "scintilla",
    fullName: "Scintilla",
    firstPerson:
      /^As you point a primordial staff at (?<target>.+?), a scintilla of bright, burning light shoots out, striking \w+ with focused elemental power\.$/,
    secondPerson:
      /^As (?<user>\w+?) points \w+ staff at you, a scintilla of bright, burning light shoots out, striking you with focused elemental power\.$/,
    thirdPerson:
      /^As (?<user>\w+?) points a primordial staff at (?<target>.+?), a scintilla of bright, burning light shoots out, striking \w+ with focused elemental power\.$/,
    profession: ["magi"],
    skill: "artificing",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    affs: [],
    info: false,
    length: 2.0,
  }),
  //false
  //A raging heat ignites within your chest, and flames burst into being all over your body.
  //Flames ignite all over the body of (?<target>\w+?), fanned to intensity in an instant.
  horripilation: new SkillDefinition({
    id: "horripilation",
    fullName: "Horripilation",
    firstPerson:
      /^You point a primordial staff at (?<target>.+?) and \w+ screams in pain as \w+ skin begins to freeze and crack\.$/,
    secondPerson:
      /^(?<user>\w+?) points an elemental staff at you and you scream in pain as your skin begins to freeze and crack\.$/,
    thirdPerson:
      /^(?<user>\w+?) points a primordial staff at (?<target>.+?), and \w+ screams in pain as \w+ skin begins to freeze and crack\.$/,
    profession: ["magi"],
    skill: "artificing",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    affs: [],
    info: false,
    length: 2.0,
  }),
  //Even as the wave of cold dissipates, you retain control over the fluid and send it spinning through the air to bind (?<target>.+?) in a watery web.
  //Even as the wave of cold passes over you (?<user>\w+?) twitches \w+ staff, and a web of fluid spins into being to bind you.
  //Even as the freezing wave passes over (?<target>\w+?) (?<user>\w+?) twitches \w+ staff, and a web of water spins into being to bind \w+ in place.
  lightning: new SkillDefinition({
    id: "lightning",
    fullName: "Lightning",
    firstPerson:
      /^You point a primordial staff at (?<target>.+?), and cause a bolt of lightning to cascade out and roar screaming into \w+.\.$/,
    secondPerson:
      /^(?<user>\w+?) points a primordial staff at you, and a bolt of lightning cascades out and roars, screaming, into your body\.$/,
    thirdPerson:
      /^(?<user>\w+?) points a primordial staff at (?<target>.+?), and a bolt of lightning cascades out and roars, screaming, into \w+ body\./,
    profession: ["magi"],
    skill: "artificing",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    affs: [],
    info: false,
    length: 2.0,
  }),
  //false
  //As the lightning courses over and through you, your thoughts scatter and the world descends into a sluggish haze.
  //As the lightning bolt courses through (?<target>\w+?), a strangely blank expression descends over \w+ features.
  dissolution: new SkillDefinition({
    id: "dissolution",
    fullName: "Dissolution",
    firstPerson:
      /^You point a primordial staff at (?<target>.+?), and a stream of bile-like acid streams out, covering \w+, who screams in agony\.$/,
    secondPerson:
      /^(?<user>\w+?) points a primordial staff at you, and a stream of bile-like acid streams out, covering you with agonizing, burning acid\.$/,
    thirdPerson:
      /^(?<user>\w+?) points a primordial staff at (?<target>.+?), and a stream of bile-like acid streams out, covering \w+ in the agonizing fluid\.$/,
    profession: ["magi"],
    skill: "artificing",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    affs: [],
    info: false,
    length: 2.0,
  }),

  efreeti: new SkillDefinition({
    id: "efreeti",
    fullName: "Efreeti",
    secondPerson:
      /^A fiery efreeti spins into you, causing you to burst into flame\.$/,
    thirdPerson:
      /^(?<target>\w+) bursts into flame as a fiery efreeti spins into \w+\.$/,
    profession: ["magi"],
    skill: "artificing",
    balance: "free",
    tags: ["pve", "damage"],
    affs: [],
    info: "burning",
    length: 5.0,
  }),
  stoneback: new SkillDefinition({
    id: "stoneback",
    fullName: "Stoneback",
    secondPerson:
      /^A hulking stoneback makes a deep rumbling sound from within itself, and a magical shield flares into being to surround you\.$/,
    thirdPerson:
      /^A hulking stoneback makes a deep rumbling sound from deep within itself, and a magical shield flares into being surrounding (?<target>\w+)\.$/,
    profession: ["magi"],
    skill: "artificing",
    balance: "free",
    tags: ["pve", "damage"],
    affs: [],
    info: "shield",
    length: 5.0,
  }),
};

export default Object.values(artificing);