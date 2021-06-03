import { takeLatest, put, delay, all } from "redux-saga/effects";

function* logSaga() {
  console.log("saga test successfull");
  yield put({ type: "INCREASE_TEST" });
}

function* watchTest() {
  yield takeLatest("LOG_SAGA", logSaga);
}

export default watchTest;
