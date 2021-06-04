import store from "../store";
const UPDATE_SLIDER_COMMITTED_SAGA = "UPDATE_SLIDER_COMMITTED_SAGA";

// Handle committed slider changes
const updateSliderCommitted = (payload = null) => {
  return store.dispatch({ type: UPDATE_SLIDER_COMMITTED_SAGA, payload });
};

export default updateSliderCommitted;
