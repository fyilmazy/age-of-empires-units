import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import unitsReducer from "./unitsReducer";
import sliderHelperReducer from "./sliderHelperReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  units: unitsReducer,
  slider: sliderHelperReducer,
});

export default rootReducer;
