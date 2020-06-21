import * as actionTypes from "../actions/actionTypes";

const loadUserReducer = (
  state = {
    userName: "",
    darkMode: false,
    isUserLoggedIn: false,
  },
  action: any
) => {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      return {
        ...state,
        isUserLoggedIn: action.payload.isUserLoggedIn,
      };
    case actionTypes.DARK_MODE:
      return {
        ...state,
        darkMode: action.payload.darkMode
      };
    case actionTypes.SET_NAME:
      return {
        ...state, 
        userName: action.payload.name
      }
    default:
      return state;
  }
};

export default loadUserReducer;
