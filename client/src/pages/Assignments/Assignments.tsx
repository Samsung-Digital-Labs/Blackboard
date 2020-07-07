import React, { useRef } from "react";
import {
  IonItem,
  IonLabel,
  IonReorder,
  IonReorderGroup,
  IonContent,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from "@ionic/react";
import { ItemReorderEventDetail } from "@ionic/core";
import SearchBar from "./searchBar";
import "./assignmentList.scss";

function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
  event.detail.complete();
}

const assignments = [
  {
    name: "Getting Started with Ionic",
    date: "25-07-2020",
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ted Turtle"],
    timeStart: "9:30 am",
    timeEnd: "9:45 am",
    color: "red",
    id: "2",
  },
  {
    name: "Ionic Tooling",
    date: "25-07-2020ive Ballroom",
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Rachel Rabbit"],
    timeStart: "9:45 am",
    timeEnd: "10:00 am",
    tracks: ["Tooling"],
    color: "blue",
    id: "3",
  },
  {
    name: "University of Ionic",
    date: "25-07-2020",
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ellie Elephant"],
    timeStart: "9:15 am",
    timeEnd: "9:30 am",
    tracks: ["Ionic"],
    color: "green",
    id: "4",
  },
  {
    name: "Getting Started with Ionic",
    date: "25-07-2020",
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ted Turtle"],
    timeStart: "9:30 am",
    timeEnd: "9:45 am",
    color: "red",
    id: "2",
  },
  {
    name: "Ionic Tooling",
    date: "25-07-2020ive Ballroom",
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Rachel Rabbit"],
    timeStart: "9:45 am",
    timeEnd: "10:00 am",
    tracks: ["Tooling"],
    color: "blue",
    id: "3",
  },
  {
    name: "University of Ionic",
    date: "25-07-2020",
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ellie Elephant"],
    timeStart: "9:15 am",
    timeEnd: "9:30 am",
    tracks: ["Ionic"],
    color: "green",
    id: "4",
  },
  {
    name: "Getting Started with Ionic",
    date: "25-07-2020",
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ted Turtle"],
    timeStart: "9:30 am",
    timeEnd: "9:45 am",
    color: "red",
    id: "2",
  },
  {
    name: "Ionic Tooling",
    date: "25-07-2020ive Ballroom",
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Rachel Rabbit"],
    timeStart: "9:45 am",
    timeEnd: "10:00 am",
    tracks: ["Tooling"],
    color: "blue",
    id: "3",
  },
  {
    name: "University of Ionic",
    date: "25-07-2020",
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ellie Elephant"],
    timeStart: "9:15 am",
    timeEnd: "9:30 am",
    tracks: ["Ionic"],
    color: "green",
    id: "4",
  },
  {
    name: "Getting Started with Ionic",
    date: "25-07-2020",
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ted Turtle"],
    timeStart: "9:30 am",
    timeEnd: "9:45 am",
    color: "red",
    id: "2",
  },
  {
    name: "Ionic Tooling",
    date: "25-07-2020ive Ballroom",
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Rachel Rabbit"],
    timeStart: "9:45 am",
    timeEnd: "10:00 am",
    tracks: ["Tooling"],
    color: "blue",
    id: "3",
  },
  {
    name: "University of Ionic",
    date: "25-07-2020",
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ellie Elephant"],
    timeStart: "9:15 am",
    timeEnd: "9:30 am",
    tracks: ["Ionic"],
    color: "green",
    id: "4",
  },
];

const Assignments: React.FC = () => {
  const ionItemSlidingRef = useRef<HTMLIonItemSlidingElement>(null);

  return (
    <>
      <SearchBar></SearchBar>
      <IonContent>
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          {assignments.map((assignment) => (
            <IonItemSliding ref={ionItemSlidingRef}>
              <IonItem routerLink = {`/page/assignments/${assignment.id}`}>
                <div
                  className="verticalLine"
                  style={{ background: assignment.color }}
                ></div>
                <IonLabel>
                  <h3>{assignment.name}</h3>
                  <p>
                    {assignment.timeStart} &mdash;&nbsp;
                    {assignment.timeStart} &mdash;&nbsp;
                    {assignment.classroom}
                  </p>
                </IonLabel>
                <IonReorder slot="end" />
              </IonItem>
              <IonItemOptions side = "start">
                <IonItemOption
                  style={{
                    background: assignment.color,
                  }}
                  // onClick={() => Bookmark()}
                >
                  Bookmark
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonReorderGroup>
      </IonContent>
    </>
  );
};

export default Assignments;
