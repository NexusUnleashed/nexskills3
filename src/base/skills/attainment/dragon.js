export const dragon = {
  overwhelm: {
    id: "overwhelm",
    fullName: "Overwhelm",
    firstPerson:
      /^You charge quickly at (?<target>.+?), throwing your mighty form into \w+ and sending \w+ staggering back\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) charges quickly at (?<target>.+?), throwing \w+ massive form at \w+ target in a mighty crash\.$/,
    profession: ["red dragon", "golden dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 3.0,
  },
  override: {
    id: "override",
    fullName: "Override",
    firstPerson:
      /^You barrel into (?<target>.+?) and knock \w+ to the ground before stomping over \w+ prone form\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) barrels into (?<target>.+?) and knocks \w+ to the ground before stomping over \w+ prone form\.$/,
    profession: ["blue dragon", "black dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 3.0,
  },
  //#region Golden Dragon
  psishatter: {
    id: "psishatter",
    fullName: "Psishatter",
    firstPerson:
      /^You blast (?<target>.+?) with psychic energy, demolishing \w+ translucent shield\.$/,
    secondPerson: false,
    thirdPerson:
      /(?<user>\w+) blasts (?<target>.+?) with psychic energy, demolishing \w+ translucent shield\.$/,
    profession: ["golden dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: "raze",
    tags: ["pve", "raze"],
    length: 3.0,
  },
  psiblast: {
    id: "psiblast",
    fullName: "Psiblast",
    firstPerson:
      /^You level your draconic gaze at (?<target>.+?), assaulting \w+ with psychic waves of force\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) levels \w+ draconic gaze at (?<target>.+?), visible waves of psychic force emanating out\.$/,
    profession: ["golden dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 3.0,
  },
  psistorm: {
    id: "psistorm",
    fullName: "Psistorm",
    firstPerson:
      /^You summon a psychic storm around (?<target>.+?), but \w+ stands strong against the buffeting winds\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["golden dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 3.0,
  },
  psidaze: {
    //A Vertani guard blinks his eyes as he forgets what he was doing.
    //Sparkles of psi energy cease their distracting dance around a Vertani guard's vision.
    //3.4s?
    id: "psidaze",
    fullName: "Psidaze",
    firstPerson:
      /^You summon sparkles of psi energy around (?<target>.+?), causing \w+ to forget \w+ actions as the sparkles distract \w+\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) summons sparkles of psi energy around (?<target>.+?), causing \w+ to forget \w+ actions as the sparkles distract \w+\.$/,
    profession: ["golden dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: "amnesia",
    tags: ["pve"],
    length: 3.0,
  },
  deaden: {
    //A Vertani guard returns to normal speed as he throws off a mental intrusion.
    //4s?
    id: "deaden",
    fullName: "Deaden",
    firstPerson:
      /^You psychically slam your mind into (?<target>.+?)'s, deadening \w+ reactions\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) psychically slams \w+ mind into (?<target>.+?)'s, deadening .+?'s reactions\.$/,
    profession: ["golden dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: "aeon",
    tags: ["pve"],
    length: 3.0,
  },
  //#endregion
  //#region Blue Dragon
  glaciate: {
    id: "glaciate",
    fullName: "Glaciate",
    firstPerson:
      /^You breathe a column of icy air at (?<target>.+?)'s head, stunning \w+\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["blue dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: "stun",
    tags: ["pve", "stun"],
    length: 3.0,
  },
  frostrive: {
    id: "frostrive",
    fullName: "Frostrive",
    firstPerson:
      /^(?<target>.+?)'s translucent shield cracks and fades away as you breathe an icy blast at it\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<target>.+?)'s translucent shield cracks and fades away as (?<user>\w+?) breathes an icy blast at it\.$/,
    profession: ["blue dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: "raze",
    tags: ["pve", "raze"],
    length: 3.0,
  },
  ague: {
    id: "ague",
    fullName: "Ague",
    firstPerson:
      /^You let loose a steady stream of cold air around (?<target>.+?), who begins to shiver uncontrollably\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) lets loose a steady stream of cold air around (?<target>.+?), who begins to shiver uncontrollably\.$/,
    profession: ["blue dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: "clumsiness",
    tags: ["pve", "clumsiness"],
    length: 3.0,
  },
  dragonchill: {
    id: "dragonchill",
    fullName: "Dragonchill",
    firstPerson:
      /^You form small chunks of ice in your enormous maw, then spit them at (?<target>.+?) in a barrage\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) spits a barrage of icy chunks at (?<target>.+?)\.$/,
    profession: ["blue dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 3.0,
  },
  frostwave: {
    id: "frostwave",
    fullName: "Frostwave",
    firstPerson: /^You breathe a wave of icy air at (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["blue dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 3.0,
  },
  //#endregion
  //#region Black Dragon
  dragonsting: {
    id: "dragonsting",
    fullName: "Dragonsting",
    firstPerson:
      /^You swing your mighty tail around, stabbing (?<target>.+?) with an acid-covered spine\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["black dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: "Sensitivity",
    tags: ["pve", "damage", "sensitivity"],
    length: 3.0,
  },
  dragonspit: {
    id: "dragonspit",
    fullName: "Dragonspit",
    firstPerson:
      /^You spit a stream of acidic venom at (?<target>.+?) who writhes in agony as the spittle seeps into \w+ skin\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["black dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 3.0,
  },
  dragonspitTick: {
    id: "dragonspitTick",
    fullName: "Dragonspit Tick",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<target>.+?) writhes in agony as acidic spittle eats away at \w+ skin\.$/,
    profession: ["black dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 3.0,
  },
  corrode: {
    id: "corrode",
    fullName: "Corrode",
    firstPerson:
      /^You open your gigantic maw and spew acid on (?<target>.+?)\. \w+ dodges to the side and is only partially covered by the corrosive slime\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) opens \w+ gigantic maw and spews acid on (?<target>.+?)\. \w+ is too clumsy to dodge and is covered in the corrosive slime\.$/,
    profession: ["black dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 3.0,
  },
  dragonfear: {
    id: "dragonfear",
    fullName: "Dragonfear",
    firstPerson:
      /^You open your enormous maw and let loose a mighty roar at (?<target>.+?), causing \w+ to quail in fear\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["black dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: "Fear",
    tags: ["pve", "damage", "fear"],
    length: 3.0,
  },
  //#endregion
  //#region Red Dragon
  dragonblaze: {
    id: "dragonblaze",
    fullName: "Dragonblaze",
    firstPerson:
      /^You breathe a long torrent of flame at (?<target>.+?), igniting \w+ skin\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) breathes a long torrent of flame at (?<target>.+?), igniting \w+ skin\.$/,
    profession: ["red dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 3.0,
  },
  dragonblazeTick: {
    id: "dragonblazeTick",
    fullName: "Dragonblaze tick",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<target>.+?) is wracked with pain as the flames of dragonbreath wreathe over \w+ skin\.$/,
    profession: ["red dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 3.0,
  },
  scorch: {
    id: "scorch",
    fullName: "Scorch",
    firstPerson:
      /^You blacken (?<target>.+?)'s flesh with a quick blast of flame, slowing \w+ healing process\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["red dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: "inhibit",
    tags: ["pve", "inhibit"],
    length: 3.0,
  },
  dragontaunt: {
    id: "dragontaunt",
    fullName: "Dragontaunt",
    firstPerson:
      /^You slap your tail on the ground while growling at (?<target>.+?), forcing \w+ to recklessly attack\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["red dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: "recklessness",
    tags: ["pve", "recklessness"],
    length: 3.0,
  },
  flamebath: {
    id: "flamebath",
    fullName: "Flamebath",
    firstPerson:
      /^You blast (?<target>.+?) with a bath of flame, but \w+ is able to avoid the brunt of the blast\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["red dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 3.0,
  },
  melt: {
    id: "melt",
    fullName: "Melt",
    firstPerson:
      /^You breathe a white-hot blast of flame at (?<target>.+?) and burn away \w+ translucent shield\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) breathes a white-hot blast of flame at (?<target>.+?) and burns away \w+ translucent shield\.$/,
    profession: ["red dragon"],
    skill: "attainment",
    balance: "battlerage",
    info: "raze",
    tags: ["pve", "raze"],
    length: 3.0,
  },
  //#endregion
};

//You can use another Battlerage ability again. Available abilities: Overwhelm
//You can use Dragonblaze again.
//The flames of dragonbreath fade from a fortress guardsman's skin.
//A knight of the Siroccian Order's blackened flesh slowly knits together.

export default Object.values(dragon);
