import store from "../store";
const FETCH_UNITS = "FETCH_UNITS";

const fetchUnits = (payload = null) => {
  return store.dispatch({ type: FETCH_UNITS });
};

export default fetchUnits;
