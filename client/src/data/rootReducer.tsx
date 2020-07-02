import { combineReducers } from "redux";

import userReducer from "./users/reducers/userReducer";
import classroomReducer from "./classrooms/reducers/classroomReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['userReducer', 'ClassroomReducer']
};

const rootReducer = combineReducers({
  userReducer,
  classroomReducer,
});

export default persistReducer(persistConfig, rootReducer);
