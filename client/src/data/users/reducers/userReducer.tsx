import * as actionTypes from "../actions/actionTypes";

const userReducer = (
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
        authToken: action.payload.authToken,
        user: action.payload.user
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

export default userReducer;
