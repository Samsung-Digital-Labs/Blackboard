import React from "react";

import { Route, Switch } from "react-router-dom";

import Welcome from "../Welcome/Welcome";
import Page from "../../pages/Page";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import { IonReactRouter } from "@ionic/react-router";
import { IonSplitPane, IonRouterOutlet } from "@ionic/react";
import Menu from "../Menu/Menu";
import PrivateRoute from "./PrivateRoute";
import ClassroomDetail from "../../pages/Classrooms/ClassroomDetail";

const Routes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/login" component={Login} exact />
          <PrivateRoute path="/page/classrooms/:id" component={ClassroomDetail} exact />
          <PrivateRoute path="/page/:name" component={Page} exact />
          </Switch>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default Routes;
