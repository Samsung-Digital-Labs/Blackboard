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
import * as actions from "../../data/users/actions/actions";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

interface Props {
  history: any;
  isUserLoggedIn: boolean;
  loadUser: any;
}

interface State {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

class Signup extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  }

  signup = () => {
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };

    // API post request to create an account
    axios.post("/users/signup", user).then(
      (response) => {
        // API request to login once the account is created
        axios.post("/users/login", user).then(
          (response: any) => {
            // Store the JWT token in local storage
            localStorage.setItem("auth_token", response.data.token);
            // localStorage.setItem("user_email", response.data.email);
            this.props.loadUser(true, response.data.user, response.data.token);
            // window.location.reload(false);
          },
          (error) => {
            window.alert("Wrong Credentials");
          }
        );
      },
      (error) => {
        window.alert("Invalid email address");
      }
    );
  };

  render() {
    // console.log("isUserLoggedIn",this.props.isUserLoggedIn);
    if (localStorage.getItem("auth_token") !== null) {
      return <Redirect to="/page/classrooms"></Redirect>;
    } else {
      return (
        <IonPage>
          <IonContent>
            <div className="ion-text-center">
              <h1>Sign up for free today!</h1>
              <br></br>
              <IonGrid>
                <IonRow className="ion-justify-content-center">
                  <IonCol sizeSm="3" sizeXs="12">
                    <IonItem>
                      <IonLabel position="floating">First Name</IonLabel>
                      <IonInput
                        value={this.state.firstName}
                        onIonChange={(e) => {
                          this.setState({ firstName: e.detail.value! });
                        }}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                  <IonCol sizeSm="3" sizeXs="12">
                    <IonItem>
                      <IonLabel position="floating">Last Name</IonLabel>
                      <IonInput
                        value={this.state.lastName}
                        onIonChange={(e) => {
                          this.setState({ lastName: e.detail.value! });
                        }}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
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
                    <IonButton
                    expand="block"
                    fill = "outline"
                    onClick={this.signup}
                  >
                      Sign Up
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="noUnderline">
                  Login
                </Link>
              </p>
            </div>
          </IonContent>
        </IonPage>
      );
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    isUserLoggedIn: state.userReducer.isUserLoggedIn,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadUser: (isUserLoggedIn: boolean, user:any, authToken: string ) => {
      dispatch(actions.loadUser(isUserLoggedIn, user,  authToken));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
