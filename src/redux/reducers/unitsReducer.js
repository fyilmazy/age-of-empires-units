import TYPES from "../actionTypes/";

const INITIAL_STATE = {
  units: [],
  filteredUnits: [],
};

const unitsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.UPDATE_UNITS:
      return {
        ...state,
        units: action.payload,
      };
    case TYPES.UPDATE_FILTERED_UNITS:
      return {
        ...state,
        filteredUnits: action.payload,
      };
    default:
      return state;
  }
};

export default unitsReducer;
