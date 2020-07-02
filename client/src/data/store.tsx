import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import rootReducer from "./rootReducer";
import logger from "redux-logger"
import {persistStore} from 'redux-persist'



const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,logger)(
  createStore
);

const store = createStoreWithMiddleware(rootReducer);

const persistor = persistStore(store);

export  {store, persistor};
