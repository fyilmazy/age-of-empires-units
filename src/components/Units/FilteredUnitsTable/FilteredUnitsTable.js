import { useEffect } from "react";
import "./FilteredUnitsTable.scss";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import { fetchUnits } from "../../../redux/actionCreators";

/**
 *  Renders the filtered units into Table
 */

const FilteredUnitsTable = ({ filteredUnits }) => {
  let history = useHistory();

  useEffect(() => {
    fetchUnits();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table" className="table">
        <TableHead>
          <TableRow>
            <TableCell id="tHeadId">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Costs</TableCell>
          </TableRow>
        </TableHead>
        {filteredUnits.length > 0 ? (
          <TableBody>
            {filteredUnits.map((row) => (
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
                      : null
                    : null}
                  {row.cost
                    ? row.cost.Wood !== (null || undefined)
                      ? ` Wood: ${row.cost.Wood},`
                      : null
                    : null}
                  {row.cost
                    ? row.cost.Gold !== (null || undefined)
                      ? ` Gold: ${row.cost.Gold}`
                      : null
                    : "No costs"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell variant="head" align="justify" color="secondary">
                There are no units matching your search criteria. Please change
                age and/or costs.
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = ({ units }) => {
  return {
    filteredUnits: units.filteredUnits,
  };
};

export default connect(mapStateToProps)(FilteredUnitsTable);
