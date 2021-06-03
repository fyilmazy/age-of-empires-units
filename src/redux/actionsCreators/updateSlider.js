import store from "../store";
const UPDATE_SLIDER = "UPDATE_SLIDER";

// Handle visual slider changes, do not pass to filterUnits
const updateSlider = (payload = null) => {
  return store.dispatch({ type: UPDATE_SLIDER, payload });
};

export default updateSlider;
