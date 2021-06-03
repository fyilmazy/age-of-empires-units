import "./Units.scss";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import { increase, decrease, logSaga } from "../../redux/actions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

const Units = ({ number, state, history }) => {
  console.log("number", number);
  console.log("state", state);
  console.log("history", history);

  const testUnits = [
    {
      id: 1,
      name: "Archer",
      description:
        "Quick and light. Weak at close range; excels at battle from distance",
      expansion: "Age of Kings",
      age: "Feudal",
      cost: {
        Food: 10,
        Wood: 25,
        Gold: 45,
      },
      build_time: 35,
      reload_time: 2,
      attack_delay: 0.35,
      movement_rate: 0.96,
      line_of_sight: 6,
      hit_points: 4,
      range: 30,
      attack: 4,
      armor: "0/0",
      accuracy: "80%",
    },
    {
      id: 2,
      name: "Crossbowman",
      description: "Upgraded archer",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Wood: 25,
        Gold: 45,
      },
      build_time: 27,
      reload_time: 2,
      attack_delay: 0.35,
      movement_rate: 0.96,
      line_of_sight: 7,
      hit_points: 35,
      range: 5,
      attack: 5,
      armor: "0/0",
      attack_bonus: ["+3 spearmen"],
      accuracy: "85%",
    },
    {
      id: 3,
      name: "Arbalest",
      description: "Upgraded crossbowman",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 25,
        Gold: 45,
      },
      build_time: 27,
      reload_time: 2,
      attack_delay: 0.35,
      movement_rate: 0.96,
      line_of_sight: 7,
      hit_points: 40,
      range: 5,
      attack: 6,
      armor: "0/0",
      attack_bonus: ["+3 spearmen"],
      accuracy: "90%",
    },
  ];

  const createUnit = (id, name, age, cost) => {
    return { id, name, age, cost };
  };

  const rows = testUnits.map((unit) => {
    const { id, name, age, cost } = unit;
    return createUnit(id, name, age, cost);
  });

  return (
    <div className="Units">
      <h3>Units</h3>
      <div>
        <h3>{number}</h3>
        <button onClick={() => increase()}>Increase</button>
        <button onClick={() => decrease()}>Decrease</button>
        <button onClick={() => logSaga()}>Test Saga</button>
      </div>
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
                <TableCell style={{ minWidth: row.minWidth }} align="right">
                  {row.cost.Food ? ` Food: ${row.cost.Food},` : ""}
                  {row.cost.Wood ? ` Wood: ${row.cost.Wood},` : ""}
                  {row.cost.Gold ? ` Gold: ${row.cost.Gold}` : ""}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { number } = state.test;
  return { number };
};

export default connect(mapStateToProps)(Units);
