import store from "../store";
const UPDATE_SWITCH_SAGA = "UPDATE_SWITCH_SAGA";

// Handle switch changes
const updateSwitch = (payload = null) => {
  return store.dispatch({ type: UPDATE_SWITCH_SAGA, payload });
};

export default updateSwitch;
