const INITIAL_STATE = { number: 0 };
const INCREASE_TEST = "INCREASE_TEST";
const DECREASE_TEST = "DECREASE_TEST";

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE_TEST:
      return { ...state, number: state.number + 1 };
    case DECREASE_TEST:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
};

export default testReducer;
