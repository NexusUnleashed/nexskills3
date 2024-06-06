import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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

export default SkillTable;
