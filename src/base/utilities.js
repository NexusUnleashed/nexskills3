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
  const index = nexusclient.current_block.current_line.index;
  for (let i = index + 1; i < nexusclient.current_block.length; i++) {
    const element = nexusclient.current_block[i];
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

export const checkRandomLimb = () => {
  /*const nextLine =
    nexusclient.current_block[
      nexusclient.current_block.indexOf(nexusclient.current_line) + 1
    ];*/
  const nextLine =
    nexusclient.current_block[nexusclient.current_line.index + 1];
  const line = nextLine.parsed_line ? nextLine.parsed_line.text() : "";
  const match = line.match(/^Your (\w+) (\w+) breaks with a loud crack\.$/);
  if (match) {
    return `broken${match[1]}${match[2]}`;
  } else {
    return `brokenleftarm`;
  }
};
