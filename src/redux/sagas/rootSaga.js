import { takeLatest, put, delay, all } from "redux-saga/effects";
import watchTest from "./testSaga";

function* rootSaga() {
  yield all([watchTest()]);
}

export default rootSaga;
