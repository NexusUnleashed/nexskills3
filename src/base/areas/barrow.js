export const barrow = [
  {
    user: "a giant spider",
    areaId: [],
    areaName: "The Darkenwood barrow",
    firstPerson:
      /^A giant spider turns its backside to face you, spraying you with an assault of sticky webs that entangle your body\.$/,
    thirdPerson:
      /^A giant spider turns its backside to face (?<target>.+?), spraying \w+ with an assault of sticky webs that entangle \w+ body\.$/,
    tags: ["web"],
    length: 4.0,
  },
  {
    user: "a giant spider",
    areaId: [],
    areaName: "The Darkenwood barrow",
    firstPerson:
      /^A giant spider scuttles towards you and sinks his sharp fangs into your flesh\.$/,
    thirdPerson:
      /^A giant spider scuttles towards (?<target>.+?) and sinks his sharp fangs into \w+ flesh\.$/,
    tags: ["damage", "loki"],
    length: 4.0,
  },
  {
    user: "a giant spider",
    areaId: [],
    areaName: "The Darkenwood barrow",
    firstPerson:
      /^A giant spider kicks at you hard with his eight legs, each heavy blow landing with a crunch\.$/,
    thirdPerson:
      /^A giant spider kicks at (?<target>.+?) hard with his eight legs, each heavy blow landing with a crunch\.$/,
    tags: ["damage", "prone"],
    length: 4.0,
  },
  {
    user: "a decaying zombie",
    areaId: [],
    areaName: "The Darkenwood barrow",
    firstPerson:
      /^A decaying zombie throws back his head and bellows a guttural, terrible moan which leaves your ears ringing and your soul reeling\.$/,
    thirdPerson: false,
    tags: ["damage", "aoe"],
    length: 4.0,
  },
  {
    user: "a decaying zombie",
    areaId: [],
    areaName: "The Darkenwood barrow",
    firstPerson:
      /^A decaying zombie coughs loudly, expelling vile chunks of black tissue into your face\.$/,
    thirdPerson:
      /^A decaying zombie coughs loudly, expelling vile chunks of black tissue into (?<target>.+?)'s face\.$/,
    tags: ["damage", "nausea"],
    length: 4.0,
  },
  {
    user: "a decaying zombie",
    areaId: [],
    areaName: "The Darkenwood barrow",
    firstPerson:
      /^A decaying zombie wraps his spindly fingers around your throat\. You choke and splutter in a vain attempt to catch your breath\.$/,
    thirdPerson:
      /^A decaying zombie wraps his spindly fingers around (?<target>.+?)'s throat\. \w+ chokes and splutter in a vain attempt to catch \w+ breath\.$/,
    tags: ["damage", "asthma"],
    length: 4.0,
  },
  {
    user: "a decaying zombie",
    areaId: [],
    areaName: "The Darkenwood barrow",
    firstPerson:
      /^Vulkuz, Barrow-lord of the Darkenwood's wails ominously and the air around him shimmers\. Waves of pain overpower your mind\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 4.0,
  },
];
