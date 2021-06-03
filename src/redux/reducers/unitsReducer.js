const INITIAL_STATE = [];
const UPDATE_UNITS = "UPDATE_UNITS";

const unitsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_UNITS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default unitsReducer;
