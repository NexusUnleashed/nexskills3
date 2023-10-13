export const nextLine = (txt) => {
    const nextLine =
        nexusclient.current_block[
        nexusclient.current_block.indexOf(nexusclient.current_line) + 1
        ];
    const line = nextLine.parsed_line ? nextLine.parsed_line.text() : "";
    return line.includees(txt);
};

export const nextLines = (txt, num = 1) => {
    const nextLine =
        nexusclient.current_block[
        nexusclient.current_block.indexOf(nexusclient.current_line) + num
        ];
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
        multiLine: 0,
        tags: [],
        length: 0,
        reaction() { }
    };
    res = { ...res, ...action };
    return res;
};