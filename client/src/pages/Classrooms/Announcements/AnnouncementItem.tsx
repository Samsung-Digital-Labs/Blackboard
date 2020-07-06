import React, { Fragment, useState } from 'react';
import { IonChip,  IonCard, IonCardContent } from '@ionic/react';
import axios from 'axios';

const AnnouncementItem:React.FC<{ announcement:any, classroomID: string, loadAllAnnouncements: any }> = ({ announcement, classroomID, loadAllAnnouncements }) => {

    const remove = () =>{
        const answer=window.confirm('are you sure you want to remove this announcement?');
        // console.log(answer);
        if(answer){
            const announcementID = announcement._id;
            axios.delete(`/classrooms/removeAnnouncement/${classroomID}/${announcementID}`)
            .then(()=>{
                window.alert("announcement deleted");
                loadAllAnnouncements();
            })
            .catch((err)=>{
                window.alert("error in deleting announcement");
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
                    <p className="ion-text-justify">{
                        announcement.announcement.split('\n').map((text:any, i:number) => (
                            <React.Fragment key={i}>
                                {text}
                                <br />
                            </React.Fragment>
                        ))
                    }</p>
                    <br></br>
                    <p className="ion-text-right">{announcement.postedBy.firstName+" "+announcement.postedBy.lastName}</p>
                    <p className="ion-text-right">{new Date(announcement.postedDate).toLocaleString()}</p>
                    <br></br>
                    <IonChip color="danger" onClick={remove}>Remove</IonChip>
                </IonCardContent>
            </IonCard>
        </Fragment>
    );
}

export default AnnouncementItem;