const barrow = [
  {
    user: "a giant spider",
    areaId: false,
    areaName: "The Darkenwood Barrow",
    firstPerson:
      /^A giant spider turns its backside to face you, spraying you with an assault of sticky webs that entangle your body\.$/,
    thirdPerson:
      /^A giant spider turns its backside to face (?<target>.+?), spraying \w+ with an assault of sticky webs that entangle \w+ body\.$/,
    tags: ["web"],
    length: 4.0,
  },
  {
    user: "a giant spider",
    areaId: false,
    areaName: "The Darkenwood Barrow",
    firstPerson:
      /^A giant spider scuttles towards you and sinks his sharp fangs into your flesh\.$/,
    thirdPerson:
      /^A giant spider scuttles towards (?<target>.+?) and sinks his sharp fangs into \w+ flesh\.$/,
    tags: ["damage", "loki"],
    length: 4.0,
  },
  {
    user: "a giant spider",
    areaId: false,
    areaName: "The Darkenwood Barrow",
    firstPerson:
      /^A giant spider kicks at you hard with his eight legs, each heavy blow landing with a crunch\.$/,
    thirdPerson:
      /^A giant spider kicks at (?<target>.+?) hard with his eight legs, each heavy blow landing with a crunch\.$/,
    tags: ["damage", "prone"],
    length: 4.0,
  },
  {
    user: "a decaying zombie",
    areaId: false,
    areaName: "The Darkenwood Barrow",
    firstPerson:
      /^A decaying zombie throws back his head and bellows a guttural, terrible moan which leaves your ears ringing and your soul reeling\.$/,
    thirdPerson: false,
    tags: ["damage", "aoe"],
    length: 4.0,
  },
  {
    user: "a decaying zombie",
    areaId: false,
    areaName: "The Darkenwood Barrow",
    firstPerson:
      /^A decaying zombie coughs loudly, expelling vile chunks of black tissue into your face\.$/,
    thirdPerson:
      /^A decaying zombie coughs loudly, expelling vile chunks of black tissue into (?<target>.+?)'s face\.$/,
    tags: ["damage", "nausea"],
    length: 4.0,
  },
  {
    user: "a decaying zombie",
    areaId: false,
    areaName: "The Darkenwood Barrow",
    firstPerson:
      /^A decaying zombie wraps his spindly fingers around your throat\. You choke and splutter in a vain attempt to catch your breath\.$/,
    thirdPerson:
      /^A decaying zombie wraps his spindly fingers around (?<target>.+?)'s throat\. \w+ chokes and splutters in a vain attempt to catch \w+ breath\.$/,
    tags: ["damage", "asthma"],
    length: 4.0,
  },
  {
    user: "a barrow bat",
    areaId: false,
    areaName: "The Darkenwood Barrow",
    firstPerson:
      /^A barrow bat draws blood as he rips his sharp claws into your flesh\.$/,
    thirdPerson:
      /^A barrow bat draws blood from (?<target>\w+?) as \w+ rips his sharp claws across \w+ flesh\.$/,
    tags: ["damage"],
    length: 4.0,
  },
  {
    user: "a barrow bat",
    areaId: false,
    areaName: "The Darkenwood Barrow",
    firstPerson:
      /^A barrow bat flies behind you, coming to land on your neck. Pain erupts in your shoulder as fangs pierce the soft skin\.$/,
    thirdPerson:
      /^A barrow bat flies behind (?<target>\w+?), coming to land on \w+ shoulder before biting hard into \w+ neck\.$/,
    tags: ["damage", "loki"],
    length: 4.0,
  },
  {
    user: "a barrow bat",
    areaId: false,
    areaName: "The Darkenwood Barrow",
    firstPerson:
      /^A barrow bat brings his flapping wings to bear against your head, the powerful impact leaving you stunned\.$/,
    thirdPerson:
      /^A barrow bat brings his flapping wings to bear against (?<target>\w+?)'s head, who appears stunned and dazed from the impact\.$/,
    tags: ["damage", "stun"],
    length: 4.0,
  },
  {
    user: "Vulkuz, Barrow-lord of the Darkenwood",
    areaId: false,
    areaName: "The Darkenwood Barrow",
    firstPerson:
      /^Vulkuz, Barrow-lord of the Darkenwood's wails ominously and the air around him shimmers\. Waves of pain overpower your mind\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 4.0,
  },
  {
    user: "Vulkuz, Barrow-lord of the Darkenwood",
    areaId: false,
    areaName: "The Darkenwood Barrow",
    firstPerson:
      /^Waves of cold radiate from Vulkuz, Barrow-lord of the Darkenwood and you feel your body instantly lose all warmth\.$/,
    thirdPerson:
      /^(?<target>\w+?) shudders as waves of cold emanating from Vulkuz, Barrow-lord of the Darkenwood overtake \w+\.$/,
    tags: ["damage", "shivering"],
    length: 4.0,
  },
  {
    user: "Vulkuz, Barrow-lord of the Darkenwood",
    areaId: false,
    areaName: "The Darkenwood Barrow",
    firstPerson:
      /^Emanating laughter which is a mockery of human mirth, Vulkuz, Barrow-lord of the Darkenwood sends tendrils of shadow to afflict all around him\.$/,
    thirdPerson: false,
    tags: ["damage", "loki"],
    length: 4.0,
  },
  {
    user: "Vulkuz, Barrow-lord of the Darkenwood",
    areaId: false,
    areaName: "The Darkenwood Barrow",
    firstPerson:
      /^Vulkuz, Barrow-lord of the Darkenwood brushes a skeletal hand against your body, which withers at his touch\.$/,
    thirdPerson:
      /^Vulkuz, Barrow-lord of the Darkenwood brushes a skeletal hand against (?<target>\w+?)'s body which withers at his touch\.$/,
    tags: ["damage", "paralyis", "brokenrightarm"],
    length: 4.0,
  },
  {
    user: "Vulkuz, Barrow-lord of the Darkenwood",
    areaId: false,
    areaName: "The Darkenwood Barrow",
    firstPerson:
      /^Vulkuz, Barrow-lord of the Darkenwood's eyes flash with menace as he mutters a curse under his breath\. Agony courses through your body and your flesh begins to wither and die\.$/,
    thirdPerson:
      /^Vulkuz, Barrow-lord of the Darkenwood's eyes flash with menace as he mutters a curse under his breath\. A look of intolerable agony washes over (?<target>\w+?), and \w+ flesh begins to wither and die before your eyes\.$/,
    tags: ["damage", "slickness", "sensitivity"],
    length: 4.0,
  },
];

export default barrow;
