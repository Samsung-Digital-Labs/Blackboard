import * as actionTypes from "../actions/actionTypes";

const loadUserReducer = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      return {
        ...state,
        isUserLoggedIn: action.payload.isUserLoggedIn,

      };
    default:
      return state;
  }
};

export default loadUserReducer;
