import "./CostSelectors.scss";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import {
  updateSlider,
  updateSliderCommitted,
  updateSwitch,
} from "../../../../redux/actionsCreators";
import { connect } from "react-redux";

/**
 * Renders Switches and Sliders for costs selection
 */
const CostSelectors = ({ form, slider }) => {
  const handleFormSwitch = (e) => {
    updateSwitch({ costType: e.target.name });
  };

  // Handle slider commited selections
  const handleFormSliderCommitted = (e, newValue) => {
    updateSliderCommitted({
      newValue,
      costType: e.target.ariaLabel,
    });
  };
  return (
    <div className="costSelectors">
      <div className="costSelectorWrapper">
        <Switch
          checked={form.costs.food.isActive}
          onChange={(e) => handleFormSwitch(e)}
          name="food"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Typography id="discrete-slider" gutterBottom>
          Food {slider.food.min} - {slider.food.max}
        </Typography>
        <Slider
          defaultValue={[50, 100]}
          value={slider.food.value}
          aria-label="food"
          onChange={(e, value) => {
            updateSlider({ costType: "food", costValue: value });
          }}
          onChangeCommitted={handleFormSliderCommitted}
          aria-labelledby="range-slider"
          valueLabelDisplay="auto"
          step={5}
          min={0}
          max={200}
          disabled={!form.costs.food.isActive}
        />
      </div>
      <div className="costSelectorWrapper">
        <Switch
          checked={form.costs.wood.isActive}
          onChange={(e) => handleFormSwitch(e)}
          name="wood"
        />
        <Typography id="discrete-slider" gutterBottom>
          Wood {slider.wood.min} - {slider.wood.max}
        </Typography>
        <Slider
          defaultValue={[50, 100]}
          value={slider.wood.value}
          aria-label="wood"
          onChange={(e, value) => {
            updateSlider({ costType: "wood", costValue: value });
          }}
          // onChangeCommitted={handleFormSliderCommitted}
          aria-labelledby="range-slider"
          valueLabelDisplay="auto"
          step={5}
          min={0}
          max={200}
          disabled={!form.costs.wood.isActive}
        />
      </div>
      <div className="costSelectorWrapper">
        <Switch
          checked={form.costs.gold.isActivated}
          onChange={(e) => handleFormSwitch(e)}
          name="gold"
        />
        <Typography id="discrete-slider" gutterBottom>
          Gold {slider.gold.min} - {slider.gold.max}
        </Typography>
        <Slider
          defaultValue={50}
          value={slider.gold.value}
          aria-label="gold"
          onChange={(e, value) => {
            updateSlider({ costType: "gold", costValue: value });
          }}
          onChangeCommitted={handleFormSliderCommitted}
          aria-labelledby="range-slider"
          valueLabelDisplay="auto"
          step={5}
          min={0}
          max={200}
          disabled={!form.costs.gold.isActive}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { form, slider } = state;
  return {
    form,
    slider,
  };
};

export default connect(mapStateToProps)(CostSelectors);
