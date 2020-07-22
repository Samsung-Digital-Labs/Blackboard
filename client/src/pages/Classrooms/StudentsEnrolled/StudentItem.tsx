import React,{Fragment} from 'react';
import { IonCard, IonCardHeader, IonItem, IonAvatar, IonLabel, IonChip, IonCardContent } from '@ionic/react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StudentItem:React.FC<{student:any, classroomID: string, removeStudentFromList:any}> = ({ student, classroomID, removeStudentFromList }) => {

    const remove=()=>{
        const answer=window.confirm(`are you sure you want to remove ${student.firstName} ${student.lastName}?`);
        if(answer){
            axios.delete(`/classrooms/removeStudent/${classroomID}/${student._id}`)
            .then(response => {
                removeStudentFromList(student._id);
                window.alert(`${student.firstName} ${student.lastName} was removed from classroom`);
            })
            .catch(err=>{
                window.alert('error in removing student');
            })
        }
        else{
            return;
        }
    }

    return(
        <Fragment>
            <IonCard>
                <IonCardContent>
                <IonItem
                    detail={false}
                    lines="none"
                >
                    <IonAvatar slot="start">
                    <img
                        src="https://www.gravatar.com/avatar?d=mm&s=140"
                        alt="Speaker profile pic"
                    />
                    </IonAvatar>
                    <IonLabel>
                    <h2>{student.firstName+" "+student.lastName}</h2>
                    <p>{student.email}</p>
                    <IonChip color="danger" onClick={remove}>Remove</IonChip>
                    </IonLabel>
                </IonItem>       
                </IonCardContent>
            </IonCard>
        </Fragment>
    );
}

export default StudentItem;