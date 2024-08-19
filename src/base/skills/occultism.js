export const occultism = {
  warp: {
    id: "warp",
    fullName: "Warp",
    firstPerson:
      /^You reach out and clench a fist before (?<target>.+?), who screams and doubles over in agony as \w+ skin suddenly bubbles with gangrenous growths\.$/,
    secondPerson:
      /^(?<user>\w+) reaches out and clenches a fist before you\. You scream and double over in agony as your skin bubbles with gangrenous growths\.$/,
    thirdPerson:
      /^(?<user>\w+) reaches out and clenches a fist before (?<target>.+?), who screams and doubles over in agony as \w+ skin suddenly bubbles with gangrenous growths\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    length: 3.0,
  },
  instill: {
    id: "instill",
    fullName: "Instill",
    firstPerson:
      /^You make a sharp gesture toward (?<target>\w+), disrupting \w+ aura with the (?<info>\w+) affliction\.$/,
    secondPerson: /^(?<user>\w+) makes a quick, sharp gesture toward you\.$/,
    thirdPerson: /^(?<user>\w+) gestures sharply at (?<target>\w+)\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: ["info"],
    length: 2.5,
    affs: [],
    reaction(action) {
      if (action.args.groups?.info) {
        action.affs = [action.args.groups.info];
      }
    },
  },
  enervate: {
    id: "enervate",
    fullName: "Enervate",
    firstPerson:
      /^You bend your will to send out a tendril of your aura to attach to (?<target>\w+)'s aura, enervating \w+ mental energy into your own\.$/,
    secondPerson:
      /^(?<user>\w+) frowns in concentration as a tendril of yellow energy flashes out and attaches to you\. You suddenly have a headache\.$/,
    thirdPerson:
      /^(?<user>\w+) frowns in concentration as a tendril of yellow energy flashes out and attaches to (?<target>\w+)\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: [],
    length: 2.9,
  },
  ague: {
    id: "ague",
    fullName: "Ague",
    firstPerson:
      /^You create a tendril of icy blue light that lashes out at (?<target>\w+) and wraps around \w+ aura\.$/,
    secondPerson:
      /^(?<user>\w+) sends an icy blue tendril of light that lashes out at you and wraps around you, sending a strange chill deep into your bones\.$/,
    thirdPerson:
      /^(?<user>\w+) sends an icy blue tendril of light that lashes out at (?<target>\w+) and wraps around \w+\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    affs: [],
    tags: ["aff"],
    length: 2.2,
  },
  shrivelTargeted: {
    id: "shrivelTargeted",
    fullName: "Shrivel Targeted",
    firstPerson:
      /^You touch (?<target>\w+)'s (?<limb>.+?), and it shrivels away\.$/,
    secondPerson:
      /^You watch in horror as (?<user>\w+) touches your (?<limb>.+?), and it shrivels away to uselessness\.$/,
    thirdPerson:
      /^(?<user>\w+) reaches out to grab (?<target>\w+)'s (?<limb>.+?), and it shrivels away\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    affs: [],
    info: false,
    tags: ["aff"],
    length: 2.1,
    reaction(action) {
      action.info = action.limb;
      action.affs = [`broken${action.limb.replace(" ", "")}`];
    },
  },
  shrivelArms: {
    id: "shrivelArms",
    fullName: "Shrivel Arms",
    firstPerson:
      /^You reach out and stroke an arm of (?<target>\w+), and it withers away\.$/,
    secondPerson:
      /^Before you can avoid it, (?<user>\w+)'s hand brushes against your arm and it withers away\.$/,
    thirdPerson:
      /^(?<user>\w+) reaches out to stroke (?<target>\w+)'s arm, which withers away at the touch\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    affs: [],
    info: false,
    tags: ["aff"],
    length: 2.1,
  },
  shrivelLegs: {
    id: "shrivelLegs",
    fullName: "Shrivel Legs",
    firstPerson:
      /^You reach out and grasp (?<target>\w+)'s leg in an iron grip, and it shrivels feebly\.$/,
    secondPerson:
      /^(?<user>\w+) reaches out and grabs your leg, which almost gives way underneath you as it shrivels feebly away\.$/,
    thirdPerson:
      /^(?<user>\w+) grabs (?<target>\w+)'s leg, which shrivels feebly away\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    affs: [],
    info: false,
    tags: ["aff"],
    length: 2.1,
  },
  shrivelRehit: {
    id: "shrivelRehit",
    fullName: "Shrivel",
    firstPerson:
      /^You reach out and touch (?<target>\w+)'s (?<limb>\w+), but you can shrivel it no further.\.$/,
    secondPerson:
      /^(?<user>\w+) reaches out and touches your (?<limb>\w+), but it is already a useless husk\.$/,
    thirdPerson:
      /^(?<user>\w+) reaches out to grab (?<target>\w+)'s (?<limb>\w+), but nothing happens\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    affs: [],
    info: false,
    tags: ["aff"],
    length: 2.1,
    reaction(action) {
      action.info = `Hit broken ${action.limb}`;
    },
  },
  pinchaura: {
    id: "pinchaura",
    fullName: "Pinchaura",
    firstPerson:
      /^With a sudden, quick gesture, you snatch at (?<target>\w+)'s aura and pinch the unwanted anomaly in the aura\.$/,
    secondPerson:
      /^(?<user>\w+) makes a sudden, quick gesture in front of you, almost hitting your nose\. \w+ hand glows with a vibrant violet light before snapping back to \w+ side\.$/,
    thirdPerson:
      /^(?<user>\w+) makes a sudden, quick gesture in front of (?<target>\w+), almost hitting \w+ nose\. \w+'s hand glows with a vibrant violet light before snapping back to \w+ side\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    affs: [],
    info: false,
    tags: [],
    length: 4.0,
  },
  attend: {
    id: "attend",
    fullName: "Attend",
    firstPerson:
      /^Focusing your will, you exert your aura at (?<target>\w+) and snap your fingers, forcing \w+ to pay attention to you\.$/,
    secondPerson:
      /^(?<user>\w+) glows with an emerald hue and snaps \w+ fingers at you\.$/,
    thirdPerson:
      /^(?<user>\w+) glows with an emerald hue and snaps \w+ fingers at (?<target>\w+)\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: [],
    length: 2.5,
  },
  unnamableSpeak: {
    id: "unnamableSpeak",
    fullName: "Unnamable Speak",
    firstPerson:
      /^Hardening your mind against the impossible, you speak the name of the Unnamable\. Even to your ears, the utterance sounds twisted and unearthly\.$/,
    secondPerson:
      /^(?<user>\w+) speaks something in an unknown and impossible language\. Unable to process the alien images these words induce, your thoughts become jumbled\.$/,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: [],
    length: 3.2,
  },
  unnamableVision: {
    id: "unnamableVision",
    fullName: "Unnamable Vision",
    firstPerson:
      /^Hardening your mind against the impossible, you conjure a vision of the Unnamable\. Even to your eyes, the manifestation appears twisted and unearthly\.$/,
    secondPerson:
      /^(?<user>\w+) lowers \w+ eyes and an unearthly image appears before you\. Unable to accept what this vision means, your thoughts become jumbled\.$/,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: [],
    length: 3.2,
  },
  whisperingmadnessMiss: {
    id: "whisperingmadnessMiss",
    fullName: "Whisperingmadness",
    firstPerson:
      /^You pass your hand in front of (?<target>\w+)\. \w+ shakes \w+ head as if clearing \w+ mind\.$/,
    secondPerson:
      /^(?<user>\w+) passes \w+ hand in front of you\. You feel an invisible claw brush the back of your skull, but quickly brush it off\.$/,
    thirdPerson:
      /^(?<user>\w+) passes \w+ hand in front of (?<target>\w+)\. \w+ shakes \w+ head as if clearing \w+ mind\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    info: "Miss",
    tags: ["info"],
    length: 2.3,
  },
  whisperingmadness: {
    id: "whisperingmadness",
    fullName: "Whisperingmadness",
    firstPerson:
      /^You pass your hand in front of (?<target>\w+)\. \w+ trembles and \w+ eyes widen in terror\.$/,
    secondPerson:
      /^(?<user>\w+) passes \w+ hand in front of you\. You feel an invisible claw brush the back of your skull\.\.$/,
    thirdPerson:
      /^(?<user>\w+) passes \w+ hand in front of (?<target>\w+)\. \w+ trembles and \w+ eyes widen in terror\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: [],
    length: 2.3,
  },
  devolve: {
    id: "devolve",
    fullName: "Devolve",
    firstPerson:
      /^You utter a terrible curse and point a finger at (?<target>\w+)\.$/,
    secondPerson:
      /^(?<user>\w+) utters a terrible curse and points a finger at you\.$/,
    thirdPerson:
      /^(?<user>\w+) utters a terrible curse and points a finger at (?<target>\w+)\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    affs: ["disloyalty", "shyness"],
    tags: ["aff"],
    length: 2.4,
  },
  bodywarp: {
    id: "bodywarp",
    fullName: "Bodywarp",
    firstPerson:
      /^Taking a deep breath, you summon up images of your own primal fears, finally channeling them through your aura and into your body\. You feel your face and form twist and turn\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) takes a deep breath and breathes out\. \w+ face and body seem to melt and then twist and churn into something unspeakable\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    affs: ["fear"],
    tags: ["aff"],
    length: 2.3,
  },
  cleanseaura: {
    id: "cleanseaura",
    fullName: "Cleanseaura",
    firstPerson:
      /^Reaching out with your own aura, you touch the aura of (?<target>\w+), attempting to strip away its natural defences\.$/,
    secondPerson:
      /^(?<user>\w+) sends a shimmering strand of indigo fire at you, which wraps around you and bathes you in a briskly cold wave of light\.$/,
    thirdPerson:
      /^(?<user>\w+) sends a shimmering strand of indigo fire at (?<target>\w+), which wraps around \w+ and bathes \w+ in a briskly cold wave of light\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    affs: ["fear"],
    tags: ["aff"],
    length: 2.3,
    //fail: The energy flickers and fades with no visible change.
    //success: A look of sudden concern flits across the visage of Pamxen.
  },
  interlink: {
    id: "interlink",
    fullName: "Interlink",
    firstPerson:
      /^You seize upon the aura of (?<target>\w+), and violently twist \w+ (?<limb>.+?) out of alignment with the planar norm\.$/,
    secondPerson:
      /^Pain lances through your (?<limb>.+?) as the fingers of (?<user>\w+) twitch in an aborted motion towards you\.$/,
    thirdPerson:
      /^A red glow surrounds the (?<limb>.+?) of (?<target>\w+), bones twisting beneath the skin\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    info: false,
    affs: [],
    tags: ["aff"],
    length: 2.6,
    reaction(action) {
      action.info = action.limb;
      action.affs = [`broken${action.limb.replace(" ", "")}`];
    },
  },
  regress: {
    id: "regress",
    fullName: "Regress",
    firstPerson:
      /^You snatch at the aura of (?<target>\w+), imposing your will upon the nature of \w+ existence\.$/,
    secondPerson:
      /^(?<user>\w+) makes a sharp motion with one hand in your direction, the briefest flicker of something crackling between \w+ digits\.$/,
    thirdPerson:
      /^(?<user>\w+) makes a sharp motion with one hand in the direction of (?<target>\w+), something crackling between \w+ digits for the briefest of moments\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: [],
    length: 2.5,
    //The legs of Pamxen snap out from under \w+.
    //The face of Pamxen turns a particularly vibrant shade of green.
  },
  compelDiscord: {
    id: "compelDiscord",
    fullName: "Compel Discord",
    firstPerson:
      /^Fixing your gaze upon that beyond (?<target>\w+), you speak to that without and within of the nature of (.+?), wielding the deepest knowing of \w+ nature to compell \w+ to hear and be silent\.$/,
    secondPerson:
      /^(?<user>\w+) draws back with a knowing smile and fixes \w+ gaze to a point beyond you, an eldritch chant that sets your bones to resonating in symphony with something utterly unnatural spilling forth from \w+ lips in a compelled decree\.$/,
    thirdPerson:
      /^(?<user>\w+) draws back with a knowing smirk and fixes \w+ gaze on a point beyond (?<target>\w+), an eldritch chant spilling forth from \w+ lips which sets your teeth on edge\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "free",
    tags: [],
    length: 2.5,
    reaction(skill) {
      let compelId = skill.args[2].toLowerCase();
      compelId = compelId.includes("potential") ? "potential" : compelId;

      skill.id = `compel${compelId}`;
      skill.fullName = `Compel ${
        compelId.charAt(0).toUpperCase() + compelId.slice(1)
      }`;
    },
  },
};

export default Object.values(occultism);
