import store from "../store";
const UPDATE_AGE = "UPDATE_AGE";

// Handle age changes
const updateAge = (payload = "all") => {
  return store.dispatch({ type: UPDATE_AGE, payload });
};

export default updateAge;
