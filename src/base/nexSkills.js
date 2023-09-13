/* global eventStream, GMCP, nexGui */

import { startUp } from "./mongo";

import { actions as occultist } from "./skills/occultist";
import { actions as dragon } from "./skills/dragon";
import { actions as depthswalker } from "./skills/depthswalker";
import { actions as pariah } from "./skills/occultist";
import { actions as psion } from "./skills/psion";

import { npcs as battlesite } from "./areas/battlesite";
import { npcs as judgementMountain } from "./areas/judgementMountain";
import { npcs as grukaiSwamp } from "./areas/grukaiSwamp";
import { npcs as istarion } from "./areas/istarion";
import { npcs as nur } from "./areas/nur";
import { npcs as riagath } from "./areas/riagath";
import { npcs as tirMuran } from "./areas/tirMuran";
import { npcs as tuar } from "./areas/tuar";
import { npcs as yggdrasil } from "./areas/yggdrasil";

const npcs = [
  ...battlesite,
  ...judgementMountain,
  ...grukaiSwamp,
  ...istarion,
  ...nur,
  ...riagath,
  ...tirMuran,
  ...tuar,
  ...yggdrasil,
];

const actions = [...occultist, ...dragon, ...depthswalker, ...pariah, ...psion];

export const classList = [
  "Alchemist",
  "Apostate",
  "Bard",
  "Blademaster",
  "Depthswalker",
  "Dragon",
  "Druid",
  "Infernal",
  "Jester",
  "Magi",
  "Monk",
  "Occultist",
  "Paladin",
  "Pariah",
  "Priest",
  "Psion",
  "Runewarden",
  "Sentinel",
  "Serpent",
  "Shaman",
  "Sylvan",
  "Unnamable",
  "Air elemental lord",
  "Earth elemental lord",
  "Fire elemental lord",
  "Water elemental lord",
];

//You can use another Battlerage ability again. Available abilities: Overwhelm
//You can use Dragonblaze again.
//The flames of dragonbreath fade from a fortress guardsman's skin.
//A knight of the Siroccian Order's blackened flesh slowly knits together.

const checkSkillsOld = (line) => {
  const text = line;
  let result = false;

  for (let i = 0; i < actions.length; i++) {
    const element = actions[i];
    const checks = [];
    if (
      element.profession === GMCP.Char.Status.class.toLowerCase() ||
      GMCP.Char.Status.class.toLowerCase().indexOf(element.profession) > -1
    ) {
      checks.push(element.firstPerson);
    }
    checks.push(element.secondPerson, element.thirdPerson);

    for (const check of checks) {
      result = text.match(check);
      if (result) {
        break;
      }
    }

    if (result) {
      result.groups.action = element.id;
      eventStream.raiseEvent("nexSkillMatch", {
        matches: result,
        action: element,
      });
      break;
    }
  }

  return result ? result : false;
};

export const nextLine = (num = 1) => {
  const nextLine =
    nexusclient.current_block[
      nexusclient.current_block.indexOf(nexusclient.current_line) + num
    ];
  return nextLine.parsed_line ? nextLine.parsed_line.text() : "";
};

const checkSkills = (text) => {
  let result = false;
  let action = false;

  for (let i = 0; i < actions.length; i++) {
    action = actions[i];
    if (GMCP.Char.Status.class.toLowerCase().includes(action.profession)) {
      result = text.match(action.firstPerson);
      if (result) {
        action.user = "self";
        action.target = result.groups.target;
        break;
      }
    }

    result = text.match(action.secondPerson);
    if (result) {
      action.user = result.groups.user;
      action.target = "self";
      break;
    }

    result = text.match(action.thirdPerson);
    if (result) {
      action.user = result.groups.user;
      action.target = result.groups.target;
      break;
    }
  }

  if (result) {
    eventStream.raiseEvent("nexSkillMatch", action);
  }

  if (!result) {
    return checkNpcs(text);
  }
  return result;
};

