import "./CostSelectors.scss";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

/**
 * Renders Switches and Sliders for costs selection
 */
const CostSelectors = ({
  handleFormSwitch,
  formControls,
  sliderValues,
  setSliderValues,
  handleFormSliderCommitted,
}) => {
  return (
    <div className="costSelectors">
      <div className="costSelectorWrapper">
        <Switch
          checked={formControls.costs.food.isActive}
          onChange={(e) => handleFormSwitch(e)}
          name="food"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Typography id="discrete-slider" gutterBottom>
          Food {formControls.costs.food.min} - {formControls.costs.food.max}
        </Typography>
        <Slider
          defaultValue={[50, 100]}
          value={sliderValues.food}
          aria-label="food"
          onChange={(e, value) =>
            setSliderValues({ ...sliderValues, food: value })
          }
          onChangeCommitted={handleFormSliderCommitted}
          aria-labelledby="range-slider"
          valueLabelDisplay="auto"
          step={5}
          min={0}
          max={200}
          disabled={!formControls.costs.food.isActive}
        />
      </div>
      <div className="costSelectorWrapper">
        <Switch
          checked={formControls.costs.wood.isActive}
          onChange={(e) => handleFormSwitch(e)}
          name="wood"
        />
        <Typography id="discrete-slider" gutterBottom>
          Wood {formControls.costs.wood.min} - {formControls.costs.wood.max}
        </Typography>
        <Slider
          defaultValue={[50, 100]}
          value={sliderValues.wood}
          aria-label="wood"
          onChange={(e, value) =>
            setSliderValues({ ...sliderValues, wood: value })
          }
          onChangeCommitted={handleFormSliderCommitted}
          aria-labelledby="range-slider"
          valueLabelDisplay="auto"
          step={5}
          min={0}
          max={200}
          disabled={!formControls.costs.wood.isActive}
        />
      </div>
      <div className="costSelectorWrapper">
        <Switch
          checked={formControls.costs.gold.isActivated}
          onChange={(e) => handleFormSwitch(e)}
          name="gold"
        />
        <Typography id="discrete-slider" gutterBottom>
          Gold {formControls.costs.gold.min} - {formControls.costs.gold.max}
        </Typography>
        <Slider
          defaultValue={50}
          value={sliderValues.gold}
          aria-label="gold"
          onChange={(e, value) =>
            setSliderValues({ ...sliderValues, gold: value })
          }
          onChangeCommitted={handleFormSliderCommitted}
          aria-labelledby="range-slider"
          valueLabelDisplay="auto"
          step={5}
          min={0}
          max={200}
          disabled={!formControls.costs.gold.isActive}
        />
      </div>
    </div>
  );
};

export default CostSelectors;
