export default mannamot = [
  {
    user: "a greater air elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater air elemental slices at you with its spear, sending a lash of hardened air slicing into you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  {
    user: "a greater air elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater air elemental stabs its spear into your gut, sending electricity coursing through your body\.$/,
    thirdPerson: false,
    tags: ["damage", "loki", "epilepsy"],
    length: 3.0,
  },
  {
    user: "a greater air elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater air elemental whirls its spear faster than your eye can follow, creating a whirlwind that sends nearby objects flying and batters everything within its reach\.$/,
    thirdPerson: false,
    tags: ["damage", "brokenleftleg"],
    length: 3.0,
  },
  {
    user: "a greater water elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^The torso of a greater water elemental bursts open to reveal several vicious piranhas, flying at you with jaws open to bite and tear with vicious abandon\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  {
    user: "a greater water elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^Raising its arm towards you, a greater water elemental sends a torrent of freezing water to batter your body\.$/,
    thirdPerson: false,
    tags: ["damage", "lethargy"],
    length: 3.0,
  },
  {
    user: "a greater water elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^The outermost layer of a greater water elemental's icy coating violently shatters, sending thousands of icy shards in every direction\.$/,
    thirdPerson: false,
    tags: ["damage", "paralysis"],
    length: 3.0,
  },
  {
    user: "a greater water elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater water elemental rears back and slams into you with its massive frozen fists\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
    reaction(args) {
      const re =
        /^Your (left arm|right arm|left leg|right leg) breaks with a loud crack\.$/;
      const index = nexusclient.current_block.indexOf(
        nexusclient.current_block
      );
      const match1 = re.exec(nexusclient.current_block[index + 1].line);
      const match2 = re.exec(nexusclient.current_block[index + 2].line);
      if (match1) {
        args.tags.push(`broken${match1[1].replace(" ", "")}`);
      }
      if (match2) {
        args.tags.push(`broken${match2[1].replace(" ", "")}`);
      }
    },
  },
  {
    user: "a greater earth elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater earth elemental breaks a large chunk away from its rocky form and hurls it at you, the projectile connecting with stunning force\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
    reaction(args) {
      const re =
        /^Your (left arm|right arm|left leg|right leg) breaks with a loud crack\.$/;
      const index = nexusclient.current_block.indexOf(
        nexusclient.current_block
      );
      const match1 = re.exec(nexusclient.current_block[index + 1].line);
      const match2 = re.exec(nexusclient.current_block[index + 2].line);
      if (match1) {
        args.tags.push(`broken${match1[1].replace(" ", "")}`);
      }
      if (match2) {
        args.tags.push(`broken${match2[1].replace(" ", "")}`);
      }
    },
  },
  {
    user: "a greater earth elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater earth elemental extends one arm towards you as a mass of writhing vines surge forward, slicing into you with thorns dripping with violet toxins\.$/,
    thirdPerson: false,
    tags: ["damage", "loki", "loki"],
    length: 3.0,
  },
  {
    user: "a greater earth elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^As a greater earth elemental wraps a massive hand around your torso and squeezes you tightly, you feel it draining away your will to live\.$/,
    thirdPerson: false,
    tags: ["damage", "heal"],
    length: 3.0,
  },
];
