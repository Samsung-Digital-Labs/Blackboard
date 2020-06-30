import { combineReducers } from "redux";

import userReducer from "./users/reducers/userReducer";
import classroomReducer from "./classrooms/reducers/classroomReducer";


const rootReducer = combineReducers({
  userReducer,
  classroomReducer,
});

export default rootReducer;
