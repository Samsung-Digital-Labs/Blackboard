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
import { Link } from "react-router-dom";

interface ClassroomItemProps {
  classroom: Classroom;
  //   Assignments: Assignment[];
}

const ClassroomItem: React.FC<ClassroomItemProps> = ({ classroom }) => {
  const location={
    pathname:`/page/classrooms/${classroom._id}`,
    classroom:classroom
  }
  return (
    <>
      <IonCard className="classroom-card">
        <IonCardHeader>
          <Link to={location} className="noUnderline">
          <IonItem
            button
            detail={false}
            lines="none"
            className="classroom-item"
          >
            <IonAvatar slot="start">
              <img
                src="https://www.gravatar.com/avatar?d=mm&s=140"
                alt="Speaker profile pic"
              />
            </IonAvatar>
            <IonLabel>
              <h2>{classroom.classroomName}</h2>
              <p>{classroom.subject}</p>
            </IonLabel>
          </IonItem>
          </Link>        
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
            <IonItem detail={false}>
              <IonLabel>
                <h3>{classroom.description}</h3>
              </IonLabel>
            </IonItem>
            <IonItem detail={false}>
              <IonLabel>
                <h3>Leave</h3>
              </IonLabel>
            </IonItem>

          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default ClassroomItem;