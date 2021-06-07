import store from "../store";
import TYPES from "../actionTypes";

const fetchUnits = (payload = null) => {
  return store.dispatch({ type: TYPES.FETCH_UNITS });
};

export default fetchUnits;
