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

const Account: React.FC<{email:string}> = (props) => {
  const [showAlert, setShowAlert] = useState(false);

  const clicked = (text: string) => {
    console.log(`Clicked ${text}`);
  };

  // const user_email = localStorage.getItem("user_email");
  const user_email=props.email;

  return (
    <div id="account-page">
      <div className="ion-padding-top ion-text-center">
        <img src="https://www.gravatar.com/avatar?d=mm&s=140" alt="avatar" />
        <h2>{user_email}</h2>
        <IonList inset>
          <IonItem onClick={() => clicked("Update Picture")} className="pointer">
            Update Picture
          </IonItem>
          <IonItem onClick={() => setShowAlert(true)} className="pointer">Change Username</IonItem>
          <IonItem onClick={() => clicked("Change Password")} className="pointer">
            Change Password
          </IonItem>
          <IonItem routerLink="/support" routerDirection="none">
            Support
          </IonItem>
          <IonItem routerLink="/logout" routerDirection="none">
            Logout
          </IonItem>
        </IonList>
      </div>
      <IonAlert
        isOpen={showAlert}
        header="Change Username"
        buttons={[
          "Cancel",
          {
            text: "Ok",
            handler: (data) => {
              // We can change the username here
              //   setUsername(data.username);
            },
          },
        ]}
        inputs={[
          {
            type: "text",
            name: "username",
            value: user_email,
            placeholder: "username",
          },
        ]}
        onDidDismiss={() => setShowAlert(false)}
      />
    </div>
  );
};

const mapStateToProps=(state:any)=>{
  return{
    email:(state.userReducer.user?state.userReducer.user.email:'')
  }
}

export default connect(mapStateToProps,null)(Account);
