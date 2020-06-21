import React from "react";
import "./ExploreContainer.css";
import {IonRouterOutlet } from "@ionic/react";
import { Switch, Route } from "react-router";
import JoinClass from "../../pages/JoinClass/JoinClass";
import CreateClass from "../../pages/CreateClass/CreateClass";
import Assignments from "../../pages/Assignments/Assignments";
import Query from "../../pages/Query/Query";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
      <IonRouterOutlet id="main">
        <Switch>
          <Route path="/page/join" component={JoinClass} exact />
          <Route path="/page/create" component={CreateClass} exact />
          <Route path="/page/assignments" component={Assignments} exact />
          <Route path="/page/query" component={Query} exact />
          {/* <Route path="/page/join" component={JoinClass} exact /> */}


        </Switch>
      </IonRouterOutlet>
  );
};

export default ExploreContainer;
