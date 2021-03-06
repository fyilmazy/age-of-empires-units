import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

// Saga
const sagaMiddleWare = createSagaMiddleware();

// Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export default store;
