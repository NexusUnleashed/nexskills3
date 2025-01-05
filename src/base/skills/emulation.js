const emulation = {
  wavesurge: {
    id: "wavesurge",
    fullName: "Wavesurge",
    firstPerson:
      /^You summon up the might of the waves, a great surge of water lifting you up and hurling you away\.$/,
    secondPerson: false,
    thirdPerson:
      /^Mystic waters rise about (?<user>\w+?), the frothing crest of a surging wave carrying \w+ away to the (?<info>\w+?)\.$/,
    profession: ["psion"],
    skill: "emulation",
    balance: "equilibrium",
    tags: ["affs"],
    affs: ["lightbind"],
    length: 2.8,
    info: false,
  },
  destruction: {
    id: "destruction",
    fullName: "Destruction",
    firstPerson:
      /^You shape the elemental forces at your disposal into a devastating manifestation, directing a .+? to annihilate (?<target>\w+?)\.$/,
    //You shape the elemental forces at your disposal into a devastating manifestation, directing a raging inferno to annihilate Pamxen.
    //You shape the elemental forces at your disposal into a devastating manifestation, directing a raging torrent of ice to annihilate Pamxen.
    //You shape the elemental forces at your disposal into a devastating manifestation, directing a bar of crackling lightning to annihilate Pamxen.
    secondPerson:
      /^A .+? you, your body ravaged relentlessly under the onslaught\.$/,
    //A raging torrent of ice rips into you, your body ravaged relentlessly under the onslaught.
    //A bar of crackling lightning transfixes you, your body ravaged relentlessly under the onslaught.
    //A raging inferno rolls over you, your body ravaged relentlessly under the onslaught.
    thirdPerson:
      /^(?<user>\w+?) cups \w+ hands in front of \w+, a .+? coalescing before \w+ and streaking away to the (?<info>\w+?)\.$/,
    //Khaseem cups his hands in front of himself, a raging torrent of ice coalescing before him and streaking away to the southwest.
    //Khaseem cups his hands in front of himself, a bar of crackling lightning coalescing before him and streaking away to the southeast.
    //Khaseem cups his hands in front of himself, a raging inferno coalescing before him and streaking away to the southeast.
    profession: ["psion"],
    skill: "emulation",
    balance: "equilibrium",
    tags: ["los"],
    affs: [],
    length: 3.5,
    info: false,
  },
  rupture: {
    id: "rupture",
    fullName: "Rupture",
    firstPerson:
      /^Your vision sharpens, allowing you to perceive the locations of every vein and artery that lies beneath the skin\.$/,
    secondPerson: false,
    thirdPerson: /^The eyes of (?<user>\w+?) flash with a golden glow\.$/,
    profession: ["psion"],
    skill: "emulation",
    balance: "equilibrium",
    tags: ["def"],
    affs: [],
    length: 2.3,
    info: false,
  },
  clarity: {
    id: "clarity",
    fullName: "Clarity",
    firstPerson:
      /^A total focus overcomes you; the mundanity of everyday distractions unable to penetrate your clarity\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["psion"],
    skill: "emulation",
    balance: "equilibrium",
    tags: ["def"],
    affs: [],
    length: 2.3,
    info: false,
  },
  painshiftStart: {
    id: "painshiftStart",
    fullName: "Painshift",
    firstPerson:
      /^Fixing your gaze upon (?<target>\w+?), you begin the process of forging a sympathetic bond between \w+ and you\.$/,
    secondPerson:
      /^A look of deadly menace flashes in the eyes of (?<user>\w+?) as \w+ turns \w+ attention towards you\.$/,
    thirdPerson:
      /^A look of deadly menace flashes in the eyes of (?<user>\w+?) as \w+ turns \w+ attentions towards (?<target>\w+?)\.$/,
    profession: ["psion"],
    skill: "emulation",
    balance: "equilibrium",
    tags: ["def"],
    affs: [],
    length: 2.3,
    info: "Start",
  },
  painshiftActive: {
    id: "painshiftActive",
    fullName: "Painshift",
    firstPerson:
      /^The sympathetic bond snaps into place, and you know with undeniable certainty that your suffering shall befall (?<target>\w+?)\.$/,
    secondPerson:
      /^You feel a sudden unease, the knowledge that something has shifted undeniably but the exact nature escaping you\.$/,
    thirdPerson:
      /^A rope of light lashes out from (?<user>\w+?), binding \w+? to (?<target>\w+?)\.$/,
    profession: ["psion"],
    skill: "emulation",
    balance: "equilibrium",
    tags: ["def"],
    affs: [],
    length: 2.3,
    info: "Active",
  },
  lightbind: {
    id: "lightbind",
    fullName: "Lightbind",
    firstPerson:
      /^You fashion chains of golden light and cast them out to ensnare (?<target>\w+?)\.$/,
    secondPerson:
      /^Golden chains of light coalesce in the hands of (?<user>\w+?), and \w+ casts them out to bind you to \w+\.$/,
    thirdPerson:
      /^Golden chains of light coalesce in the hands of (?<user>\w+?), and \w+ casts them out to bind (?<target>\w+?) to \w+\.$/,
    //Golden chains of light coalesce in the hands of (Sephor), and he casts them out to bind (Svarog) to him.
    profession: ["psion"],
    skill: "emulation",
    balance: "equilibrium",
    tags: ["affs"],
    affs: ["lightbind"],
    length: 2.8,
    info: false,
  },
};

export default Object.values(emulation);
