import { takeLatest, put, select } from "redux-saga/effects";
import axios from "axios";
import getFilterResult from "../../utils/filterUnits";
import TYPES from "../actionTypes/";

export const getFilterSelector = (state) => state.filter;
export const getUnitsSelector = (state) => state.units.units;

function* getUnits() {
  const units = yield axios.get("aoeUnits.json").then((res) => res.data.units);
  yield put({ type: TYPES.UPDATE_UNITS, payload: units });
}

export function* filterUnits() {
  const filter = yield select(getFilterSelector);
  const units = yield select(getUnitsSelector);
  yield put({
    type: TYPES.UPDATE_FILTERED_UNITS,
    payload: getFilterResult(units, filter),
  });
}

export function* watchUnits() {
  yield takeLatest(TYPES.FETCH_UNITS, getUnits);
  yield takeLatest(TYPES.UPDATE_UNITS, filterUnits);
}
