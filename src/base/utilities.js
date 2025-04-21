export const nextLine = (txt) => {
  /*const nextLine =
    nexusclient.current_block[
      nexusclient.current_block.indexOf(nexusclient.current_line) + 1
    ];*/
  const nextLine =
    nexusclient.current_block[nexusclient.current_line.index + 1];
  const line = nextLine.parsed_line ? nextLine.parsed_line.text() : "";
  return line.includees(txt);
};

export const inBlock = (txt) => {
  let res = false;
  const cb = nexusclient.current_block;
  const index = nexusclient.current_line.index;
  for (let i = index + 1; i < cb.length; i++) {
    const element = cb[i];
    if (element.parsed_line.text().includes(txt)) {
      res = true;
      break;
    }
  }
  return res;
};

export const nextLines = (txt, num = 1) => {
  /*const nextLine =
    nexusclient.current_block[
      nexusclient.current_block.indexOf(nexusclient.current_line) + num
    ];*/
  const nextLine =
    nexusclient.current_block[nexusclient.current_line.index + num];
  return nextLine.parsed_line ? nextLine.parsed_line.text() : "";
};

export const prevLine = (txt) => {
  const prevLine =
    nexusclient.current_block[
      nexusclient.current_block.indexOf(nexusclient.current_line) - num
    ];
  const line = prevLine.parsed_line ? prevLine.parsed_line.text() : "";
  return line.includees(txt);
};

export const addAction = (action) => {
  const res = {
    id: "",
    fullName: "",
    firstPerson: false,
    secondPerson: false,
    thirdPerson: false,
    profession: [],
    skill: "",
    balance: "",
    tags: [],
    length: 0,
    reaction() {},
  };
  res = { ...res, ...action };
  return res;
};

function checkLine(pattern, index = 1) {
  const nextLine =
    nexusclient.current_block[nexusclient.current_line.index + index];
  const text = nextLine.parsed_line ? nextLine.parsed_line.text() : "";
  const match = text.match(pattern);
  if (match) {
    return `broken${match[1]}${match[2]}`;
  } else {
    return false;
  }
}

export const checkRandomLimbs = (args) => {
  const re = /^Your (\w+) (\w+) breaks with a loud crack\.$/;
  for (let i = 1; i < nexusclient.current_block.length; i++) {
    const match = checkLine(re, i);
    if (match) {
      args.tags.push(match);
    } else {
      break;
    }
  }
};
//echo A greater earth elemental breaks a large chunk away from its rocky form and hurls it at you, the projectile connecting with stunning force.|echo Health lost: 424 (physical blunt).|echo Your left leg breaks with a loud crack.|echo Your right leg breaks with a loud crack.

export const checkSensitivity = (args) => {
  const re2 = /^Your hearing is suddenly restored\.$/;
  const match2 = checkLine(re2);
  if (match2) {
    args.tags.push("undeaf");
  } else {
    args.tags.push("sensitivity???");
  }

  return;
  const re = /^A prickly, stinging sensation spreads through your body\.$/;
  const match = checkLine(re);
  if (match) {
    args.tags.push("sensitivity");
    return true;
  }
};

export const checkTransfix = (args) => {
  const re =
    /^.+? attempts to transfix you, but succeeds only in curing your blindness\.$/;
  const match = checkLine(re);
  if (match) {
    args.tags.push("unblind");
  } else {
    args.tags.push("transfix???");
  }
};

//A prickly, stinging sensation spreads through your body.
//Your hearing is suddenly restored.

//A soldier of Osterrych attempts to transfix you, but succeeds only in curing your blindness.
