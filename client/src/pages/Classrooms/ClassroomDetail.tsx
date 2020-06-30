import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

import './ClassroomDetail.scss';

import { ActionSheetButton } from '@ionic/core';
import { IonActionSheet, IonChip, IonIcon, IonHeader, IonLabel, IonToolbar, IonButtons, IonContent, IonButton, IonBackButton, IonPage } from '@ionic/react'
import { callOutline, callSharp, logoTwitter, logoGithub, logoInstagram, shareOutline, shareSharp } from 'ionicons/icons';

// import { connect } from '../data/connect';
// import * as selectors from '../data/selectors';

import { Classroom } from '../../models/Classroom';


interface OwnProps extends RouteComponentProps {
  Classroom?: Classroom;
};

interface StateProps {};

interface DispatchProps {};

interface ClassroomDetailProps extends OwnProps, StateProps, DispatchProps {};

const ClassroomDetail: React.FC = () => {
  const Classroom =   {
    name: "Burt Bear",
    profilePic: "/assets/img/speakers/bear.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Burt is a Bear. Burt's interests include poetry, dashing space heroes, and lions.",
    title: "Software Engineer",
    location: "Everywhere",
    email: "burt@example.com",
    phone: "+1-541-754-3010",
    id: "1",


    _id:"",
    classroomName:"",
    subject:"",
    description:"",
    enrolledStudents:[],
    teacher:"",
    queries:[],
    announcements:[]
  };
  console.log(Classroom);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<ActionSheetButton[]>([]);
  const [actionSheetHeader, setActionSheetHeader] = useState('');

  function openClassroomShare(Classroom: Classroom) {
    setActionSheetButtons([
      {
        text: 'Copy Link',
        handler: () => {
          console.log('Copy Link clicked');
        }
      },
      {
        text: 'Share via ...',
        handler: () => {
          console.log('Share via clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]);
    setActionSheetHeader(`Share ${Classroom.name}`);
    setShowActionSheet(true);
  }

  function openContact(Classroom: Classroom) {
    setActionSheetButtons([
      {
        text: `Email ( ${Classroom.email} )`,
        handler: () => {
          window.open('mailto:' + Classroom.email);
        }
      },
      {
        text: `Call ( ${Classroom.phone} )`,
        handler: () => {
          window.open('tel:' + Classroom.phone);
        }
      }
    ]);
    setActionSheetHeader(`Contact ${Classroom.name}`);
    setShowActionSheet(true);
  }

  function openExternalUrl(url: string) {
    window.open(url, '_blank');
  }

  if (!Classroom) {
    return <div>Classroom not found</div>
  }

  return (
    <IonPage id="Classroom-detail">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/page/classrooms" />
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={() => openContact(Classroom)}>
                <IonIcon slot="icon-only" ios={callOutline} md={callSharp}></IonIcon>
              </IonButton>
              <IonButton onClick={() => openClassroomShare(Classroom)}>
                <IonIcon slot="icon-only" ios={shareOutline} md={shareSharp}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="Classroom-background">
          <img src={Classroom.profilePic} alt={Classroom.name}/>
          <h2>{Classroom.name}</h2>
        </div>

        <div className="ion-padding Classroom-detail">
          <p>{Classroom.about} Say hello on social media!</p>

          <hr/>

          <IonChip color="twitter" onClick={() => openExternalUrl(`https://twitter.com/${Classroom.twitter}`)}>
            <IonIcon icon={logoTwitter}></IonIcon>
            <IonLabel>Twitter</IonLabel>
          </IonChip>

          <IonChip color="dark" onClick={() => openExternalUrl('https://github.com/ionic-team/ionic')}>
            <IonIcon icon={logoGithub}></IonIcon>
            <IonLabel>GitHub</IonLabel>
          </IonChip>

          <IonChip color="instagram" onClick={() => openExternalUrl('https://instagram.com/ionicframework')}>
            <IonIcon icon={logoInstagram}></IonIcon>
            <IonLabel>Instagram</IonLabel>
          </IonChip>
        </div>
      </IonContent>
      <IonActionSheet
        isOpen={showActionSheet}
        header={actionSheetHeader}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={actionSheetButtons}
      />
    </IonPage>
  );
};

export default ClassroomDetail;