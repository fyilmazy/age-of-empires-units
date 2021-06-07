import TYPES from "../actionTypes/";

const INITIAL_STATE = {
  food: { value: [50, 100], min: 50, max: 100 },
  wood: { value: [50, 100], min: 50, max: 100 },
  gold: { value: [50, 100], min: 50, max: 100 },
};

// Handle slider change on every slider step
const sliderHelperReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.UPDATE_SLIDER:
      return {
        ...state,
        [action.payload.costType]: {
          value: action.payload.costValue,
          min: action.payload.costValue[0],
          max: action.payload.costValue[1],
        },
      };

    default:
      return state;
  }
};

export default sliderHelperReducer;
