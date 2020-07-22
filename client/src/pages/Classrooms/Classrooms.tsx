import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
  IonIcon,
  IonLabel,
  IonRefresher,
  IonRefresherContent,
  IonToast,
} from "@ionic/react";
import ClassroomItem from "./ClassroomItem";
import "./Classrooms.scss";
import React, { Component, FC, useState, useRef, useEffect } from "react";
import ClassroomFab from "./ClassroomFab";

import { connect } from "react-redux";
import * as actions from "../../data/classrooms/actions/actions";

var classrooms = [
  {
    name: "Burt Bear",
    profilePic: "/assets/img/speakers/bear.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Burt is a Bear. Burt's interests include poetry, dashing space heroes, and lions.",
    title: "Software Engineering",
    location: "Everywhere",
    email: "burt@example.com",
    phone: "+91-8800-77-4261",
    id: "1",
  },
  {
    name: "Charlie Cheetah",
    profilePic: "/assets/img/speakers/cheetah.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Charlie is a Cheetah. Charlie's interests include country music, plush animals, pyrotechnics, and skeletons.",
    title: "Software Engineering",
    location: "Everywhere",
    email: "charlie@example.com",
    phone: "+1-541-754-3010",
    id: "2",
  },
  {
    name: "Donald Duck",
    profilePic: "/assets/img/speakers/duck.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Donald is a Duck. Donald's interests include carpentry, superheroes, merpeople, and glam rock.",
    title: "Software Engineering",
    location: "Everywhere",
    email: "donald@example.com",
    phone: "+1-541-754-3010",
    id: "3",
  },
  {
    name: "Eva Eagle",
    profilePic: "/assets/img/speakers/eagle.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Eva is an Eagle. Eva's interests include ants, seashells, and cupcakes.",
    title: "Developer Advocate",
    location: "Everywhere",
    email: "eva@example.com",
    phone: "+1-541-754-3010",
    id: "4",
  },
  {
    name: "Ellie Elephant",
    profilePic: "/assets/img/speakers/elephant.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Ellie is an Elephant. Ellie's interests include pocket watches, pool, hand fans, and ninjas.",
    title: "Software Engineering",
    location: "Everywhere",
    email: "ellie@example.com",
    phone: "+1-541-754-3010",
    id: "5",
  },
  {
    name: "Gino Giraffe",
    profilePic: "/assets/img/speakers/giraffe.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Gino is a Giraffe. Gino's interests include candy-making, unicorns, and birdhouses.",
    title: "Software Engineering",
    location: "Everywhere",
    email: "gino@example.com",
    phone: "+1-541-754-3010",
    id: "6",
  },
  {
    name: "Isabella Iguana",
    profilePic: "/assets/img/speakers/iguana.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Isabella is an Iguana. Isabella's interests include crystals, architecture, and candle-making.",
    title: "Software Engineering",
    location: "Everywhere",
    email: "isabella@example.com",
    phone: "+1-541-754-3010",
    id: "7",
  },
  {
    name: "Karl Kitten",
    profilePic: "/assets/img/speakers/kitten.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Karl is a Kitten. Karl's interests include skiing, jewelry, and needlepoint.",
    title: "Developer Advocate",
    location: "Everywhere",
    email: "karl@example.com",
    phone: "+1-541-754-3010",
    id: "8",
  },
  {
    name: "Lionel Lion",
    profilePic: "/assets/img/speakers/lion.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Lionel is a Lion. Lionel's interests include lizards and mathematics.",
    title: "Developer Advocate",
    location: "Everywhere",
    email: "lionel@example.com",
    phone: "+1-541-754-3010",
    id: "9",
  },
  {
    name: "Molly Mouse",
    profilePic: "/assets/img/speakers/mouse.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about: "Molly is a Mouse. Molly's interests include werewolves and magic.",
    title: "Software Engineering",
    location: "Everywhere",
    email: "molly@example.com",
    phone: "+1-541-754-3010",
    id: "10",
  },
  {
    name: "Paul Puppy",
    profilePic: "/assets/img/speakers/puppy.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Paul is a Puppy. Paul's interests include maps, whales, and dragons.",
    title: "Software Engineering",
    location: "Everywhere",
    email: "paul@example.com",
    phone: "+1-541-754-3010",
    id: "11",
  },
  {
    name: "Rachel Rabbit",
    profilePic: "/assets/img/speakers/rabbit.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Rachel is a Rabbit. Rachel's interests include clowns, skeletons, and yo-yos.",
    title: "Senior Software Engineering",
    location: "Everywhere",
    email: "rachel@example.com",
    phone: "+1-541-754-3010",
    id: "12",
  },
  {
    name: "Ted Turtle",
    profilePic: "/assets/img/speakers/turtle.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Ted is a Turtle. Ted's interests include butterflies, skiing, and cupcakes.",
    title: "Software Engineering",
    location: "Everywhere",
    email: "ted@example.com",
    phone: "+1-541-754-3010",
    id: "13",
  },
];

