import "./FilteredUnitsTable.scss";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import testUnits from "../../../utils/testUnits";

/**
 *  Renders the filtered units into Table
 */

const FilteredUnitsTable = () => {
  let history = useHistory();

  // create rows from testUnits object to use in Table
  const rows = testUnits.map((unit) => {
    const { id, name, age, cost } = unit;
    return { id, name, age, cost };
  });

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table" className="table">
        {/* Head part of table */}
        <TableHead>
          <TableRow>
            <TableCell id="tHeadId">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Costs</TableCell>
          </TableRow>
        </TableHead>

        {/* Body part of table */}
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              onClick={() => history.push("/units/" + row.id)}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="justify">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">
                {row.cost.Food ? ` Food: ${row.cost.Food},` : ""}
                {row.cost.Wood ? ` Wood: ${row.cost.Wood},` : ""}
                {row.cost.Gold ? ` Gold: ${row.cost.Gold}` : ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FilteredUnitsTable;
