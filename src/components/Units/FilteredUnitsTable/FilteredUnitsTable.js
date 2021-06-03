import { useEffect, useState } from "react";
import "./FilteredUnitsTable.scss";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import getUnitsData from "../../../utils/getUnitsData";

/**
 *  Renders the filtered units into Table
 */

const FilteredUnitsTable = () => {
  const [units, setUnits] = useState([]);
  let history = useHistory();

  // DATA FETCH

  // Fetch units data by axios
  const fetchUnitsData = async () => {
    const data = await getUnitsData();
    // iterate rows
    const rows = data.map((item) => {
      const { id, name, age, cost } = item;
      return { id, name, age, cost };
    });
    setUnits(rows);
  };

  // Fetch units data initially
  useEffect(() => {
    fetchUnitsData();
  }, []);

  // create rows from testUnits object to use in Table

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
          {units.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => history.push("/units/" + row.id)}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="justify">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">
                {row.cost
                  ? row.cost.Food !== (null || undefined)
                    ? ` Food: ${row.cost.Food},`
                    : ""
                  : ""}
                {row.cost
                  ? row.cost.Wood !== (null || undefined)
                    ? ` Wood: ${row.cost.Wood},`
                    : ""
                  : ""}
                {row.cost
                  ? row.cost.Gold !== (null || undefined)
                    ? ` Gold: ${row.cost.Gold}`
                    : ""
                  : "No costs"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FilteredUnitsTable;
