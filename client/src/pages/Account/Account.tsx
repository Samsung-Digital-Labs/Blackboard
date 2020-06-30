import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonAlert,
} from "@ionic/react";
import "./Account.scss";

import {connect} from 'react-redux';
import axios from 'axios';
import * as actions from '../../data/users/actions/actions';

interface Props{
  loadUser:any,
  authToken:string
  user:any
}

const Account: React.FC<Props> = (props) => {
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);

  const clicked = (text: string) => {
    console.log(`Clicked ${text}`);
  };

  const logout=()=>{
    localStorage.removeItem("auth_token");
    props.loadUser(false,{},'');
    window.location.reload(false);
  }

  // const user_email = localStorage.getItem("user_email");
  const user_email=(props.user?props.user.email:'');
  const firstName=(props.user?props.user.firstName:'');
  const lastName=(props.user?props.user.lastName:'');

  return (
    <div id="account-page">
      <div className="ion-padding-top ion-text-center">
        <img src="https://www.gravatar.com/avatar?d=mm&s=140" alt="avatar" />
        <h2>{firstName+" "+lastName}</h2>
        <IonList inset>
          <IonItem onClick={() => clicked("Update Picture")} className="pointer">
            Update Picture
          </IonItem>
          <IonItem onClick={() => setShowAlert1(true)} className="pointer">Change Name</IonItem>
          <IonItem onClick={() => setShowAlert2(true)} className="pointer">
            Change Password
          </IonItem>
          <IonItem routerLink="/support" routerDirection="none">
            Support
          </IonItem>
          <IonItem onClick={ logout } className="pointer">
            Logout
          </IonItem>
        </IonList>
      </div>
      <IonAlert
        isOpen={showAlert1}
        header="Change Username"
        buttons={[
          "Cancel",
          {
            text: "Ok",
            handler: (data) => {
              // We can change the username here
              //   setUsername(data.username);
              const user={
                email:user_email,
                firstName:data.firstName,
                lastName:data.lastName
              }

              axios.put('/users/updatename',user)
              .then(response=>{
                const user=props.user;
                user.firstName=data.firstName;
                user.lastName=data.lastName;

                props.loadUser(true, user, props.authToken);

                window.alert("name updated successfully");
              })
              .catch(err=>{
                window.alert("error in updating name");
              })
            },
          },
        ]}
        inputs={[
          {
            type: "text",
            name: "firstName",
            value: firstName,
            placeholder: "first name",
          },
          {
            type: "text",
            name: "lastName",
            value: lastName,
            placeholder: "last name",
          },
        ]}
        onDidDismiss={() => setShowAlert1(false)}
      />

      <IonAlert
        isOpen={showAlert2}
        header="Change Password"
        buttons={[
          "Cancel",
          {
            text: "Ok",
            handler: (data) => {
              // We can change the password here
              //   setPassword(data.password);
              const user={
                email:user_email,
                password:data.password
              }

              axios.put('/users/updatepassword',user)
              .then(response=>{
                window.alert("password updated successfully");
              })
              .catch(err=>{
                window.alert("error in updating password");
              })
            },
          },
        ]}
        inputs={[
          {
            type: "password",
            name: "password",
            value: '',
            placeholder: "password",
          },
        ]}
        onDidDismiss={() => setShowAlert2(false)}
      />
    </div>
  );
};

const mapStateToProps=(state:any)=>{
  return{
    user:state.userReducer.user,
    authToken:state.userReducer.authToken
  }
}

const mapDispatchToProps=(dispatch:any)=>{
  return{
    loadUser:(isUserLoggedIn:boolean, user:any, authToken:string)=>{
      dispatch(actions.loadUser(isUserLoggedIn, user, authToken));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Account);
