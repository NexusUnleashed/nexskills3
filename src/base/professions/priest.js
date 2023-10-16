export const actions = [
    {
        id: "chasten",
        fullName: "Chasten",
        firstPerson: false,
        secondPerson: false,
        thirdPerson: /^A dark bolt of energy erupts from the mace held by (?<user>\w+), afflicting (?<target>.+?) with a chastening magic\.$/,
        profession: ["priest"],
        skill: "spirituality",
        balance: "balance",
        multiLine: 0,
        tags: [],
        length: 2.9,
    },
    {
        id: "smite",
        fullName: "Smite",
        firstPerson: false,
        secondPerson: false,
        thirdPerson: /^(?<user>\w+) utters a prayer and smites (?<target>.+?)'s (?<limb>.+?) with an Auroran Mace\.$/,
        profession: ["priest"],
        skill: "spirituality",
        balance: "equilibrium",
        multiLine: 0,
        tags: [],
        length: 2.8,
    },
    {
        id: "guilt",
        fullName: "Guilt",
        firstPerson: false,
        secondPerson: false,
        thirdPerson: /^"And your guilt will be made plain," (?<user>\w+) proselytises, finger raised to point at (?<target>.+?)\.$/,
        profession: ["priest"],
        skill: "zeal",
        balance: "prayer",
        multiLine: 0,
        tags: ["aff"],
        affs: ["guilt"],
        length: 1.7,
    },
    {
        id: "guilt2",
        fullName: "Guilt",
        firstPerson: false,
        secondPerson: false,
        thirdPerson: /^"Know the pain which you have caused," (?<user>\w+) proselytises, finger raised to point at (?<target>.+?)\.$/,
        profession: ["priest"],
        skill: "zeal",
        balance: "prayer",
        multiLine: 0,
        tags: ["aff"],
        affs: ["guilt"],
        length: 1.7,
    },
    {
        id: "purge",
        fullName: "Purge",
        firstPerson: false,
        secondPerson: false,
        thirdPerson: /^"I deem you unfit for Creation!" (?<user>\w+) proclaims, pointing an imperious finger at (?<target>.+?)\.$/,
        profession: ["priest"],
        skill: "zeal",
        balance: "prayer",
        multiLine: 0, //A line of golden flame leaps forth, lashing about Amranu and searing him to the bone.
        tags: ["aff"],
        affs: ["ablaze"],
        length: 2.3,
    },
    {
        id: "penance",
        fullName: "Penance",
        firstPerson: false,
        secondPerson: false,
        thirdPerson: /^"And face your penance!" denounces (?<user>\w+), hand raised in warding against (?<target>.+?)\.$/,
        profession: ["priest"],
        skill: "zeal",
        balance: "prayer",
        multiLine: 0, //A line of golden flame leaps forth, lashing about Amranu and searing him to the bone.
        tags: ["aff"],
        affs: ["paralysis"],
        length: 1.6,
    },
    {
        id: "penance2",
        fullName: "Penance",
        firstPerson: false,
        secondPerson: false,
        thirdPerson: /^"Repent for your crimes!" denounces (?<user>\w+), hand raised in warding against (?<target>.+?)\.$/,
        profession: ["priest"],
        skill: "zeal",
        balance: "prayer",
        multiLine: 0, //A line of golden flame leaps forth, lashing about Amranu and searing him to the bone.
        tags: ["aff"],
        affs: ["paralysis"],
        length: 1.6,
    },
    {
        id: "revelations",
        fullName: "Revelations",
        firstPerson: false,
        secondPerson: false,
        thirdPerson: /^"And see that which Evil reaps!" (?<user>\w+) recites to (?<target>.+?), righteous fury blazing in \w+ eyes\.$/,
        profession: ["priest"],
        skill: "zeal",
        balance: "prayer",
        multiLine: 0, //Antoninus claws at his eyes, fingers scrabbling frantically.
        tags: ["aff"],
        affs: ["hellsight"],
        length: 1.6,
    },
    {
        id: "light",
        fullName: "Light",
        firstPerson: false,
        secondPerson: false,
        thirdPerson: /^"May the Light lead, and we never fail to follow!" cries out (?<user>\w+)\.$/,
        profession: ["priest"],
        skill: "zeal",
        balance: "prayer",
        multiLine: 0,
        tags: ["heal", "cure"],
        affs: [],
        length: 3.0,
    },
    {
        id: "inquisition",
        fullName: "Inquisition",
        firstPerson: false,
        secondPerson: false,
        thirdPerson: /^Pointing at \w+ with a single raised finger, (?<user>\w+) recites a list of (?<target>.+?)'s transgressions, condemning \w+ actions and words\. A blaze of holy fire surges about \w+ as he dictates \w+'s sentence\.$/,
        profession: ["priest"],
        skill: "devotion",
        balance: "equilibrium",
        multiLine: 0,
        tags: ["aff"],
        affs: ["inquisition"],
        length: 3.5,
    },
    {
        id: "dazzle",
        fullName: "Dazzle",
        firstPerson: false,
        secondPerson: false,
        thirdPerson: /^(?<user>\w+) directs a dazzling ray of light at (?<target>.+?)\.$/,
        profession: ["priest"],
        skill: "devotion",
        balance: "equilibrium",
        multiLine: 0,
        tags: ["aff"],
        affs: ["stupidity"],
        length: 2.5,
    },
];

/*
14:29:33.871 "Repent for your crimes!" denounces Atalkez, hand raised in warding against Antoninus.
14:29:33.871 Antoninus clutches at his eyes as Atalkez is wreathed in brilliant light.
14:29:33.871 As his prayer draws to a close, holy fire outlines Atalkez.
14:29:33.871 Atalkez directs a dazzling ray of light at Antoninus.

14:30:18.848 Antoninus whips Matsuhama's morningstar toward the left leg of Atalkez.
14:30:18.848 Antoninus misses Atalkez with Matsuhama's morningstar.
14:30:18.848 Antoninus whips Matsuhama's morningstar toward the left leg of Atalkez.
14:30:18.848 Antoninus misses Atalkez with Matsuhama's morningstar.


14:30:23.210 Antoninus twitches violently, eyes wide as Atalkez burns with a terrible brilliance.
14:30:23.210 As his prayer draws to a close, holy fire outlines Atalkez.
14:30:23.210  Atalkez	[Smite]	Antoninus
14:30:23.210  Atalkez	[Chasten]	Antoninus

14:30:26.940  Antoninus	{ Eat: Lobelia }
14:30:26.940 Antoninus straightens, as if some great burden had been lifted from his shoulders.

14:30:35.149 "Repent for your crimes!" denounces Atalkez, hand raised in warding against Antoninus.
14:30:35.149 Atalkez clenches his jaw and glares imperiously at Antoninus.
*/

// Smite can be parried
//Antoninus parries the attack with a deft manoeuvre.

//"And you shall be naught but cinders," decrees Atalkez, hands outstretched towards Antoninus.
//"Burn!" commands Atalkez, fire leaping forth from him to Antoninus in a searing flash.