export const npcs = [
  {
    user: "a translucent butterfly",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A translucent butterfly beats his wings rapidly and his translucent body takes on a viridescent tinge. Discharging the vivid energy, he sends a toxic blast to impact with you\.$/,
    thirdPerson: false,
    tags: ["damage", "loki"],
    length: 2,
  },
  {
    user: "a translucent butterfly",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A translucent butterfly beats his wings rapidly and his translucent body takes on a bright violet tinge. Discharging the vivid energy, he sends a blast of power to impact with you\.$/,
    thirdPerson: false,
    tags: ["damage", "transfix??? (fix this)"],
    length: 4,
  },
  {
    user: "a translucent butterfly",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A translucent butterfly beats his wings rapidly and his translucent body turns ghostly white. Discharging the pale energy, he sends a blast of power to impact with you\.$/,
    thirdPerson: false,
    tags: ["damage", "paralysis"],
    length: 4,
  },
  {
    user: "a translucent butterfly",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A translucent butterfly beats his wings rapidly and his translucent body takes on a bright crimson tinge. Discharging the blazing energy, he sends a blast of power to impact with you\.$/,
    thirdPerson: false,
    tags: ["damage", "burning"],
    length: 4,
  },
  {
    user: "a translucent butterfly",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A translucent butterfly beats his wings rapidly and his translucent body takes on a dark amber tinge. Discharging the crackling energy, he sends a blast of power to impact with you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 4,
  },
  {
    user: "an elder angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An elder angel flicks his fingers in your direction and you are consumed by pure agony\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "an elder angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An elder angel sweeps his wings forward in a fiery wave, sending a cascade of fire to consume the area\.$/,
    thirdPerson: false,
    tags: ["damage", "burning"],
    length: 2,
  },
  {
    user: "an elder angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^As an elder angel reaches forward and grasps your wrist, burning pain quickly consumes your body\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },

  {
    user: "an angel spearbearer",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^In a trained motion, an angel spearbearer drives the pointy end of his spear into both of your shoulders with two well-placed jabs\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "an angel spearbearer",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^With force and precision, an angel spearbearer drives his spear into your torso, impaling you frightfully\.$/,
    thirdPerson: false,
    tags: ["damage", "webbed"],
    length: 2,
  },
  {
    user: "an angel spearbearer",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^Flipping his spear around in a trained motion, an angel spearbearer hits you on the side of the head with the weapon's blunt end\.$/,
    thirdPerson: false,
    tags: ["damage", "stun"],
    length: 2,
  },
  {
    user: "an angel spearbearer",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^Wielding his spear in one hand and lifting it above his head, an angel spearbearer chants ancient words before throwing the sizzling spear at you as coruscating energy crackles along the weapon's surface\.$/,
    thirdPerson: false,
    tags: ["damage", "stun"],
    length: 2,
  },
  {
    user: "an angel spearbearer",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^Spinning his spear in one hand, an angel spearbearer ducks down low and jabs his spear between your legs before twisting it, causing you to fall to the ground\.$/,
    thirdPerson: false,
    tags: ["damage", "prone", "brokenleftleg"],
    length: 2,
    reaction() {},
  },
  {
    user: "an angel spearbearer",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A look of sheer determination clear on his face, an angel spearbearer sweeps his spear in a wide arc with practiced control\.$/,
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 2,
  },
  {
    user: "a vanguard angel",
    areaId: [401, 400, 398, 397, 396],
    areaName: "First Circle of Nur",
    firstPerson:
      /^The form of a vanguard angel shifts abruptly to an incorporeal mist which passes through your body, leaving abject terror and searing agony in his wake, before regaining physicality on the other side\.$/,
    thirdPerson:
      /^The form of a vanguard angel shifts abruptly to an incorporeal mist which passes through (?<target>.+?)'s convulsing body before regaining physicality on the other side\.$/,
    tags: ["damage", "blackout", "heal"],
    length: 2,
  },
  {
    user: "a vanguard angel",
    areaId: [401, 400, 398, 397, 396],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A vanguard angel points his radiant sword directly at you, a bolt of pure energy bursting forth and slamming into your chest\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "a vanguard angel",
    areaId: [401, 400, 398, 397, 396],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A vanguard angel whirls his fiery sword in a controlled arc that slices you from shoulder to sternum\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "a vanguard angel",
    areaId: [401, 400, 398, 397, 396],
    areaName: "First Circle of Nur",
    firstPerson:
      /^His luminous sword a blur of fiery strikes, a vanguard angel stabs you repeatedly, causing notable damage with each thrust\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "a vanguard angel",
    areaId: [401, 400, 398, 397, 396],
    areaName: "First Circle of Nur",
    firstPerson:
      /^With a snap, the angel's ethereal wings solidify into twin appendages of finely honed death\. He deploys them with a graceful pivot, mercilessly slicing all in their path\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "an expulsor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^Gliding effortlessly through your defences, an expulsor angel smashes her buckler into your extremities with dreadful force\.$/,
    thirdPerson: false,
    tags: ["damage", "brokenleftleg"], // TODO Random limb
    length: 2,
  },
  {
    user: "an expulsor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^With a snap, an expulsor angel's wings solidify into a stone-like substance. She effortlessly sweeps them forward, slamming them unrelentingly into your vulnerable form\.$/,
    thirdPerson: false,
    tags: ["damage", "stun"],
    length: 2,
  },
  {
    user: "an expulsor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An expulsor angel slams her buckler into your sternum with brutal force\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "an expulsor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A single beat of her wings carries an expulsor angel briefly aloft before she dives towards you in a silent blur, driving her javelin deep into the juncture of your neck and shoulder\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "an expulsor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^Batting away your defences, an expulsor angel drives her javelin deep into your exposed body\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "an expulsor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An expulsor angel slams her buckler into your sternum with brutal force\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "an inquisitor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An inquisitor angel opens her mouth and speaks a single word. The sound of a multitude blasts forth, slamming relentlessly into you in a blast of power\.$/,
    thirdPerson: false,
    tags: ["damage", "undeaf", "confusion", "dementia"],
    length: 2,
  },
  {
    user: "an inquisitor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An inquisitor angel tilts her head slightly to the side and immediately a multitude of bleeding wounds open up on your body\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "an inquisitor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An inquisitor angel raises her palm and sends a wave of energy to slam painfully into you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "an inquisitor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^Pivoting in a tight circle, an inquisitor angel transforms her wings into a fiery blaze that sweeps relentlessly through the room, engulfing you in flames\.$/,
    thirdPerson: false,
    tags: ["damage", "burning"],
    length: 2,
  },
  {
    user: "a watcher angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A watcher angel opens his mouth and speaks a single word. The sound of a multitude blasts forth, slamming relentlessly into you in a blast of power\.$/,
    thirdPerson: false,
    tags: ["damage", "undeaf", "confusion", "dementia"],
    length: 2,
  },
  {
    user: "a watcher angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A watcher angel walks calmly forward, his form turning into ethereal mist between one step and the next. You convulse helplessly in agony as the luminous gas enters your body in a haze of fiery retribution\.$/,
    thirdPerson: false,
    tags: ["damage", "burning"],
    length: 2,
  },
  {
    user: "a watcher angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A watcher angel turns his burning, sightless gaze in your direction, causing searing agony to erupt throughout your body\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "a watcher angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^Reaching forward, a watcher angel calmly lays his hands on you resulting in agonizing, burning pain\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "a muscular angelic razer",
    areaId: [398, 400],
    areaName: "Fifth Circle of Nur",
    firstPerson:
      /^Taking a brisk step backwards, a muscular angelic razer glares piercingly at you with unseeing eyes, his movements filled with contempt\. Without warning, pain flares in your consciousness, radiating from your cranium to fill your body with rending agony\.$/,
    thirdPerson: false,
    tags: ["damage", "stupidity"],
    length: 2,
  },
  {
    user: "a muscular angelic razer",
    areaId: [398, 400],
    areaName: "Fifth Circle of Nur",
    firstPerson:
      /^Closing with you briskly, a muscular angelic razer punches out with his sheathed sword, winding you with a hefty blow to the stomach\. Stepping back unhurriedly, he pulls the sword from its scabbard and slashes at you twice in quick succession\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "a muscular angelic razer",
    areaId: [398, 400],
    areaName: "Fifth Circle of Nur",
    firstPerson:
      /^A muscular angelic razer's wings flare powerfully, sending him colliding into you with his shoulder\. The impact tosses you to the ground like a rag doll, and you can do naught but watch as his hands move in a blur, liberating from its sheath a bastard sword, and guiding it through the air to slice painfully into your exposed form\.$/,
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 2,
  },
  {
    user: "a lithe angelic razer",
    areaId: [398, 400],
    areaName: "Fifth Circle of Nur",
    firstPerson:
      /^Taking a brisk step backwards, a lithe angelic razer glares piercingly at you with unseeing eyes, her movements filled with contempt\. Without warning, pain flares in your consciousness, radiating from your cranium to fill your body with rending agony\.$/,
    thirdPerson: false,
    tags: ["damage", "stupidity"],
    length: 2,
  },
  {
    user: "a lithe angelic razer",
    areaId: [398, 400],
    areaName: "Fifth Circle of Nur",
    firstPerson:
      /^A lithe angelic razer abruptly blurs into motion, leaping through the air and slicing into you with her longswords\. An instant later, her full weight crashes into you as she plants one foot on your chest and kicks off, before floating to the ground a few paces away\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2,
  },
  {
    user: "a lithe angelic razer",
    areaId: [398, 400],
    areaName: "Fifth Circle of Nur",
    firstPerson:
      /^Advancing upon you swiftly, a lithe angelic razer swings her left-hand longsword in a powerful overarm arc, inflicting a withering strike that crushes your bones\.$/,
    thirdPerson: false,
    tags: ["damage", "brokenleftarm"], //random ARM break
    length: 2,
  },
  {
    user: "a solemn angel",
    areaId: [397],
    areaName: "Sixth Circle of Nur",
    firstPerson:
      /^Looking down on you with primal ire, a solemn angel jerks her hand up, causing shafts of light to burst through the ground, impaling you in place\.$/,
    thirdPerson: false,
    tags: ["damage", "impaled"],
    length: 2,
  },
  {
    user: "a solemn angel",
    areaId: [397],
    areaName: "Sixth Circle of Nur",
    firstPerson:
      /^Darting towards you with blinding speed, a solemn angel slashes her hand across your chest, leaving a ghastly glowing wound behind\.$/,
    thirdPerson: false,
    tags: ["damage", "burning"],
    length: 2,
  },
  {
    user: "a solemn angel",
    areaId: [397],
    areaName: "Sixth Circle of Nur",
    firstPerson:
      /^Drawing her wings out to full length, a solemn angel swiftly claps them together, buffeting you with a massive gust of wind\.$/,
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 2,
  },
];
