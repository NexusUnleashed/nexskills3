import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ClassSelector = ({ classList, profession, handleClassSelector }) => {
  const handleChange = (e) => {
    handleClassSelector(e);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">Class</InputLabel>
      <Select
        labelId="select-label"
        id="simple-select"
        value={profession}
        label="Class"
        onChange={handleChange}
      >
        <MenuItem value={"all"}>{"All"}</MenuItem>
        {classList.map((profession, i) => (
          <MenuItem
            disabled={
              //["Occultist", "Dragon"].indexOf(profession) > -1 ? false : true
              nexSkills.actions.find((e) => e.profession.includes("psion"))
                ? false
                : true
            }
            value={profession.toLowerCase()}
            key={i}
          >
            {profession}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ClassSelector;
