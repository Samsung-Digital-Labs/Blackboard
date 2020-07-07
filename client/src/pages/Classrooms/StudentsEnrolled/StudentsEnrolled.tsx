import React, { Fragment } from "react";
import StudentItem from "./StudentItem";
import { IonCol, IonGrid, IonRow } from "@ionic/react";

const StudentsEnrolled: React.FC<{ studentList: any }> = ({ studentList }) => {
  if (!studentList || !studentList.map || !studentList.length) {
    return (
      <Fragment>
        <h1 className="ion-text-center">Students Enrolled</h1>
        <p className="ion-text-center">No Student Enrolled</p>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h5 className="ion-text-center">Students Enrolled</h5>
      <IonGrid>
        <IonRow>
          {studentList.map((student: any) => {
            return (
              <IonCol size="12" sizeMd="6" sizeLg="4" key={student._id}>
                <StudentItem student={student}></StudentItem>
              </IonCol>
            );
          })}
        </IonRow>
      </IonGrid>
    </Fragment>
  );
};

export default StudentsEnrolled;
