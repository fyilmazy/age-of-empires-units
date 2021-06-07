import { takeLatest, put } from "redux-saga/effects";
import TYPES from "../actionTypes";

function* updatePageTitleWorker(payload) {
  payload = payload.payload;
  yield put({ type: TYPES.UPDATE_PAGE_TITLE, payload });
}

function* watchPageTitle() {
  yield takeLatest(TYPES.UPDATE_PAGE_TITLE_SAGA, updatePageTitleWorker);
}

export default watchPageTitle;
