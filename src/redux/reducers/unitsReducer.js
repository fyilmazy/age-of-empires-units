const INITIAL_STATE = {
  units: [],
  filteredUnits: [],
};
const UPDATE_UNITS = "UPDATE_UNITS";
const UPDATE_FILTERED_UNITS = "UPDATE_FILTERED_UNITS";

const unitsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_UNITS:
      return {
        ...state,
        units: action.payload,
      };
    case UPDATE_FILTERED_UNITS:
      return {
        ...state,
        filteredUnits: action.payload,
      };
    default:
      return state;
  }
};

export default unitsReducer;
