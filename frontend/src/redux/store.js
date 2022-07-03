import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/rootReducer";
import userSaga from "./saga/userSaga";
import createSagaMiddleware from "redux-saga";
import issueSaga from "./saga/issueSaga";
import rootSaga from "./saga/rootSaga";
// const dummyReducer = () => {
//   return 100;
// };
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
export default store;
