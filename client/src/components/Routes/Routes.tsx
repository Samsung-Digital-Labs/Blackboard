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
import Assignments from "../../pages/Assignments/Assignments";
import Announcements from "../../pages/Classrooms/Announcements/Announcements";
import AssignmentDetail from "../../pages/Assignments/AssignmentDetails";
import Classrooms from "../../pages/Classrooms/Classrooms";

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
            <PrivateRoute
              path="/page/classrooms/:id"
              component={ClassroomDetail}
              exact
            />
            <Route
              path="/page/assignments/:AssignmentID"
              component={AssignmentDetail}
              exact
            />
            <Route
              path="/announcements/:classroomID"
              component={Announcements}
              exact
            ></Route>
            <PrivateRoute path="/page/:name" component={Page} exact />
          </Switch>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default Routes;
