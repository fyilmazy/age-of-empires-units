import updateAge from "./updateAge";
import updateSlider from "./updateSlider";
import updateSliderCommitted from "./updateSliderCommitted";
import updateSwitch from "./updateSwitch";
import fetchUnits from "./fetchUnitsSaga";

// TODO: combine actions by category

const actions = {
  fetchUnits,
  updateAge,
  updateSlider,
  updateSliderCommitted,
  updateSwitch,
};

export {
  actions as default,
  fetchUnits,
  updateAge,
  updateSlider,
  updateSliderCommitted,
  updateSwitch,
};
