import { nexSkills } from "../base/nexSkills";

describe("Checkskill", () => {
  test("Third Person", () => {
    const text =
      "Khaseem reaches out and clenches a fist before Pamxen, who screams and doubles over in agony as his skin suddenly bubbles with gangrenous growths.";
    expect(nexSkills.checkSkills(text)).toBe(true);
  });
});
