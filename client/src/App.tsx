import React from "react";
import { IonApp, IonSplitPane, IonRouterOutlet } from "@ionic/react";
import Routes from "./components/Routes/Routes";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import "./App.css";
// Redux imports
import { connect } from "react-redux";
import {
  loadUser,
  setName,
  toggleDarkMode,
} from "./data/users/actions/actions";

const App: React.FC<{
  user: any;
}> = (props) => {
  // const App: React.FC<{ user: any }> = (props) => {
  return (
    <IonApp className={`${props.user.darkMode ? "dark-theme" : ""}`}>
      <Routes />
    </IonApp>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.userReducer,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    // loadUser: (isUserLoggedIn: boolean) => {
    //   dispatch(loadUser(isUserLoggedIn));
    // },
    setName: (name: string) => {
      dispatch(setName(name));
    },
    toggleDarkMode: (darkMode: boolean) => {
      dispatch(toggleDarkMode(darkMode));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
