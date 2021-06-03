import "./UnitDetails.scss";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const UnitDetails = ({ history }) => {
  const { id } = useParams();
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
      <h3>Unit Details:</h3>
      <p>ID: {id}</p>
    </div>
  );
};

export default UnitDetails;
