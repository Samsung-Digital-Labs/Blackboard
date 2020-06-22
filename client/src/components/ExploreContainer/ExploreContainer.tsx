import React from "react";
import "./ExploreContainer.css";
import {IonRouterOutlet } from "@ionic/react";
import { Switch, Route } from "react-router";
import JoinClassroom from "../../pages/JoinClassroom/JoinClassroom";
import CreateClassroom from "../../pages/CreateClassroom/CreateClassroom";
import Assignments from "../../pages/Assignments/Assignments";
import Query from "../../pages/Query/Query";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
      <IonRouterOutlet id="main">
        <Switch>
          <Route path="/page/join" component={JoinClassroom} exact />
          <Route path="/page/create" component={CreateClassroom} exact />
          <Route path="/page/assignments" component={Assignments} exact />
          <Route path="/page/query" component={Query} exact />
          {/* <Route path="/page/join" component={JoinClass} exact /> */}


        </Switch>
      </IonRouterOutlet>
  );
};

export default ExploreContainer;
