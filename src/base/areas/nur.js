import {
  checkSensitivity,
  checkRandomLimbs,
  checkTransfix,
} from "../utilities";
import { NpcDefinition } from "../models/NpcDefinition";

const nur = [
  new NpcDefinition({
    user: "a translucent butterfly",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A translucent butterfly beats his wings rapidly and his translucent body takes on a viridescent tinge\. Discharging the vivid energy, he sends a toxic blast to impact with you\.$/,
    tags: ["damage", "loki"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a translucent butterfly",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A translucent butterfly beats his wings rapidly and his translucent body takes on a coal-black tinge\. Discharging the inky energy, he sends a blast of power to impact with you\.$/,
    tags: ["damage", "blackout"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a translucent butterfly",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A translucent butterfly beats his wings rapidly and his translucent body takes on a bright violet tinge\. Discharging the vivid energy, he sends a blast of power to impact with you\.$/,
    tags: ["damage"],
    length: 4,
    reaction(args) {
      checkTransfix(args);
    },
  }),
  new NpcDefinition({
    user: "a translucent butterfly",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A translucent butterfly beats his wings rapidly and his translucent body takes on a soft azure tinge\. Discharging the glacial energy, he sends a blast of power to impact with you.\.$/,
    tags: ["damage"],
    length: 4,
  }),
  new NpcDefinition({
    user: "a translucent butterfly",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A translucent butterfly beats his wings rapidly and his translucent body turns ghostly white\. Discharging the pale energy, he sends a blast of power to impact with you\.$/,
    tags: ["damage", "paralysis"],
    length: 4,
  }),
  new NpcDefinition({
    user: "a translucent butterfly",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A translucent butterfly beats his wings rapidly and his translucent body takes on a bright crimson tinge\. Discharging the blazing energy, he sends a blast of power to impact with you\.$/,
    tags: ["damage", "burning"],
    length: 4,
  }),
  new NpcDefinition({
    user: "a translucent butterfly",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A translucent butterfly beats his wings rapidly and his translucent body takes on a dark amber tinge\. Discharging the crackling energy, he sends a blast of power to impact with you\.$/,
    tags: ["damage"],
    length: 4,
  }),
  new NpcDefinition({
    user: "an elder angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An elder angel tilts his head back opening his mouth to emit a stream of unintelligible words that rain down in a flurry of agonising utterances\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an elder angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An elder angel flicks his fingers in your direction and you are consumed by pure agony\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an elder angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An elder angel sweeps his wings forward in a fiery wave, sending a cascade of fire to consume the area\.$/,
    tags: ["damage", "burning"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an elder angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^As an elder angel reaches forward and grasps your wrist, burning pain quickly consumes your body\.$/,
    tags: ["damage"],
    length: 2,
  }),

  new NpcDefinition({
    user: "an angel spearbearer",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^In a trained motion, an angel spearbearer drives the pointy end of his spear into both of your shoulders with two well-placed jabs\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an angel spearbearer",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^With force and precision, an angel spearbearer drives his spear into your torso, impaling you frightfully\.$/,
    tags: ["damage", "web"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an angel spearbearer",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^Flipping his spear around in a trained motion, an angel spearbearer hits you on the side of the head with the weapon's blunt end\.$/,
    tags: ["damage", "stun"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an angel spearbearer",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^Wielding his spear in one hand and lifting it above his head, an angel spearbearer chants ancient words before throwing the sizzling spear at you as coruscating energy crackles along the weapon's surface\.$/,
    tags: ["damage", "stun"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an angel spearbearer",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^Spinning his spear in one hand, an angel spearbearer ducks down low and jabs his spear between your legs before twisting it, causing you to fall to the ground\.$/,
    tags: ["damage", "prone"],
    length: 2,
    reaction(args) {
      checkRandomLimbs(args);
    },
  }),
  new NpcDefinition({
    user: "an angel spearbearer",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A look of sheer determination clear on his face, an angel spearbearer sweeps his spear in a wide arc with practiced control\.$/,
    tags: ["damage", "prone"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a vanguard angel",
    areaId: [401, 400, 398, 397, 396],
    areaName: "First Circle of Nur",
    firstPerson:
      /^The form of a vanguard angel shifts abruptly to an incorporeal mist which passes through your body, leaving abject terror and searing agony in his wake, before regaining physicality on the other side\.$/,
    thirdPerson:
      /^The form of a vanguard angel shifts abruptly to an incorporeal mist which passes through (?<target>.+?)'s convulsing body before regaining physicality on the other side\.$/,
    tags: ["damage", "blackout", "heal"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a vanguard angel",
    areaId: [401, 400, 398, 397, 396],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A vanguard angel points his radiant sword directly at you, a bolt of pure energy bursting forth and slamming into your chest\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a vanguard angel",
    areaId: [401, 400, 398, 397, 396],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A vanguard angel whirls his fiery sword in a controlled arc that slices you from shoulder to sternum\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a vanguard angel",
    areaId: [401, 400, 398, 397, 396],
    areaName: "First Circle of Nur",
    firstPerson:
      /^His luminous sword a blur of fiery strikes, a vanguard angel stabs you repeatedly, causing notable damage with each thrust\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a vanguard angel",
    areaId: [401, 400, 398, 397, 396],
    areaName: "First Circle of Nur",
    firstPerson:
      /^With a snap, the angel's ethereal wings solidify into twin appendages of finely honed death\. He deploys them with a graceful pivot, mercilessly slicing all in their path\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an expulsor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^Gliding effortlessly through your defences, an expulsor angel smashes her buckler into your extremities with dreadful force\.$/,
    tags: ["damage"],
    length: 2,
    reaction(args) {
      checkRandomLimbs(args);
    },
  }),
  new NpcDefinition({
    user: "an expulsor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^With a snap, an expulsor angel's wings solidify into a stone-like substance. She effortlessly sweeps them forward, slamming them unrelentingly into your vulnerable form\.$/,
    tags: ["damage", "stun"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an expulsor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An expulsor angel slams her buckler into your sternum with brutal force\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an expulsor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A single beat of her wings carries an expulsor angel briefly aloft before she dives towards you in a silent blur, driving her javelin deep into the juncture of your neck and shoulder\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an expulsor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^Batting away your defences, an expulsor angel drives her javelin deep into your exposed body\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an expulsor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An expulsor angel slams her buckler into your sternum with brutal force\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an inquisitor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An inquisitor angel opens her mouth and speaks a single word. The sound of a multitude blasts forth, slamming relentlessly into you in a blast of power\.$/,
    tags: ["damage", "confusion", "dementia"],
    length: 2,
    reaction(args) {
      checkSensitivity(args);
    },
  }),
  new NpcDefinition({
    user: "an inquisitor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An inquisitor angel tilts her head slightly to the side and immediately a multitude of bleeding wounds open up on your body\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an inquisitor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^An inquisitor angel raises her palm and sends a wave of energy to slam painfully into you\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "an inquisitor angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^Pivoting in a tight circle, an inquisitor angel transforms her wings into a fiery blaze that sweeps relentlessly through the room, engulfing you in flames\.$/,
    tags: ["damage", "burning"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a watcher angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A watcher angel opens his mouth and speaks a single word. The sound of a multitude blasts forth, slamming relentlessly into you in a blast of power\.$/,
    tags: ["damage", "confusion", "dementia"],
    length: 2,
    reaction(args) {
      checkSensitivity(args);
    },
  }),
  new NpcDefinition({
    user: "a watcher angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A watcher angel walks calmly forward, his form turning into ethereal mist between one step and the next. You convulse helplessly in agony as the luminous gas enters your body in a haze of fiery retribution\.$/,
    tags: ["damage", "burning"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a watcher angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^A watcher angel turns his burning, sightless gaze in your direction, causing searing agony to erupt throughout your body\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a watcher angel",
    areaId: [401],
    areaName: "First Circle of Nur",
    firstPerson:
      /^Reaching forward, a watcher angel calmly lays his hands on you resulting in agonizing, burning pain\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a muscular angelic razer",
    areaId: [398, 400],
    areaName: "Fifth Circle of Nur",
    firstPerson:
      /^Taking a brisk step backwards, a muscular angelic razer glares piercingly at you with unseeing eyes, his movements filled with contempt\. Without warning, pain flares in your consciousness, radiating from your cranium to fill your body with rending agony\.$/,
    tags: ["damage", "stupidity"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a muscular angelic razer",
    areaId: [398, 400],
    areaName: "Fifth Circle of Nur",
    firstPerson:
      /^Closing with you briskly, a muscular angelic razer punches out with his sheathed sword, winding you with a hefty blow to the stomach\. Stepping back unhurriedly, he pulls the sword from its scabbard and slashes at you twice in quick succession\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a muscular angelic razer",
    areaId: [398, 400],
    areaName: "Fifth Circle of Nur",
    firstPerson:
      /^A muscular angelic razer's wings flare powerfully, sending him colliding into you with his shoulder\. The impact tosses you to the ground like a rag doll, and you can do naught but watch as his hands move in a blur, liberating from its sheath a bastard sword, and guiding it through the air to slice painfully into your exposed form\.$/,
    tags: ["damage", "prone"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a lithe angelic razer",
    areaId: [398, 400],
    areaName: "Fifth Circle of Nur",
    firstPerson:
      /^Taking a brisk step backwards, a lithe angelic razer glares piercingly at you with unseeing eyes, her movements filled with contempt\. Without warning, pain flares in your consciousness, radiating from your cranium to fill your body with rending agony\.$/,
    tags: ["damage", "stupidity"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a lithe angelic razer",
    areaId: [398, 400],
    areaName: "Fifth Circle of Nur",
    firstPerson:
      /^A lithe angelic razer abruptly blurs into motion, leaping through the air and slicing into you with her longswords\. An instant later, her full weight crashes into you as she plants one foot on your chest and kicks off, before floating to the ground a few paces away\.$/,
    tags: ["damage"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a lithe angelic razer",
    areaId: [398, 400],
    areaName: "Fifth Circle of Nur",
    firstPerson:
      /^Advancing upon you swiftly, a lithe angelic razer swings her left-hand longsword in a powerful overarm arc, inflicting a withering strike that crushes your bones\.$/,
    tags: ["damage"],
    length: 2,
    reaction(args) {
      checkRandomLimbs(args);
    },
  }),
  new NpcDefinition({
    user: "a solemn angel",
    areaId: [397],
    areaName: "Sixth Circle of Nur",
    firstPerson:
      /^Looking down on you with primal ire, a solemn angel jerks her hand up, causing shafts of light to burst through the ground, impaling you in place\.$/,
    tags: ["damage", "impaled"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a solemn angel",
    areaId: [397],
    areaName: "Sixth Circle of Nur",
    firstPerson:
      /^Darting towards you with blinding speed, a solemn angel slashes her hand across your chest, leaving a ghastly glowing wound behind\.$/,
    tags: ["damage", "burning"],
    length: 2,
  }),
  new NpcDefinition({
    user: "a solemn angel",
    areaId: [397],
    areaName: "Sixth Circle of Nur",
    firstPerson:
      /^Drawing her wings out to full length, a solemn angel swiftly claps them together, buffeting you with a massive gust of wind\.$/,
    tags: ["damage", "prone"],
    length: 2,
  }),
];

export default nur;
