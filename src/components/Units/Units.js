import { useState } from "react";
import "./Units.scss";
import { connect } from "react-redux";
import { increase, decrease, logSaga } from "../../redux/actions";
import testUnits from "../../utils/testUnits";
import formControlsDefault from "../../utils/formControlsDefault";
import AgeSelector from "./Form/AgeSelector";
import CostSelectors from "./Form/CostSelectors";
import FilteredUnitsTable from "./FilteredUnitsTable";

const Units = ({ number, state, history }) => {
  const [formControls, setFormControls] = useState({ ...formControlsDefault });
  const [sliderValues, setSliderValues] = useState({
    food: [50, 100],
    wood: [50, 100],
    gold: [50, 100],
  });

  // FUNCTIONS

  // Function handles selected age changes
  const handleFormAge = (e) => {
    setFormControls({ ...formControls, age: e.target.value });
  };

  const handleFormSliderCommitted = (e, newValue) => {
    const type = e.target.ariaLabel;

    setFormControls({
      ...formControls,
      costs: {
        ...formControls.costs,
        [type]: {
          ...formControls.costs[type],
          value: newValue,
          min: newValue[0],
          max: newValue[1],
        },
      },
    });
  };

  // Function handles costs toggle
  const handleFormSwitch = (e) => {
    const type = e.target.name;

    setFormControls({
      ...formControls,
      costs: {
        ...formControls.costs,
        [type]: {
          ...formControls.costs[type],
          isActive: !formControls.costs[type].isActive,
        },
      },
    });
  };

  return (
    <div className="Units">
      <h3>Units</h3>
      <div>
        <h3>{number}</h3>
        <button onClick={() => increase()}>Increase</button>
        <button onClick={() => decrease()}>Decrease</button>
        <button onClick={() => logSaga()}>Test Saga</button>
      </div>

      <AgeSelector handleFormAge={handleFormAge} />
      <CostSelectors
        formControls={formControls}
        handleFormSwitch={handleFormSwitch}
        sliderValues={sliderValues}
        setSliderValues={setSliderValues}
        handleFormSliderCommitted={handleFormSliderCommitted}
      />

      <FilteredUnitsTable testUnits={testUnits} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { number } = state.test;
  return { number };
};

export default connect(mapStateToProps)(Units);
