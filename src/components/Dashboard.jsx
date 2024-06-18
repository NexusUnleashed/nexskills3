import { Box, List, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { startUp } from "../base/mongo";
import ClassSelector from "./ClassSelector";
import SkillListItem from "./SkillListItem";
import SkillTable from "./SkillTable";

const Dashboard = ({ theme, debugSkills, classList }) => {
  const [loaded, setLoaded] = useState(false);
  const [db, setDb] = useState();
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState(null);
  const [profession, setProfession] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (event, id, selected) => {
    const check = id.split("-");
    if (check.length !== 4) {
      return;
    }
    console.log(check[3]);
    globalThis.tester = skills.find((e) => e.id === check[3]);
    setSkill(debugSkills.find((e) => e.id === check[3]));
    setSelectedIndex(selected);
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
      setDb(db);
      let tempSkills = await db.find({});
      tempSkills = tempSkills.map((e) => ({
        ...e,
        firstPerson: e.firstPerson ? new RegExp(e.firstPerson.pattern) : false,
        secondPerson: e.secondPerson
          ? new RegExp(e.secondPerson.pattern)
          : false,
        thirdPerson: e.thirdPerson ? new RegExp(e.thirdPerson.pattern) : false,
      }));
      setSkills([...tempSkills]);
      setLoaded(true);
    };
    connect();
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
          {/*<ClassSelector
            classList={classList}
            profession={profession}
            handleClassSelector={handleClassSelector}
          />*/}
          <SimpleTreeView onItemSelectionToggle={handleListItemClick}>
            {Object.keys(classList).map((id, i) => (
              <TreeItem
                itemId={`grid-${id}`}
                label={`${id} (${
                  debugSkills.filter((e) =>
                    e.profession.includes(id.toLowerCase())
                  ).length
                })`}
                key={`grid-${id}`}
              >
                {[...classList[id], "Attainment"].map((id2, i2) => (
                  <TreeItem
                    itemId={`grid-${id}-${id2}`}
                    label={`${id2} (${
                      debugSkills.filter(
                        (e) =>
                          e.skill === id2.toLowerCase() &&
                          e.profession.includes(id.toLowerCase())
                      ).length
                    })`}
                    key={`grid-${id}-${id2}`}
                  >
                    {debugSkills
                      .filter((e) => e.skill === id2.toLowerCase())
                      .map((skill, i3) => (
                        <TreeItem
                          itemId={`grid-${id}-${id2}-${skill.id}`}
                          label={skill.fullName}
                          key={`grid-${id}-${id2}-${skill.id}`}
                        ></TreeItem>
                      ))}
                  </TreeItem>
                ))}
              </TreeItem>
            ))}
          </SimpleTreeView>
          {/*
          <List component="nav" aria-label="secondary mailbox folder">
            {skills
              .filter(
                (e) => e.profession === profession || profession === "all"
              )
              .map((skill, i) => (
                <SkillListItem
                  key={skill.id}
                  skill={skill}
                  index={i}
                  selectedIndex={selectedIndex}
                  handleListItemClick={handleListItemClick}
                />
              ))}
          </List>
*/}
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
