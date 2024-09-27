//aimlessglobe
//You toss a globe of the aimless at Mizik, the glass shattering into a spray of sparkling dust which falls over him in a shining shroud.
//3s balance

export const talismans = {
  searedglyph: {
    id: "searedglyph",
    fullName: "Seared Glyph",
    firstPerson:
      /^Fire lashes out from a Shield of Absorption, ravaging the unsuspecting form of (?<target>.+?) with its insatiable fury\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["general"],
    skill: "talisman",
    balance: "free",
    tags: ["damage", "pve"],
    length: 0,
  },
};

export default Object.values(talismans);

//Aegoth points his fists at the ground and freezing blasts of air emanate from his bracers to cover it in ice.
