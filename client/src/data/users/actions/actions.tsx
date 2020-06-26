import * as actionTypes from "./actionTypes";

export function loadUser(isUserLoggedIn: boolean, user: any, authToken: string) {
  return {
    type: actionTypes.LOAD_USER,
    payload: {
      authToken: authToken,
      isUserLoggedIn: isUserLoggedIn,
      user:user
    },
  };
}

export function setName(name: string) {
  return {
    type: actionTypes.SET_NAME,
    payload: {
      name: name,
    },
  };
}

export function toggleDarkMode(darkMode: boolean) {
  return {
    type: actionTypes.DARK_MODE,
    payload: {
      darkMode: darkMode,
    },
  };
}
