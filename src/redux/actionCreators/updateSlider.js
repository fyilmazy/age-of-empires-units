import store from "../store";
const UPDATE_SLIDER_SAGA = "UPDATE_SLIDER_SAGA";

// Handle visual slider changes, do not pass to filterUnits
const updateSlider = (payload = null) => {
  return store.dispatch({ type: UPDATE_SLIDER_SAGA, payload });
};

export default updateSlider;
