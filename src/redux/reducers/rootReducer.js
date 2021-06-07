import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import unitsReducer from "./unitsReducer";
import sliderHelperReducer from "./sliderHelperReducer";
import titleReducer from "./titleReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  units: unitsReducer,
  slider: sliderHelperReducer,
  pageTitle: titleReducer,
});

export default rootReducer;
