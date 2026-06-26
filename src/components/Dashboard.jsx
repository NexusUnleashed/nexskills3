import { Box, List, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
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
    if (check.length !== 5) {
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
      const normalizePattern = (value) => {
        if (!value) {
          return false;
        }
        if (Array.isArray(value)) {
          const res = value
            .map((entry) => normalizePattern(entry))
            .filter(Boolean);
          return res.length ? res : false;
        }
        if (value instanceof RegExp) {
          return value;
        }
        if (typeof value === "string") {
          return new RegExp(value);
        }
        if (value.pattern) {
          return new RegExp(value.pattern);
        }
        return false;
      };

      const normalizePatterns = (entry) => {
        const source = entry.patterns ?? {
          firstPerson: entry.firstPerson,
          secondPerson: entry.secondPerson,
          thirdPerson: entry.thirdPerson,
        };
        return {
          firstPerson: normalizePattern(source.firstPerson),
          secondPerson: normalizePattern(source.secondPerson),
          thirdPerson: normalizePattern(source.thirdPerson),
        };
      };

      let db = {};
      if (db?.databaseName === "nexAction") {
        return;
      }
      db = await startUp();
      setDb(db);
      let tempSkills = await db.find({});
      tempSkills = tempSkills.map((e) => {
        const { firstPerson, secondPerson, thirdPerson, ...rest } = e;
        return {
          ...rest,
          patterns: normalizePatterns(e),
        };
      });
      setSkills([...tempSkills]);
      setLoaded(true);
    };
    //connect();
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
            width: "250px",
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
                      .filter(
                        (e) =>
                          e.skill === id2.toLowerCase() &&
                          e.profession.includes(id.toLowerCase())
                      )
                      .map((skill, i3) => (
                        <TreeItem
                          itemId={`grid-${id}-${id2}-${skill.id}-${i3}`}
                          label={skill.fullName}
                          key={`grid-${id}-${id2}-${skill.id}-${i3}`}
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
