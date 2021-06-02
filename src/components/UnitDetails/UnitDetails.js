import "./UnitDetails.scss";
import { useParams } from "react-router-dom";

const UnitDetails = ({ props }) => {
  const { id } = useParams();
  return (
    <div className="UnitDetails">
      <h3>Unit Details:</h3>
      <p>ID: {id}</p>
    </div>
  );
};

export default UnitDetails;
