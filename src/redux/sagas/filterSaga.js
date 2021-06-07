import { takeLatest, put, all } from "redux-saga/effects";
import { filterUnits } from "./unitsSaga";
import TYPES from "../actionTypes";
// Worker Sagas

function* updateSwitch(payload) {
  payload = payload.payload;
  yield put({ type: TYPES.UPDATE_SWITCH, payload });
}

function* updateAge(payload) {
  payload = payload.payload;
  yield put({ type: TYPES.UPDATE_AGE, payload });
}

function* updateSlider(payload) {
  payload = payload.payload;
  yield put({ type: TYPES.UPDATE_SLIDER, payload });
}

function* updateSliderCommitted(payload) {
  payload = payload.payload;
  yield put({ type: TYPES.UPDATE_SLIDER_COMMITTED, payload });
}

// Watcher Sagas
function* watchUpdateAge() {
  yield takeLatest(TYPES.UPDATE_AGE_SAGA, updateAge);
  yield takeLatest(TYPES.UPDATE_AGE, filterUnits);
}

function* watchUpdateSwitch() {
  yield takeLatest(TYPES.UPDATE_SWITCH_SAGA, updateSwitch);
  yield takeLatest(TYPES.UPDATE_SWITCH, filterUnits);
}

function* watchSliderUpdate() {
  yield takeLatest(TYPES.UPDATE_SLIDER_SAGA, updateSlider);
}

function* watchSliderCommitted() {
  yield takeLatest(TYPES.UPDATE_SLIDER_COMMITTED_SAGA, updateSliderCommitted);
  yield takeLatest(TYPES.UPDATE_SLIDER_COMMITTED, filterUnits);
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
