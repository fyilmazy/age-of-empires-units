import { takeLatest, put, delay, all } from "redux-saga/effects";
import watchUnits from "./unitsSaga";
import filterSaga from "./filterSaga";

function* rootSaga() {
  yield all([watchUnits(), filterSaga()]);
}

export default rootSaga;
