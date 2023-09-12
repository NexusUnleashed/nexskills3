export const npcs = [
  {
    user: "a Migri warrior",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^A Migri warrior's eyes narrow as he grasps his longsword with both hands and raises it over his head before bringing it down across your chest\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a Migri warrior",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^In a skillful display of swordsmanship, a Migri warrior slashes diagonally across your body before striking you again with a jab through your belly\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a Migri warrior",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^A Migri warrior bares his teeth and lunges at you with his longsword, the blade easily sliding into your body\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a Migri warrior",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^A Migri warrior strikes you in the face with the hilt of his sword\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "an undead minion",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^An undead minion leaps forward and rips through your flesh with his teeth, leaving a gaping wound\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.7,
  },
  {
    user: "an undead minion",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Running between your legs, an undead minion strikes your knee with his tail, throwing you off balance\.$/,
    thirdPerson: false,
    tags: ["off-balance"],
    length: 2.7,
  },
  {
    user: "an undead minion",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Rearing back and then leaping, an undead minion strikes your chest, causing you to fall to the ground\.$/,
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 2.7,
  },
  {
    user: "Dakk, leader of the Migri",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Dakk, leader of the Migri ducks his head and thrusts his blade towards you, jabbing it deep within your chest cavity and striking an artery. The blood pours from your body with each pump of your heart, covering the ground with blood\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.0,
  },
  {
    user: "Dakk, leader of the Migri",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Muttering an incantation, Dakk, leader of the Migri summons flames from his fingertips before balling them up and hurling the fireball towards you\.$/,
    thirdPerson: false,
    tags: ["damage", "burning"],
    length: 2.0,
  },
  {
    user: "Dakk, leader of the Migri",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Slashing his blade across your chest, Dakk, leader of the Migri cuts a piece of flesh from your body before striking you with the hilt of his sword, knocking you to the ground\.$/,
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 2.0,
  },
  {
    user: "Begath, the Migri mage",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Begath, the Migri mage snaps both of his fingers. Instantly, flames erupt from the floor and travel towards you, enveloping your body\.$/,
    thirdPerson: false,
    tags: ["damage", "burning"],
    length: 2.5,
  },
  {
    user: "Begath, the Migri mage",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Begath, the Migri mage reaches towards the ground with an outstretched hand. Pulling up, he forces several large rocks from the ground and then hurls them in your direction, pummeling you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "Begath, the Migri mage",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Begath, the Migri mage blows gently over his fingertips, causing them to turn blue and frost over before reaching towards you and sending several ice spikes in your direction\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "an energetic turtle",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^An energetic red turtle slams his body into your leg, shattering it in the process.\.$/,
    thirdPerson: false,
    tags: ["damage", "brokenleftleg"], //TODO random leg
    length: 1.5,
  },
  {
    user: "a sinister glubber",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^A sinister glubber claws viciously at your arm, severing the joints\.$/,
    thirdPerson: false,
    tags: ["damage", "brokenleftarm"], //TODO random arm
    length: 1.5,
  },
  {
    user: "a sinister glubber",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^A sinister glubber claws viciously at your leg, severing the joints\.$/,
    thirdPerson: false,
    tags: ["damage", "brokenleftleg"], //TODO random leg
    length: 1.5,
  },
  {
    user: "a sinister glubber",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^A sinister glubber scrapes his nails across your eyes, leaving you unable to see\.$/,
    thirdPerson: false,
    tags: ["damage", "blindness"],
    length: 1.5,
  },
  {
    user: "a sinister glubber",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^Staring intensely at you, a sinister glubber causes his scales to fly off his body and into yours, painfully piercing the skin\.$/,
    thirdPerson: false,
    tags: ["damage", "voyria"],
    length: 1.5,
  },
  {
    user: "a tentacled polyp",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^Flinging his rope-like tentacles around, a tentacled polyp hits you firmly in the chest, leaving a number of noticeable lacerations\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 11.0,
  },
  {
    user: "a tentacled polyp",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^Waving his appendages before your face, a tentacled polyp leaves a number of deep lacerations and manages to leave you transfixed\.$/,
    //A tentacled polyp attempts to transfix you, but succeeds only in curing your blindness.
    thirdPerson: false,
    tags: ["damage"],
    length: 11.0,
  },
  {
    user: "a tentacled polyp",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^A tentacled polyp quickly stabs you with his bizarre limbs, leaving a number of deep cuts\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 11.0,
  },
  {
    user: "a tentacled polyp",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^Wrapping his tentacles around your legs, a tentacled polyp causes you to come crashing to the floor, your legs entangled with his bizarre appendages\.$/,
    thirdPerson: false,
    tags: ["damage", "prone", "webbed"],
    length: 11.0,
  },
  {
    user: "a heavily armoured warrior sylphid beetle",
    areaId: [343],
    areaName: "Battlesite of Mourning Pass",
    firstPerson:
      /^Rearing back on his hind legs, a heavily armoured warrior sylphid beetle lifts his head and spits a glob of saliva at your face\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a heavily armoured warrior sylphid beetle",
    areaId: [343],
    areaName: "Battlesite of Mourning Pass",
    firstPerson:
      /^A heavily armoured warrior sylphid beetle snaps at you with his serrated pincers, tearing off chunks of bloody flesh\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a queen sylphid beetle",
    areaId: [343],
    areaName: "Battlesite of Mourning Pass",
    firstPerson:
      /^Raising and extending the spines on her quiff, a queen sylphid beetle smacks them into your body, piercing your skin\.$/,
    thirdPerson: false,
    tags: ["damage", "voyria"],
    length: 2.5,
  },
  {
    user: "an austere Tsol'dasi", //TODO dupe
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^An austere Tsol'dasi withdraws a long, slender blade from beneath the folds of her dress, slashing deeply into your flesh with the sharpened edge\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 4.0,
  },
  {
    user: "an austere Tsol'dasi", //TODO dupe
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^Clenching her fists in brooding anger, an austere Tsol'dasi runs towards you, slamming into your chest and knocking you backwards\.$/,
    thirdPerson: false,
    tags: ["damage", "balance"],
    length: 4.0,
  },
  {
    user: "an austere Tsol'dasi", //TODO dupe
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^Moving her agile body quickly behind you, an austere Tsol'dasi jabs her long blade swiftly into your side\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 4.0,
  },
  {
    user: "a Tsol'dasi villager", //TODO dupe
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^A Tsol'dasi villager withdraws a long, slender blade from beneath the folds of her dress, slashing deeply into your flesh with the sharpened edge\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 4.0,
  },
  {
    user: "a Tsol'dasi villager", //TODO dupe
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^Moving her agile body quickly behind you, a Tsol'dasi villager jabs her long blade swiftly into your side\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 4.0,
  },
  {
    user: "a Tsol'dasi villager", //TODO dupe
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^Clenching her fists in brooding anger, a Tsol'dasi villager runs towards you, slamming into your chest and knocking you backwards\.$/,
    thirdPerson: false,
    tags: ["damage", "balance"],
    length: 4.0,
  },
  {
    user: "a hooded Tsol'dasi villager", //TODO dupe
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^Moving her agile body quickly behind you, a hooded Tsol'dasi villager jabs her long blade swiftly into your side\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 4.0,
  },
  {
    user: "a hooded Tsol'dasi villager", // TODO dupe
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^Clenching her fists in brooding anger, a hooded Tsol'dasi villager runs towards you, slamming into your chest and knocking you backwards\.$/,
    thirdPerson: false,
    tags: ["damage", "balance"],
    length: 4.0,
  },
  {
    user: "a hooded Tsol'dasi villager", //TODO dupe
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^A hooded Tsol'dasi villager withdraws a long, slender blade from beneath the folds of her dress, slashing deeply into your flesh with the sharpened edge\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 4.0,
  },
  {
    user: "a watch spider outrider",
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^Swinging her staff in a wide vertical arc, a watch spider outrider brings it down hard upon your head\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 4.0,
  },
  {
    user: "a watch spider outrider",
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^A watch spider outrider sends the sphere end of her staff into one of your kneecaps, causing your bones to crack and pop unpleasantly\.$/,
    thirdPerson: false,
    tags: ["damage", "brokenrightleg"], // TODO random limb
    length: 4.0,
  },
  {
    user: "a watch spider outrider",
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^Pointing the spherical tip of the staff towards you, a watch spider outrider smiles before tapping it gently\. A torrent of fire erupts from its surface, setting you aflame with its incandescence\.$/,
    thirdPerson: false,
    tags: ["damage", "burning"], // TODO random limb
    length: 4.0,
  },
  {
    user: "a whisper spider outrider",
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^A whisper spider outrider swings a quick jab at your face, connecting on the jaw\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 4.0,
  },
  {
    user: "a whisper spider outrider",
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^A whisper spider outrider swings a quick jab at your face, connecting on the jaw\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 4.0,
  },
  {
    user: "a whisper spider outrider",
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^A whisper spider outrider sends one of his hands out to your throat\. A triumphant look crosses his face as he grips tightly on your windpipe\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 4.0,
  },
  {
    user: "a whisper spider outrider",
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^A whisper spider outrider moves close to you with speed, grabbing an arm while slamming into your body\. The force of the impact causes you to somersault onto the ground, dislocating your arm in the process\.$/,
    thirdPerson: false,
    tags: ["damage", "prone", "brokenleftarm"], // TODO random arm
    length: 4.0,
  },
  {
    user: "a sword spider outrider",
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^His blades swimming through the air in a series of complex movements, a sword spider outrider slashes into you with incredible force\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  {
    user: "a sword spider outrider",
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^Feinting a jab, a sword spider outrider brings the hilt of his other sword towards you, stunning you with its forceful impact into your skull\.$/,
    thirdPerson: false,
    tags: ["damage", "stun"],
    length: 3.0,
  },
  {
    user: "a sword spider outrider",
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^Finding both hands preoccupied, a sword spider outrider draws his head back, slamming it into your face\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  {
    user: "Eriador, the Tsol'dasi merchant",
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^Eriador, the Tsol'dasi merchant master throws his weight forward and forcefully rams his closed fist into your chest\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 4.0,
  },
  {
    user: "Maal'ryn Asgarai, Outrider Ascendant",
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^With a great sweep of his mighty staff, Maal'ryn Asgarai, Outrider Ascendant summons a great geyser of brightly burning liquid fire behind him that arcs upwards into the air and rains down furiously upon you\.$/,
    thirdPerson: false,
    tags: ["damage", "burning"],
    length: 3.0,
  },
  {
    user: "Maal'ryn Asgarai, Outrider Ascendant",
    areaId: [263],
    areaName: "Istarion",
    firstPerson:
      /^With a single word, Maal'ryn Asgarai, Outrider Ascendant causes the wounds gaping in your flesh to bleed and ebb freshly, draining you of life\.$/,
    thirdPerson: false,
    tags: ["damage", "heal"],
    length: 3.0,
  },
  {
    user: "a House Feranki mage",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^A House Feranki mage pulls out a small box the size of a human fist, shakes it, and throws it at you. On contact it explodes, burning you horribly\.$/,
    thirdPerson: false,
    tags: ["damage", "burning"],
    length: 2.5,
  },
  {
    user: "a House Feranki mage",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^A House Feranki mage causes some needles to levitate above his palm. With a gesture, they fly unerringly toward you, pricking your skin. You scream in pain as toxins sear through your body\.$/,
    thirdPerson: false,
    tags: ["damage", "epilepsy"],
    length: 2.5,
  },
  {
    user: "a House Feranki mage",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^A House Feranki mage throws a piece of rope at you. In mid-air, it expands into a mesh of netting that contracts around you\.$/,
    thirdPerson: false,
    tags: ["entagle"],
    length: 2.5,
  },
  {
    user: "a House Tsez air mage",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^A House Tsez air mage clasps her hands in front her face, and in response you find yourself gasping for air, unable to breathe\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a House Tsez air mage",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^A House Tsez air mage gives a dismissive wave of her hand at you, and you feel a tremendous blast of biting wind that threatens to knock you down\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a Vertani guard",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^A Vertani guard sideswipes your ankle with the blunt end of his weapon, the force of the blow causing you to tumble to the ground\.$/,
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 2.5,
  },
  {
    user: "a Vertani guard",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^A Vertani guard vaults towards you with surprising speed, bringing the bladed side of his weapon bearing down on you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
    multiLine: 1,
  },
  {
    user: "a Vertani guard",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^A Vertani guard jabs forward with a powerful blow, skewering through your ribs\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a scimitar-wielding Vertani soldier",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^You gnash your teeth as a scimitar-wielding Vertani soldier brings the butt of his scimitar down on your head, splitting your skull\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a scimitar-wielding Vertani soldier",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^Lunging at you, a scimitar-wielding Vertani soldier slams his gigantic head into yours. You are stunned from the blow\.$/,
    thirdPerson: false,
    tags: ["damage", "stun"],
    length: 2.5,
  },
  {
    user: "a scimitar-wielding Vertani soldier",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^You are nearly bisected as a scimitar-wielding Vertani soldier grunts and slashes into you with a huge scimitar\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "Dynas, the gour trainer",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^Dynas, the gour trainer flicks his staff at your face, connecting square on the nose, which begins to gush blood\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "Dynas, the gour trainer",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^Dynas, the gour trainer brings his staff crashing down onto your head\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a drunken Vertani",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^A drunken Vertani throws a wide haymaker punch at you, connecting against your jaw\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  {
    user: "a drunken Vertani",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^A drunken Vertani unsheathes the dagger from his belt and slashes wildly into you with it\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  {
    user: "a drunken Vertani",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^A drunken Vertani wraps his huge hands around your throat and throttles you violently\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  {
    user: "Ohmut, the Vertan craftswoman",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^Ohmut, the Vertan craftswoman quickly scoops up a jagged rock from the ground before pelting you with it painfully\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "Ohmut, the Vertan craftswoman",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^Ohmut, the Vertan craftswoman swings her pick horizontally, puncturing the side of your torso\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "Rohase, Captain of the Guard",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^Rohase, Captain of the Guard jabs forward with a powerful blow, skewering through your ribs\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.0,
  },
  {
    user: "Rohase, Captain of the Guard",
    areaId: [145],
    areaName: "Tir Murann",
    firstPerson:
      /^Rohase, Captain of the Guard vaults towards you with surprising speed, bringing the bladed side of her weapon bearing down on you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.0,
    multiLine: 1,
  },
];
