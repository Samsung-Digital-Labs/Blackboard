import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

import './ClassroomDetail.scss';

import { ActionSheetButton } from '@ionic/core';
import { IonActionSheet, IonChip, IonIcon, IonHeader, IonLabel, IonToolbar, IonButtons, IonContent, IonButton, IonBackButton, IonPage, IonModal, IonTextarea, IonGrid, IonRow, IonCol } from '@ionic/react'
import { callOutline, callSharp, logoTwitter, logoGithub, logoInstagram, shareOutline, shareSharp } from 'ionicons/icons';

// import { connect } from '../data/connect';
// import * as selectors from '../data/selectors';

import { Classroom } from '../../models/Classroom';
import StudentsEnrolled from './StudentsEnrolled/StudentsEnrolled';
import axios from 'axios';


interface OwnProps extends RouteComponentProps {
  param1: Classroom;
};

interface StateProps {};

interface DispatchProps {};

interface ClassroomDetailProps extends OwnProps, StateProps, DispatchProps {};

const ClassroomDetail: React.FC<{ match: any, location: any }> = (props) => {
  // console.log("params",props.match.params);
  // console.log("classroom",props.location.classroom);
  // const Classroom =   {
  //   name: "Burt Bear",
  //   profilePic: "/assets/img/speakers/bear.jpg",
  //   instagram: "ionicframework",
  //   twitter: "ionicframework",
  //   about:
  //     "Burt is a Bear. Burt's interests include poetry, dashing space heroes, and lions.",
  //   title: "Software Engineer",
  //   location: "Everywhere",
  //   email: "burt@example.com",
  //   phone: "+1-541-754-3010",
  //   id: "1",


  //   _id:"",
  //   classroomName:"",
  //   subject:"",
  //   description:"",
  //   enrolledStudents:[],
  //   teacher:"",
  //   queries:[],
  //   announcements:[]
  // };
  const classroom=props.location.classroom;
  console.log(classroom);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<ActionSheetButton[]>([]);
  const [actionSheetHeader, setActionSheetHeader] = useState('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const postAnnouncement = () => {
      const announcement = {
          announcement: text,
          postedBy: classroom.teacher._id,
          classroomID: classroom._id
      }
      // console.log("anouncement is ",announcement);
      axios.put('/classrooms/announcement', announcement)
      .then(response=>{
          window.alert("announcement posted");
          setText('');
          setShowModal(false);
      })
      .catch(err=>{
          window.alert("error in posting announcement");
      })
  }

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

  if (!classroom) {
    return <div>Classroom not found</div>
  }

  return (
    <IonPage id="Classroom-detail">
      <IonContent>
        {console.log()}
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/page/classrooms" />
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={() => openContact(classroom)}>
                <IonIcon slot="icon-only" ios={callOutline} md={callSharp}></IonIcon>
              </IonButton>
              <IonButton onClick={() => openClassroomShare(classroom)}>
                <IonIcon slot="icon-only" ios={shareOutline} md={shareSharp}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="Classroom-background">
          <img src={'https://www.gravatar.com/avatar?d=mm&s=140'} alt={classroom.name}/>
          <h2>{classroom.classroomName}</h2>
        </div>

        <div className="ion-padding Classroom-detail">
          <p>Subject: {classroom.subject}</p>
          <p>Teacher: {classroom.teacher.firstName+" "+classroom.teacher.lastName}</p>
          <p>Description: {classroom.description}</p>

          <hr/>

          <IonChip color="twitter" onClick={() => openExternalUrl(`https://twitter.com/${classroom.twitter}`)}>
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
        <br></br>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeSm="6">
              <IonButton onClick={() => setShowModal(true)} expand="block">Post Announcement</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <StudentsEnrolled studentList={classroom.enrolledStudents}></StudentsEnrolled>
      </IonContent>
      <IonActionSheet
        isOpen={showActionSheet}
        header={actionSheetHeader}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={actionSheetButtons}
      />

        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
            <h1 className="ion-text-center">Post Announcement</h1>
            <br></br>
            <IonTextarea placeholder="Enter announcement here" value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
            <IonButton onClick={postAnnouncement}>Post</IonButton>
            <IonButton onClick={() => setShowModal(false)}>Cancel</IonButton>
        </IonModal>
    </IonPage>
  );
};

export default ClassroomDetail;