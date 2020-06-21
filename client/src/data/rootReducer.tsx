import { combineReducers } from "redux";

import loadUserReducer from "./users/reducers/loadUserReducer";


const rootReducer = combineReducers({
  loadUserReducer
});

export default rootReducer;
