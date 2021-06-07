import TYPES from "../actionTypes/";

const INITIAL_STATE = { title: "" };

const titleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.UPDATE_PAGE_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export default titleReducer;
