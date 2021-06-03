import store from "../store";
const UPDATE_SLIDER_COMMITTED = "UPDATE_SLIDER_COMMITTED";

// Handle committed slider changes
const updateSliderCommitted = (payload = null) => {
  return store.dispatch({ type: UPDATE_SLIDER_COMMITTED, payload });
};

export default updateSliderCommitted;