var myClassrooms = [
  {
    name: "Ted Turtle",
    profilePic: "/assets/img/speakers/turtle.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Ted is a Turtle. Ted's interests include butterflies, skiing, and cupcakes.",
    title: "Software Engineering",
    location: "Everywhere",
    email: "ted@example.com",
    phone: "+1-541-754-3010",
    id: "13",
  },
];
var enrolledClassrooms = [
  {
    name: "Burt Bear",
    profilePic: "/assets/img/speakers/bear.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Burt is a Bear. Burt's interests include poetry, dashing space heroes, and lions.",
    title: "Software Engineering",
    location: "Everywhere",
    email: "burt@example.com",
    phone: "+1-541-754-3010",
    id: "1",
  },
  {
    name: "Charlie Cheetah",
    profilePic: "/assets/img/speakers/cheetah.jpg",
    instagram: "ionicframework",
    twitter: "ionicframework",
    about:
      "Charlie is a Cheetah. Charlie's interests include country music, plush animals, pyrotechnics, and skeletons.",
    title: "Software Engineering",
    location: "Everywhere",
    email: "charlie@example.com",
    phone: "+1-541-754-3010",
    id: "2",
  },
];

interface Props {
  loadMyClassrooms: any;
  loadEnrolledClassrooms: any;
  myClassrooms: any;
  enrolledClassrooms: any;
  userID: string;
}

const Classrooms: React.FC<Props> = (props) => {
  const [segment, setSegment] = useState<"enrolled" | "my">("enrolled");
  const ionRefresherRef = useRef<HTMLIonRefresherElement>(null);
  const [showCompleteToast, setShowCompleteToast] = useState(false);

  useEffect(() => {
    const userID = props.userID;
    props.loadEnrolledClassrooms(userID);
    props.loadMyClassrooms(userID);
  }, []);

  const doRefresh = () => {
    const userID = props.userID;
    props.loadEnrolledClassrooms(userID);
    props.loadMyClassrooms(userID);

    setTimeout(() => {
      ionRefresherRef.current!.complete();
      setShowCompleteToast(true);
    }, 2500);
  };

  return (
    <IonContent fullscreen={true} id="classroom-list">
      <IonSegment
        value={segment}
        onIonChange={(e) => setSegment(e.detail.value as any)}
      >
        <IonSegmentButton value="enrolled">
          <IonLabel>Enrolled</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="my">
          <IonLabel>My Rooms</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonRefresher slot="fixed" ref={ionRefresherRef} onIonRefresh={doRefresh}>
        <IonRefresherContent />
      </IonRefresher>

      <IonToast
        isOpen={showCompleteToast}
        message="Classrooms updated"
        duration={2000}
        onDidDismiss={() => setShowCompleteToast(false)}
      />

      {/* Print enrolled classrooms if segment matches */}
      {segment === "enrolled" && (
        <IonGrid fixed>
          <IonRow>
            {props.enrolledClassrooms &&
            props.enrolledClassrooms.map &&
            props.enrolledClassrooms.length ? (
              props.enrolledClassrooms.map((classroom: any) => (
                <IonCol size="12" size-md="6" key={classroom._id}>
                  <ClassroomItem key={classroom._id} classroom={classroom} />
                </IonCol>
              ))
            ) : (
              <IonCol>
                <p className="ion-text-center">
                  You are not enrolled in any classroom
                </p>
              </IonCol>
            )}
          </IonRow>
        </IonGrid>
      )}

      {/* Print my classrooms if segment matches */}
      {segment === "my" && (
        <IonGrid fixed>
          <IonRow>
            {props.myClassrooms &&
            props.myClassrooms.map &&
            props.myClassrooms.length ? (
              props.myClassrooms.map((classroom: any) => (
                <IonCol size="12" size-md="6" key={classroom._id}>
                  <ClassroomItem key={classroom._id} classroom={classroom} />
                </IonCol>
              ))
            ) : (
              <IonCol>
                <p className="ion-text-center">
                  You have not created any classroom
                </p>
              </IonCol>
            )}
          </IonRow>
        </IonGrid>
      )}

      <ClassroomFab />
    </IonContent>
  );
};

const mapStateToProps = (state: any) => {
  return {
    myClassrooms: state.classroomReducer.myClassrooms,
    enrolledClassrooms: state.classroomReducer.enrolledClassrooms,
    userID: state.userReducer.user ? state.userReducer.user.userID : "",
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadMyClassrooms: (userID: string) => {
      dispatch(actions.loadMyClassrooms(userID));
    },
    loadEnrolledClassrooms: (userID: string) => {
      dispatch(actions.loadEnrolledClassrooms(userID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Classrooms);
