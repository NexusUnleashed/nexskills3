import { GMCP } from "./GMCP";
const action = {
  id: "dragonblaze",
  fullName: "Dragonblaze",
  firstPerson:
    /^You breathe a long torrent of flame at (?<target>.+?), igniting \w+ skin\.$/,
  secondPerson: false,
  thirdPerson: false,
  profession: ["dragon"],
  skill: "attainment",
  balance: "battlerage",
  tags: ["battlerage"],
  length: 3.0,
  user: "Khaseem",
  target: "a malevolent hydra",
};
/*
  	Self	       [Incantation]: 4x (30%)	        (40%) A burly troll guard
*/
const crits = [
  ["a CRITICAL", "2x"],
  ["CRUSHING", "4x"],
  ["OBLITERATING", "8x"],
  ["ANNIHILATINGLY", "16x"],
  ["WORLD", "32x"],
  ["PLANE", "64x"],
];
const actions = {
  skill: {
    fg: "",
    bg: "",
    banding: {
      fg: "",
      bg: "",
      symbol: ["[", "]"],
    },
  },
  attainment: {
    fg: "",
    bg: "",
    banding: {
      fg: "",
      bg: "",
      symbol: ["[", "]"],
    },
  },
  npc: {
    fg: "",
    bg: "",
    banding: {
      fg: "",
      bg: "",
      symbol: ["[", "]"],
    },
  },
};

const checkCrit = () => {
  let dmg = "Hit";
  for (let i = 0; i < crits.length; i++) {
    if (typeof nexusclient.current_block === "undefined") {
      break;
    }
    let block =
      nexusclient.current_block[
        nexusclient.current_block.indexOf(nexusclient.current_line) + 1
      ];
    if (typeof block.line === "undefined") {
      break;
    }
    let line = block.line;

    if (line && line.indexOf(crits[i][0]) > 0) {
      block.gag = true;
      dmg = crits[i][1];
      break;
    }
  }
  return dmg;
};

const addBanding = (content, banding, fg) => {
  const segment = document.createElement("span");
  const leftBand = document.createElement("span");
  leftBand.style.color = fg || "white";
  leftBand.textContent = banding[0];
  segment.appendChild(leftBand);

  segment.appendChild(content);

  const rightBand = document.createElement("span");
  rightBand.style.color = fg || "white";
  rightBand.textContent = banding[1];
  segment.appendChild(rightBand);

  return segment;
};
const getCrit = () => {
  const crit = document.createElement("span");
  crit.style.color = "white";
  crit.textContent = `: Hit `; //`: ${checkCrit()}`;
  return crit;
};

const getDamageDone = () => {
  const damage = document.createElement("span");
  damage.style.color = "grey";
  damage.textContent = `${GMCP.Target.HP ? GMCP.Target.hpChange + "%" : ""}`;

  return addBanding(damage, ["(", ")"]);
};

const getNpcHealth = () => {
  const hp = document.createElement("span");
  hp.style.color = "grey"; //`${nexGui.colors.gradient(parseInt(GMCP.Target.HP))}`;
  hp.textContent = `${GMCP.Target.HP ? GMCP.Target.HP : " "}`;
  return addBanding(hp, ["(", ") "]);
};

const getSegment = (size) => {
  const segment = document.createElement("div");
  segment.style.display = "table-cell";
  segment.style.width = size || "";

  return segment;
};

const getName = (name) => {
  const formattedName = document.createElement("span");
  formattedName.style.color = "grey";
  formattedName.textContent = name;

  return formattedName;
};

const getBuffer = (width) => {
  const segment = getSegment(width);
  segment.appendChild(document.createElement("span"));
  return segment;
};

const getUser = (width, name) => {
  const user = getSegment(width);
  user.appendChild(getName(name));
  return user;
};

const getAction = (width, action) => {
  const segment = getSegment(width);
  segment.appendChild() + segment.appendChild(getCrit());
  segment.appendChild(getDamageDone());
  return segment;
};

const getTarget = (width, name) => {
  const target = getSegment(width);
  target.appendChild(getNpcHealth());
  target.appendChild(getName(name));
  return target;
};

export const mainWindowMsg = () => {
  const line = document.createElement("div");
  line.style.width = "calc(100% - 15ch)";
  line.style.display = "inline-table";

  const msg = document.createElement("div");
  msg.style.display = "table-row";
  line.appendChild(msg);

  msg.appendChild(getBuffer("5%"));
  msg.appendChild(getUser("30%", action.user));
  msg.appendChild(getAction("35%", action.fullName));
  msg.appendChild(getTarget("", action.target));

  console.log(line.outerHTML);
  return line.outerHTML;
};
export const actionMsg = (who = "", what = "", subject = "") => {
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

export const npcAttackMsg = (who = "", what = "", subject = "") => {
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
