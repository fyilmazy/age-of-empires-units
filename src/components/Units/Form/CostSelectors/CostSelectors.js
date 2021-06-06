import "./CostSelectors.scss";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import {
  updateSlider,
  updateSliderCommitted,
  updateSwitch,
} from "../../../../redux/actionCreators";
import { connect } from "react-redux";

/**
 * Renders Switches and Sliders for costs selection
 */
const CostSelectors = ({ filter, slider }) => {
  const handleFormSwitch = (e) => {
    updateSwitch({ costType: e.target.name });
  };

  // Handle slider commited selections
  const handleFormSliderCommitted = (name) => (e, newValue) => {
    updateSliderCommitted({
      newValue,
      costType: name,
    });
  };

  return (
    <div className="costSelectors">
      <div className="costSelectorWrapper">
        <Switch
          checked={filter.costs.food.isActive}
          onChange={(e) => handleFormSwitch(e)}
          name="food"
        />
        <Typography id="discrete-slider" gutterBottom>
          Food {slider.food.min} - {slider.food.max}
        </Typography>
        <Slider
          defaultValue={[50, 100]}
          value={slider.food.value}
          onChange={(e, value) => {
            updateSlider({ costType: "food", costValue: value });
          }}
          onChangeCommitted={handleFormSliderCommitted("food")}
          aria-labelledby="range-slider"
          valueLabelDisplay="auto"
          step={5}
          min={0}
          max={200}
          disabled={!filter.costs.food.isActive}
        />
      </div>
      <div className="costSelectorWrapper">
        <Switch
          checked={filter.costs.wood.isActive}
          onChange={(e) => handleFormSwitch(e)}
          name="wood"
        />
        <Typography id="discrete-slider" gutterBottom>
          Wood {slider.wood.min} - {slider.wood.max}
        </Typography>
        <Slider
          defaultValue={[50, 100]}
          value={slider.wood.value}
          onChange={(e, value) => {
            updateSlider({ costType: "wood", costValue: value });
          }}
          onChangeCommitted={handleFormSliderCommitted("wood")}
          aria-labelledby="range-slider"
          valueLabelDisplay="auto"
          step={5}
          min={0}
          max={200}
          disabled={!filter.costs.wood.isActive}
        />
      </div>
      <div className="costSelectorWrapper">
        <Switch
          checked={filter.costs.gold.isActive}
          onChange={(e) => handleFormSwitch(e)}
          name="gold"
        />
        <Typography id="discrete-slider" gutterBottom>
          Gold {slider.gold.min} - {slider.gold.max}
        </Typography>
        <Slider
          defaultValue={50}
          value={slider.gold.value}
          onChange={(e, value) => {
            updateSlider({ costType: "gold", costValue: value });
          }}
          onChangeCommitted={handleFormSliderCommitted("gold")}
          aria-labelledby="range-slider"
          valueLabelDisplay="auto"
          step={5}
          min={0}
          max={200}
          disabled={!filter.costs.gold.isActive}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { filter, slider } = state;
  return {
    filter,
    slider,
  };
};

export default connect(mapStateToProps)(CostSelectors);
