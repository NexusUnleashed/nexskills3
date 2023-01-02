import { useEffect, useState } from "react";
import { startUp } from "./base/mongo";
import {
  Box,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const ListItem = ({ skill, index, handleListItemClick, selectedIndex }) => {
  return (
    <ListItemButton
      selected={selectedIndex === index}
      onClick={(event) => handleListItemClick(event, index, skill.id)}
    >
      <ListItemText primary={skill.fullName} />
    </ListItemButton>
  );
};

const SkillTable = ({ skill }) => {
  const emptySkill = {
    id: "",
    fullName: "",
    firstPerson: "",
    secondPerson: "",
    thirdPerson: "",
    profession: "",
    skill: "",
    balance: "",
    afflictions: "",
    length: "",
  };
  const displaySkill = skill !== null ? { ...skill } : { ...emptySkill };
  //console.log(displaySkill);
  //console.log(displaySkill.firstPerson.pattern);
  //console.log(new RegExp(displaySkill.firstPerson.pattern));
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "100px" }}>{""}</TableCell>
            <TableCell align="left">{""}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(displaySkill).map((el) => (
            <TableRow
              key={el}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {el}
              </TableCell>
              <TableCell align="left">{displaySkill[el].toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

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
              ["Occultist", "Dragon"].indexOf(profession) > -1 ? false : true
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

const Dashboard = ({ theme, debugSkills, classList }) => {
  const [loaded, setLoaded] = useState(false);
  const [db, setDb] = useState();
  const [skills, setSkills] = useState(debugSkills);
  const [skill, setSkill] = useState(null);
  const [profession, setProfession] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (event, index, id) => {
    setSkill(skills.find((e) => e.id === id));
    setSelectedIndex(index);
  };

  const handleClassSelector = (event) => {
    setProfession(event.target.value);
    setSkill(null);
    setSelectedIndex(null);
  };

  useEffect(() => {
    const connect = async () => {
      let db = {};
      if (db?.databaseName === "nexAction") {
        return;
      }
      db = await startUp();
      console.log(db);
      globalThis.dbTest = db;
      setDb(db);
      setSkills(await db.find({}));
      setLoaded(true);
    };
    //connect();
    console.log("mongo render");
  }, [loaded]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="div"
        sx={{ backgroundColor: "black", height: "100%", display: "flex" }}
      >
        <Box
          sx={{
            border: "1px grey solid",
            background: "black",
            height: "auto",
            width: "150px",
            padding: "10px",
          }}
        >
          <ClassSelector
            classList={classList}
            profession={profession}
            handleClassSelector={handleClassSelector}
          />
          <List component="nav" aria-label="secondary mailbox folder">
            {skills
              .filter(
                (e) => e.profession === profession || profession === "all"
              )
              .map((skill, i) => (
                <ListItem
                  key={skill.id}
                  skill={skill}
                  index={i}
                  selectedIndex={selectedIndex}
                  handleListItemClick={handleListItemClick}
                />
              ))}
          </List>
        </Box>
        <Box
          sx={{
            border: "1px grey solid",
            background: "black",
            height: "auto",
            width: "100%",
          }}
        >
          <SkillTable skill={skill} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
