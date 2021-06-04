import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* getUnits() {
  const units = yield axios.get("aoeUnits.json").then((res) => res.data.units);
  yield put({ type: "UPDATE_UNITS", payload: units });
}

function* watchUnits() {
  yield takeLatest("FETCH_UNITS", getUnits);
}

export default watchUnits;
