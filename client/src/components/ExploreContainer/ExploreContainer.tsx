import React from "react";
import "./ExploreContainer.css";
import { IonRouterOutlet } from "@ionic/react";
import { Switch, Route } from "react-router";
import JoinClass from "../../pages/JoinClass/JoinClass";
import CreateClass from "../../pages/CreateClass/CreateClass";
import Assignments from "../../pages/Assignments/Assignments";
import Query from "../../pages/Query/Query";
import Classrooms from "../../pages/Classrooms/Classrooms";
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonRouterOutlet id="main">
      <Switch>
        <Route exact path="/page/join" component={JoinClass} />
        <Route exact path="/page/classrooms" component={Classrooms} />
        <Route exact path="/page/create" component={CreateClass} />
        <Route exact path="/page/assignments" component={Assignments} />
        <Route exact path="/page/queries" component={Query} />
      </Switch>
    </IonRouterOutlet>
  );
};

export default ExploreContainer;
