import React, { useRef, useState } from "react";
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
import { Link } from "react-router-dom";
import Assignment from "../../models/Assignment";
function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
  event.detail.complete();
}

const assignments: Assignment[] = [
  {
    name: "Assignment 1",
    date: new Date("25-07-2020"),
    description:
      "Write a program to find the average waiting and turnaround time for the following process scheduling algorithms. Input the number of processes and their details of process bursts time and arrival time from the user. i) SJF without preemption ii) SJF with preemption iii) Priority (Added information of process priority) iv) Round Robin (Additional information of quantum time)",
    classroom: ["Operating System"],
    timeStart: "9:30 am",
    timeEnd: "9:45 am",
    color: "red",
    id: "1",
  },
  {
    name: "Assignment 1",
    date: new Date("25-07-2020"),
    description:
      "Write the modification algorithm which is used to minimize and prioritize test cases.",
    classroom: ["Software Testing"],
    timeStart: "9:45 am",
    timeEnd: "10:00 am",
    color: "blue",
    id: "2",
  },
  {
    name: "Assignment 2",
    date: new Date("25-07-2020"),
    description:
      "Explain the concept of normalization in relational database.",
    classroom: ["Database Management Systems"],
    timeStart: "9:15 am",
    timeEnd: "9:30 am",
    color: "green",
    id: "3",
  },
  {
    name: "Assignment 1",
    date: new Date("25-07-2020"),
    description:
      "Explain the difference between i) Verification and Validation ii) Cohesion and Coupling",
    classroom: ["Software Engineering"],
    timeStart: "9:30 am",
    timeEnd: "9:45 am",
    color: "red",
    id: "4",
  },
  {
    name: "Assignment 2",
    date: new Date("25-07-2020"),
    description:
      "Explain different phases of software development lifecycle.",
    classroom: ["Software Engineering"],
    timeStart: "9:45 am",
    timeEnd: "10:00 am",
    color: "blue",
    id: "5",
  },
];

const Assignments: React.FC = () => {
  const [location, setLocation] = useState({});
  const ionItemSlidingRef = useRef<HTMLIonItemSlidingElement>(null);

  /*const location = {
    pathname: `/page/assignments/${assignments[0].id}`,
    assignment: assignments[0],
  };*/

  //Set route location from search bar
  const handleLocation = (data: any, i: any) => {
    const loc = {
      pathname: `/page/assignments/${assignments[i].id}`,
      assignment: data,
    };
    setLocation(loc);
  };

  return (
    <>
      <SearchBar
        tasks={assignments}
        setLocation={(data: any, i: any) => {
          handleLocation(data, i);
        }}
      />
      <IonContent>
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          {assignments.map((assignment) => (
            <IonItemSliding ref={ionItemSlidingRef}>
              <Link to={location} className="noUnderline">
                <IonItem
                // routerLink = {`/page/assignments/${assignment.id}`}
                >
                  <div
                    className="verticalLine"
                    style={{ background: assignment.color }}
                  ></div>
                  <IonLabel>
                    <h2>{assignment.name}</h2>
                    <p>
                      {assignment.timeStart} &mdash;&nbsp;
                      {assignment.timeStart} &mdash;&nbsp;
                      {assignment.classroom}
                    </p>
                  </IonLabel>
                  <IonReorder slot="end" />
                </IonItem>
              </Link>
              <IonItemOptions side="start">
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
