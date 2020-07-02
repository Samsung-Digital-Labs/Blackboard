import React,{Fragment} from 'react';
import { IonCard, IonCardHeader, IonItem, IonAvatar, IonLabel, IonChip, IonCardContent } from '@ionic/react';
import { Link } from 'react-router-dom';

const StudentItem:React.FC<{student:any}> = ({ student }) => {

    const remove=()=>{
        console.log("remove clicked");
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