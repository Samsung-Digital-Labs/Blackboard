import React, { Component } from "react";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
} from "@ionic/react";
import { Link } from "react-router-dom";

interface State {
  classID: string;
}

interface Props {
  history: any;
}

class Query extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      classID: "",
    };
  }

  join = () => {
    const object = {
      email: window.localStorage.getItem("user_email"),
      classID: this.state.classID,
    };
    // console.log("object is",object);

    // api request

    if (true) {
      // no error in joining class
      // redirect user
      this.props.history.push("/page/classrooms");
    } else {
      // error in joining class
      window.alert("error joining class");
    }
  };

  render() {
    // console.log("classID is "+this.state.classID);
    return (
      <div className="ion-text-center">
        <h1>Queries</h1>
      </div>
    );
  }
}

export default Query;
