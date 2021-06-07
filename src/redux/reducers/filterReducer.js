import TYPES from "../actionTypes/";

const INITIAL_STATE = {
  age: "all",
  costs: {
    food: {
      isActive: false,
      value: [50, 100],
      min: 50,
      max: 100,
    },
    wood: {
      isActive: false,
      value: [50, 100],
      min: 50,
      max: 100,
    },
    gold: {
      isActive: false,
      value: [50, 100],
      min: 50,
      max: 100,
    },
  },
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.UPDATE_AGE:
      return { ...state, age: action.payload };

    case TYPES.UPDATE_SWITCH:
      return {
        ...state,
        costs: {
          ...state.costs,
          [action.payload.costType]: {
            ...state.costs[action.payload.costType],
            isActive: !state.costs[action.payload.costType].isActive,
          },
        },
      };

    case TYPES.UPDATE_SLIDER_COMMITTED:
      return {
        ...state,
        costs: {
          ...state.costs,
          [action.payload.costType]: {
            ...state.costs[action.payload.costType],
            value: action.payload.newValue,
            min: action.payload.newValue[0],
            max: action.payload.newValue[1],
          },
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
