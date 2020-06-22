import React from "react";

import {
  IonButton,
  IonIcon,
  IonFooter,
  IonToolbar,
  IonApp,
  IonContent,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import { Link, Redirect } from "react-router-dom";

import { people, personAdd } from "ionicons/icons";

import { connect } from "react-redux";

import "./Welcome.css";

const Welcome: React.FC<{ isUserLoggedIn: boolean; history: any }> = (
  props
) => {
  if (localStorage.getItem("auth_token") !== null) {
    return <Redirect to="/page/classrooms"></Redirect>;
  }
  return (
    <IonApp>
      <IonContent className = "welcome">
        <div className="ion-text-center">
          <img
            className="responsive"
            src="./assets/logo.png"
            alt="not found"
          ></img>

        </div>

        <IonGrid>
          <IonRow>
            <IonCol sizeSm="6" sizeXs="12">
              <Link to="/login" className="noUnderline">
                <IonButton  expand="block">
                  <IonIcon slot="start" icon={people} />
                  Login
                </IonButton>
              </Link>
            </IonCol>
            <IonCol sizeSm="6" sizeXs="12">
              <Link to="/signup" className="noUnderline">
                <IonButton fill = "outline" expand="block">
                  <IonIcon slot="start" icon={personAdd} />
                  Signup
                </IonButton>
              </Link>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isUserLoggedIn: state.userReducer.isUserLoggedIn,
  };
};

export default connect(mapStateToProps, null)(Welcome);
