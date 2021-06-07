import { all } from "redux-saga/effects";
import { watchUnits } from "./unitsSaga";
import filterSaga from "./filterSaga";
import watchPageTitle from "./titleSaga";

function* rootSaga() {
  yield all([watchUnits(), filterSaga(), watchPageTitle()]);
}

export default rootSaga;
