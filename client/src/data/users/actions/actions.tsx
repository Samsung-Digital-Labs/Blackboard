import * as actionTypes from "./actionTypes";

export function loadUser(isUserLoggedIn: boolean) {
  return {
    type: actionTypes.LOAD_USER,
    payload: {
      isUserLoggedIn: isUserLoggedIn,
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
