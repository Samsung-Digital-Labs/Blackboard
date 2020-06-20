import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "../Welcome/Welcome";
import Page from "../../pages/Page";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import { IonReactRouter } from "@ionic/react-router";
import { IonSplitPane, IonRouterOutlet } from "@ionic/react";
import Menu from "../Menu/Menu";
import PrivateRoute from "./PrivateRoute";
import CreateClass from '../CreateClass/CreateClass';
import JoinClass from '../JoinClass/JoinClass';

const Routes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Switch>
            <Route path="/join" exact component={JoinClass}></Route>
            <Route path="/create" exact component={CreateClass}></Route>
            <Route path="/" component={Welcome} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/login" component={Login} exact />
            <PrivateRoute path="/page/:name" component={Page} exact />
          </Switch>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default Routes;
