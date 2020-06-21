import React from "react";
import "./ExploreContainer.css";
// import { IonReactRouter } from "@ionic/react-router/dist/types/ReactRouter";
// import { IonSplitPane, IonRouterOutlet } from "@ionic/react";
// import { Switch, Route } from "react-router";
import JoinClass from "../JoinClass/JoinClass"


import { Route, Switch} from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { IonSplitPane, IonRouterOutlet } from "@ionic/react";
import CreateClass from "../CreateClass/CreateClass";


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <IonRouterOutlet id="main">
          <Switch>
            <Route path = "/page/join" component = {JoinClass} exact></Route>
            <Route path = "/page/create" component = {CreateClass} exact></Route>
            <Route path = "/page/classrooms" component = {Classroom} exact></Route>
            <Route path = "/page/assignments" component = {Assignments} exact></Route>
            <Route path = "/page/query" component = {Query} exact></Route>
          </Switch>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default ExploreContainer;
