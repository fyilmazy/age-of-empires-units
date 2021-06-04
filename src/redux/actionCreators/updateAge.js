import store from "../store";
const UPDATE_AGE_SAGA = "UPDATE_AGE_SAGA";

const updateAge = (payload = "all") => {
  return store.dispatch({ type: UPDATE_AGE_SAGA, payload });
};

export default updateAge;
