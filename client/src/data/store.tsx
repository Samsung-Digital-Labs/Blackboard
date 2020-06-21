import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import rootReducer from "./rootReducer";
import logger from "redux-logger"

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,logger)(
  createStore
);

const store = createStoreWithMiddleware(rootReducer);
export default store;
