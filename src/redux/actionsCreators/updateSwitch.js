import store from "../store";
const UPDATE_SWITCH = "UPDATE_SWITCH";

// Handle switch changes
const updateSwitch = (payload = null) => {
  return store.dispatch({ type: UPDATE_SWITCH, payload });
};

export default updateSwitch;
