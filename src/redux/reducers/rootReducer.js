import { combineReducers } from "redux";
import testReducer from "./testReducer";
import formReducer from "./formReducer";
import unitsReducer from "./unitsReducer";
import sliderHelperReducer from "./sliderHelperReducer";

const rootReducer = combineReducers({
  test: testReducer,
  form: formReducer,
  units: unitsReducer,
  slider: sliderHelperReducer,
});

export default rootReducer;
