import React,{Fragment, useState} from 'react';
import StudentItem from './StudentItem';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

const StudentsEnrolled: React.FC<{students:any, classroomID: string}> = ({ students, classroomID }) => {
    const [studentList,setStudentList] = useState(students);

    const removeStudentFromList = (studentID:string) => {
        const newList = studentList.filter((s:any) => {
            return s._id != studentID;
        })
        setStudentList(newList);
    }

    if(!studentList || !studentList.map || !studentList.length)
    {
        return (
            <Fragment>
                <h1 className="ion-text-center">Students Enrolled</h1>
                <p className="ion-text-center">No Student Enrolled</p>
            </Fragment>
        )
    }
    return(
        <Fragment>
            <h1 className="ion-text-center">Students Enrolled</h1>
            <IonGrid>
                <IonRow>
                    {
                        studentList.map((student: any) => {
                            return(
                                <IonCol size="12" sizeMd="6" sizeLg="4" key={student._id}>
                                    <StudentItem student={student} classroomID={classroomID} removeStudentFromList={removeStudentFromList}></StudentItem>
                                </IonCol>
                            );
                        })
                    }
                </IonRow>
            </IonGrid>
        </Fragment>
    );
}

export default StudentsEnrolled;