const checkNpcs = (text) => {
  let result = false;
  let action = false;

  const areaNpcs = npcs.filter((e) => e.areaId.includes(GMCP.Location.areaid));
  if (areaNpcs.length === 0) {
    return false;
  }

  for (let i = 0; i < areaNpcs.length; i++) {
    action = areaNpcs[i];

    result = text.match(action.firstPerson);
    if (result) {
      action.target = "self";
      if (result.groups?.user) {
        action.user = result.groups.user;
      }
      break;
    }

    result = text.match(action.thirdPerson);
    if (result) {
      action.target = result.groups.target;
      break;
    }
  }

  if (result) {
    eventStream.raiseEvent("nexSkillNpcMatch", action);
  }

  return result ? result : false;
};

const actionMsg = (who = "", what = "", subject = "") => {
  let line = document.createElement("div");
  line.style.width = "calc(100% - 15ch)";
  line.style.display = "inline-table";

  let msg = document.createElement("div");
  msg.style.display = "table-row";
  line.appendChild(msg);

  let buffer = document.createElement("div");
  buffer.style.display = "table-cell";
  buffer.style.width = "5%";

  // Who did the action?
  let whoHTML = document.createElement("div");
  whoHTML.style.display = "table-cell";
  whoHTML.style.color =
    nexGui.colors.subjects[who.toLowerCase()]?.color || playerColor(who);
  whoHTML.style.width = "30%";
  whoHTML.textContent =
    nexGui.colors.subjects[who.toLowerCase()]?.text ||
    globalThis._.capitalize(who);

  // What did they do?
  let whatHTML = document.createElement("div");
  whatHTML.style.width = "35%";
  whatHTML.style.display = "table-cell";
  let action = document.createElement("span");
  if (nexGui.colors.attacks[what]) {
    action.style.color = nexGui.colors.attacks[what]?.color || "grey";
    action.textContent = nexGui.colors.attacks[what]?.text ?? what;
    whatHTML.appendChild(
      Object.assign(document.createElement("span"), {
        style: "color:white",
        textContent: "[",
      })
    );
    whatHTML.appendChild(action);
    whatHTML.appendChild(
      Object.assign(document.createElement("span"), {
        style: "color:white",
        textContent: "]",
      })
    );
  } else {
    action.style.color = nexGui.colors.actions[what]?.color || "grey";
    action.textContent = nexGui.colors.actions[what]?.text ?? what;
    whatHTML.appendChild(action);
  }

  // Who did they do it to?
  let subjectHTML = document.createElement("div");
  subjectHTML.style.display = "table-cell";
  subjectHTML.style.color =
    nexGui.colors.subjects[subject.toLowerCase()]?.color ||
    nexGui.colors.playerColor(subject);
  subjectHTML.textContent =
    nexGui.colors.subjects[subject.toLowerCase()]?.text ?? subject.capitalize();

  // PVE specific formating for crit hits and health.
  // If the target is not a player then the attack could possibly crit.
  if (
    nexGui.colors.attacks[what] &&
    (subject.indexOf(" ") || !nexGui.cdb.players[subject])
  ) {
    let crit = document.createElement("span");
    crit.style.color = "white";
    crit.textContent = `: ${checkCrit()}`;
    whatHTML.appendChild(crit);

    // If the subject is not a player.
    // If the subject is our target, we should know how much damage the attack did.
    // We should also know how much health the target has remaining.
    if (
      !nexGui.cdb.players[subject.toLowerCase()] &&
      subject.toLowerCase() === GMCP.Target.Text?.toLowerCase()
    ) {
      let damage = document.createElement("span");
      damage.style.color = "grey";
      damage.textContent = `${
        GMCP.Target.HP ? GMCP.Target.hpChange + "%" : ""
      }`;
      whatHTML.appendChild(
        Object.assign(document.createElement("span"), {
          style: "color:white",
          textContent: " (",
        })
      );
      whatHTML.appendChild(damage);
      whatHTML.appendChild(
        Object.assign(document.createElement("span"), {
          style: "color:white",
          textContent: ")",
        })
      );

      let hp = document.createElement("span");
      hp.style.color = `${nexGui.colors.gradient(parseInt(GMCP.Target.HP))}`;
      hp.textContent = `${GMCP.Target.HP ? GMCP.Target.HP : " "}`;
      subjectHTML.prepend(
        Object.assign(document.createElement("span"), {
          style: "color:white",
          textContent: ") ",
        })
      );
      subjectHTML.prepend(hp);
      subjectHTML.prepend(
        Object.assign(document.createElement("span"), {
          style: "color:white",
          textContent: "(",
        })
      );
    }
  }

  msg.appendChild(buffer);
  msg.appendChild(whoHTML);
  msg.appendChild(whatHTML);
  msg.appendChild(subjectHTML);

  globalThis.nexusclient.current_line.parsed_line.formatted = () => {
    return line.outerHTML;
  };
  return line.outerHTML;
};

