import { takeLatest, put, all } from "redux-saga/effects";

// Worker Sagas

function* updateSwitch(payload) {
  payload = payload.payload;
  yield put({ type: "UPDATE_SWITCH", payload });
}

function* updateAge(payload) {
  payload = payload.payload;
  yield put({ type: "UPDATE_AGE", payload });
}

function* updateSlider(payload) {
  payload = payload.payload;
  yield put({ type: "UPDATE_SLIDER", payload });
}

function* updateSliderCommitted(payload) {
  payload = payload.payload;
  yield put({ type: "UPDATE_SLIDER_COMMITTED", payload });
}

// Watcher Sagas
function* watchUpdateAge() {
  yield takeLatest("UPDATE_AGE_SAGA", updateAge);
}

function* watchUpdateSwitch() {
  console.log("selam");
  yield takeLatest("UPDATE_SWITCH_SAGA", updateSwitch);
}

function* watchSliderUpdate() {
  yield takeLatest("UPDATE_SLIDER_SAGA", updateSlider);
}

function* watchSliderCommitted() {
  yield takeLatest("UPDATE_SLIDER_COMMITTED_SAGA", updateSliderCommitted);
}

function* filterSaga() {
  yield all([
    watchUpdateAge(),
    watchUpdateSwitch(),
    watchSliderUpdate(),
    watchSliderCommitted(),
  ]);
}

export default filterSaga;
