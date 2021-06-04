import { takeLatest, put, select } from "redux-saga/effects";
import axios from "axios";
import getFilterResult from "../../utils/filterUnits";

export const getFilterSelector = (state) => state.filter;
export const getUnitsSelector = (state) => state.units.units;

function* getUnits() {
  const units = yield axios.get("aoeUnits.json").then((res) => res.data.units);
  yield put({ type: "UPDATE_UNITS", payload: units });
}

export function* filterUnits() {
  const filter = yield select(getFilterSelector);
  const units = yield select(getUnitsSelector);
  yield put({
    type: "UPDATE_FILTERED_UNITS",
    payload: getFilterResult(units, filter),
  });
}

export function* watchUnits() {
  yield takeLatest("FETCH_UNITS", getUnits);
  yield takeLatest("UPDATE_UNITS", filterUnits);
}
