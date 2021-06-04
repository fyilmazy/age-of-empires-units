import "./UnitDetails.scss";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const UnitDetails = ({ history, units }) => {
  const { id } = useParams();
  console.log(units, id);
  const unitToRender = units.filter((unit) => {
    return unit.id.toString() === id;
  });
  console.log("unitToRender", unitToRender);
  const unit = unitToRender[0];
  return (
    <div className="UnitDetails">
      <Button
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIcon />}
        onClick={() => history.goBack()}
      >
        Go back
      </Button>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table" className="table">
          {/* Body part of table */}
          {unitToRender ? (
            <TableBody>
              <TableRow key={Math.random()}>
                <TableCell>ID:</TableCell>
                <TableCell>{unit.id}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>Name:</TableCell>
                <TableCell>{unit.name}</TableCell>
              </TableRow>
              <TableRow id="description-row" key={Math.random()}>
                <TableCell id="decription-t">Description:</TableCell>
                <TableCell id="description-d">{unit.description}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>Min. Required Age:</TableCell>
                <TableCell>{unit.age}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>Wood Cost:</TableCell>
                <TableCell>{unit.cost.Wood ? unit.cost.Wood : "-"}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>Food Cost:</TableCell>
                <TableCell>{unit.cost.Food ? unit.cost.Wood : "-"}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>Gold Cost:</TableCell>
                <TableCell>{unit.cost.Gold ? unit.cost.Gold : "-"}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>Build Time:</TableCell>
                <TableCell>{unit.build_time}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>Reload Time:</TableCell>
                <TableCell>{unit.reload_time}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>Hit Points:</TableCell>
                <TableCell>{unit.hit_points}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>Attack:</TableCell>
                <TableCell>{unit.attack}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>Accuracy:</TableCell>
                <TableCell>{unit.accuracy ? unit.accuracy : "-"}</TableCell>
              </TableRow>
            </TableBody>
          ) : (
            ""
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = ({ units }) => {
  return {
    units: units.units,
  };
};

export default connect(mapStateToProps)(UnitDetails);
