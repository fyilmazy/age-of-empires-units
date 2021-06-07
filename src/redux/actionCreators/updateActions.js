import store from "../store";
import TYPES from "../actionTypes/";

const updatePageTitle = (payload = null) => {
  return store.dispatch({ type: TYPES.UPDATE_PAGE_TITLE_SAGA, payload });
};
const updateAge = (payload = "all") => {
  return store.dispatch({ type: TYPES.UPDATE_AGE_SAGA, payload });
};

// Handle visual slider changes, do not pass to filterUnits
const updateSlider = (payload = null) => {
  return store.dispatch({ type: TYPES.UPDATE_SLIDER_SAGA, payload });
};

// Handle committed slider changes
const updateSliderCommitted = (payload = null) => {
  return store.dispatch({ type: TYPES.UPDATE_SLIDER_COMMITTED_SAGA, payload });
};

// Handle switch changes
const updateSwitch = (payload = null) => {
  return store.dispatch({ type: TYPES.UPDATE_SWITCH_SAGA, payload });
};

export {
  updateAge,
  updatePageTitle,
  updateSlider,
  updateSliderCommitted,
  updateSwitch,
};
