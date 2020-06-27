import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonItem,
  IonLabel,
  IonAvatar,
  IonCardContent,
  IonList,
} from "@ionic/react";
import { Classroom } from "../../models/Classroom";

interface ClassroomItemProps {
  classroom: Classroom;
  //   Assignments: Assignment[];
}

const ClassroomItem: React.FC<ClassroomItemProps> = ({ classroom }) => {
  return (
    <>
      <IonCard className="classroom-card">
        <IonCardHeader>
          <IonItem
            button
            detail={false}
            lines="none"
            className="classroom-item"
            routerLink={`/page/classrooms/${classroom.id}`}
          >
            <IonAvatar slot="start">
              <img
                src={process.env.PUBLIC_URL + classroom.profilePic}
                alt="Speaker profile pic"
              />
            </IonAvatar>
            <IonLabel>
              <h2>{classroom.name}</h2>
              <p>{classroom.title}</p>
            </IonLabel>
          </IonItem>
        </IonCardHeader>

        <IonCardContent>
          <IonList lines="none">
            {/* {Assignments.map((Assignment) => (
              <IonItem
                detail={false}
                routerLink={`/page/classrooms/Assignments/${Assignment.id}`}
                key={Assignment.name}
              >
                <IonLabel>
                  <h3>{Assignment.name}</h3>
                </IonLabel>
              </IonItem>
            ))} */}
            <IonItem detail={false} routerLink={`/page/classrooms/${classroom.id}`}>
              <IonLabel>
                <h3>About {classroom.name}</h3>
              </IonLabel>
            </IonItem>
            <IonItem detail={false} routerLink={`/page/classrooms/${classroom.id}`}>
              <IonLabel>
                <h3>Leave {classroom.name}'s class</h3>
              </IonLabel>
            </IonItem>

          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default ClassroomItem;
