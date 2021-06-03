import "./Units.scss";
import { connect } from "react-redux";
import { logSaga } from "../../redux/actionsCreators";
import AgeSelector from "./Form/AgeSelector";
import CostSelectors from "./Form/CostSelectors";
import FilteredUnitsTable from "./FilteredUnitsTable";

const Units = ({ number }) => {
  return (
    <div className="Units">
      <h3>Units</h3>
      <div>
        <h3>{number}</h3>
        <button onClick={() => logSaga()}>Test Saga</button>
      </div>
      <AgeSelector />
      <CostSelectors />
      <FilteredUnitsTable />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { number } = state.test;
  return { number };
};

export default connect(mapStateToProps)(Units);