const npcAttackMsg = (who = "", what = "", subject = "") => {
  let line = document.createElement("div");
  line.style.width = "calc(100% - 15ch)";
  line.style.display = "inline-table";

  let msg = document.createElement("div");
  msg.style.display = "table-row";
  line.appendChild(msg);

  let buffer = document.createElement("div");
  buffer.style.display = "table-cell";
  buffer.style.width = "5%";

  // Who did the action?
  let whoHTML = document.createElement("div");
  whoHTML.style.display = "table-cell";
  (whoHTML.style.color = "grey"), (whoHTML.style.width = "30%");
  whoHTML.textContent = globalThis._.capitalize(who);

  // What did they do?
  let whatHTML = document.createElement("div");
  whatHTML.style.width = "35%";
  whatHTML.style.display = "table-cell";
  whatHTML.appendChild(
    Object.assign(document.createElement("span"), {
      style: "color:red",
      textContent: "\u00AB",
    })
  );

  for (let i = 0; i < what.length; i++) {
    const attack = what[i];

    if (i > 0) {
      whatHTML.appendChild(
        Object.assign(document.createElement("span"), {
          style: "",
          textContent: ", ",
        })
      );
    }

    whatHTML.appendChild(
      Object.assign(document.createElement("span"), {
        style: `color:${
          nexSys.prompt.affAbbrev[attack]?.fg || ""
        }; background: ${nexSys.prompt.affAbbrev[attack]?.bg || ""}`,
        textContent:
          attack === "damage"
            ? nexSys.prompt.vars.diffhp.text || "-0%"
            : globalThis._.capitalize(attack),
      })
    );
  }

  whatHTML.appendChild(
    Object.assign(document.createElement("span"), {
      style: "color:red",
      textContent: "\u00BB",
    })
  );

  // Who did they do it to?
  let subjectHTML = document.createElement("div");
  subjectHTML.style.display = "table-cell";
  subjectHTML.style.color =
    nexGui.colors.subjects[subject.toLowerCase()]?.color ||
    nexGui.colors.playerColor(subject);
  subjectHTML.textContent =
    nexGui.colors.subjects[subject.toLowerCase()]?.text ?? subject.capitalize();

  msg.appendChild(buffer);
  msg.appendChild(whoHTML);
  msg.appendChild(whatHTML);
  msg.appendChild(subjectHTML);

  globalThis.nexusclient.current_line.parsed_line.formatted = () => {
    return line.outerHTML;
  };
  return line.outerHTML;
};

export const nexSkills = {
  actions: actions,
  npcs: npcs,

  actionMsg: actionMsg,
  npcAttackMsg: npcAttackMsg,
  checkSkills: checkSkills,
  checkNpcs: checkNpcs,
  startUp: startUp,
};

globalThis.nexSkills = nexSkills;
