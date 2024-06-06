import { ListItemButton, ListItemText } from "@mui/material";

const SkillListItem = ({
  skill,
  index,
  handleListItemClick,
  selectedIndex,
}) => {
  return (
    <ListItemButton
      selected={selectedIndex === index}
      onClick={(event) => handleListItemClick(event, index, skill.id)}
    >
      <ListItemText primary={skill.fullName} />
    </ListItemButton>
  );
};

export default SkillListItem;
