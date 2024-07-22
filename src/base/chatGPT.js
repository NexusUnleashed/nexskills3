const checkSkills = (text) => {
  const profession = GMCP.Char.Status.class.toLowerCase();

  // Helper function to process match results
  const processMatch = (
    result,
    action,
    matchType,
    defaultUser,
    defaultTarget
  ) => {
    if (result) {
      const { groups } = result;
      action.match = matchType;
      action.user = groups?.user || defaultUser;
      action.target = groups?.target || defaultTarget;
      action.info = groups?.info || false;
      return true;
    }
    return false;
  };

  // Helper function to check multiple regex patterns
  const checkPatterns = (
    patterns,
    text,
    action,
    matchType,
    defaultUser,
    defaultTarget
  ) => {
    if (!patterns) return false;
    if (!Array.isArray(patterns)) patterns = [patterns];

    for (let pattern of patterns) {
      const result = text.match(pattern);
      if (processMatch(result, action, matchType, defaultUser, defaultTarget)) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < actions.length; i++) {
    const action = { ...actions[i] };
    const {
      profession: actionProf,
      firstPerson,
      secondPerson,
      thirdPerson,
    } = action;

    if (actionProf.includes(profession) || actionProf.includes("general")) {
      if (checkPatterns(firstPerson, text, action, "firstPerson", "self", "")) {
        action.target =
          action.target.toLowerCase() === "you" ? "self" : action.target;
        return finalizeAction(action);
      }
      if (
        checkPatterns(
          secondPerson,
          text,
          action,
          "secondPerson",
          "self",
          "self"
        )
      ) {
        return finalizeAction(action);
      }
      if (checkPatterns(thirdPerson, text, action, "thirdPerson", "", "")) {
        return finalizeAction(action);
      }
    }
  }

  return checkNpcs(text);

  function finalizeAction(action) {
    if (action.reaction) {
      action.reaction(action);
    }

    eventStream.raiseEvent("nexSkillMatch", action);
    eventStream.raiseEvent(`nexSkillMatch${action.id}`, action);

    return action;
  }
};

// Example action object
const action = {
  id: "interlink",
  fullName: "Interlink",
  firstPerson: [
    /^You seize upon the aura of (?<target>\w+), and violently twist \w+ (?<limb>.+?) out of alignment with the planar norm\.$/,
    /^Second pattern here$/,
  ],
  secondPerson: [
    /^Pain lances through your (?<limb>.+?) as the fingers of (?<user>\w+) twitch in an aborted motion towards you\.$/,
    /^Second pattern here$/,
  ],
  thirdPerson: [
    /^A red glow surrounds the (?<limb>.+?) of (?<target>\w+), bones twisting beneath the skin\.$/,
    /^Second pattern here$/,
  ],
  profession: ["occultist"],
  skill: "occultism",
  balance: "equilibrium",
  info: false,
  affs: [],
  tags: ["aff"],
  length: 2.6,
  reaction(action) {
    action.info = action.args.groups.limb;
    action.affs.push(`broken${action.args.groups.limb.replace(" ", "")}`);
  },
};
