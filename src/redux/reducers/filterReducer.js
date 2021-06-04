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

const UPDATE_AGE = "UPDATE_AGE";
const UPDATE_SWITCH = "UPDATE_SWITCH";
const UPDATE_SLIDER_COMMITTED = "UPDATE_SLIDER_COMMITTED";

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_AGE:
      return { ...state, age: action.payload };

    case UPDATE_SWITCH:
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

    case UPDATE_SLIDER_COMMITTED:
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
