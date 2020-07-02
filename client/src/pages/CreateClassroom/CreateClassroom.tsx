import React, { Component } from "react";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
  IonContent,
} from "@ionic/react";
import { Link } from "react-router-dom";
import axios from "axios";

import { connect } from "react-redux";

interface Props {
  history: any;
  userID: string;
}

interface State {
  classroomName: string;
  subject: string;
  description: string;
  phone: string;
}

class CreateClassroom extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      classroomName: "",
      subject: "",
      description: "",
      phone: "",
    };
  }

  create = () => {
    const classroom = {
      classroomName: this.state.classroomName,
      subject: this.state.subject,
      description: this.state.description,
      userID: this.props.userID,
      phone: this.state.phone,
    };

    // api request
    axios
      .post("/classrooms/create", classroom)
      .then((response) => {
        this.props.history.push("/page/classrooms");
      })
      .catch((err) => {
        console.log(err);
        window.alert("error in creating classroom");
      });
  };

  render() {

    return (
      <IonContent className="ion-text-center">
        <h1>Create Classroom</h1>        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol sizeXs="12" sizeMd="6">
              <IonItem>
                <IonLabel position="floating">Classroom Name</IonLabel>
                <IonInput
                  onIonChange={(e) => {
                    this.setState({ classroomName: e.detail.value! });
                  }}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol sizeXs="12" sizeMd="6">
              <IonItem>
                <IonLabel position="floating">Subject</IonLabel>
                <IonInput
                  onIonChange={(e) => {
                    this.setState({ subject: e.detail.value! });
                  }}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol sizeXs="12" sizeMd="6">
              <IonItem>
                <IonLabel position="floating">Phone</IonLabel>
                <IonInput
                  onIonChange={(e) => {
                    this.setState({ phone: e.detail.value! });
                  }}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol sizeXs="12" sizeMd="6">
              <IonItem>
                <IonTextarea
                  placeholder="Enter classroom Description"
                  onIonChange={(e) => {
                    this.setState({ description: e.detail.value! });
                  }}
                ></IonTextarea>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol sizeXs="12" sizeMd="3">
              <IonButton size="large" expand="full" onClick={this.create}>
                Create
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <p>
          Want to join an existing classroom?{" "}
          <Link to="/page/join" className="noUnderline">
            Join Here
          </Link>
        </p>
      </IonContent>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    userID: state.userReducer.user ? state.userReducer.user.userID : "",
  };
};

export default connect(mapStateToProps, null)(CreateClassroom);
