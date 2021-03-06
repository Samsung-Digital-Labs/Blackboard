import React, { Component } from "react";
import { connect } from "react-redux";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonContent,
} from "@ionic/react";

import "./login.scss";
import * as actions from "../../data/users/actions/actions";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

interface Props {
  history: any;
  isUserLoggedIn: boolean;
  loadUser: any;
}

interface State {
  email: string;
  password: string;
}

class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  login = (e: React.FormEvent) => {

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    if(!this.state.email || !this.state.password){
      window.alert("please enter all fields");
      return;
    }

    // API request
    axios.post("/users/login", user).then(
      (response: any) => {
        // Store the JWT token in local storage
        localStorage.setItem("auth_token", response.data.token);
        this.props.loadUser(true, response.data.user, response.data.token);
        this.props.history.push('/page/classrooms', {direction: 'none'});
      },
      (error) => {
        window.alert("Wrong Credentials");
      }
    );
  };

  render() {
      return (
        <IonPage>
          <IonContent>
            <div className="ion-text-center">
              <div className="login-logo">
                <img src="assets/img/logo.png" alt="Blackboard logo" />
              </div>
              <IonGrid>
              <IonRow className="ion-justify-content-center">
                  <IonCol sizeXs="12" sizeSm="6">
                    <IonItem>
                      <IonLabel position="floating">Email</IonLabel>
                      <IonInput
                        type="email"
                        value={this.state.email}
                        onIonChange={(e) => {
                          this.setState({ email: e.detail.value! });
                        }}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-center">
                  <IonCol sizeXs="12" sizeSm="6">
                    <IonItem>
                      <IonLabel position="floating">Password</IonLabel>
                      <IonInput
                        type="password"
                        value={this.state.password}
                        onIonChange={(e) => {
                          this.setState({ password: e.detail.value! });
                        }}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-center">
                  <IonCol sizeXs="12" sizeSm="3">
                    <IonButton expand="block"  onClick={this.login}>
                      Login
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="noUnderline">
                  Sign Up
                </Link>
              </p>
            </div>
          </IonContent>
        </IonPage>
      );
    }
  // }
}
const mapStateToProps = (state: any) => {
  return {
    isUserLoggedIn: state.userReducer.isUserLoggedIn,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadUser: (isUserLoggedIn: boolean, user: any, authToken: string) => {
      dispatch(actions.loadUser(isUserLoggedIn, user, authToken));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
