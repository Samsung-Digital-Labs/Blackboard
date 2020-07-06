import React, { useState, useEffect } from 'react';
import AnnouncementItem from './AnnouncementItem';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Announcements:React.FC<{ match:any }> = ({ match }) => {
    const [announcementList, setAnnouncementList] = useState([]);
    
    const classroomID=match.params.classroomID;
    const loadAllAnnouncements = () =>{
        axios.get(`/classrooms/getAllAnnouncements/${classroomID}`)
        .then((response:any)=>{
            setAnnouncementList(response.data.announcements);
        });
    }

    useEffect(()=>{
        loadAllAnnouncements();
    },[]);

    let reversedAnnouncementList = announcementList;
    if(announcementList && announcementList.slice){
        // announcementList.sort((a:any,b:any)=>{ 
        //     if(new Date(b.postedDate) >= new Date(a.postedDate)){
        //         return 1;
        //     }
        //     else{
        //         return -1;
        //     }
        // });
        reversedAnnouncementList = announcementList.slice().reverse();
    }
    console.log(reversedAnnouncementList);
    return(
        <div className="ion-text-center">
            <h1>Announcements</h1>
            <Link to="/page/classrooms" className="noUnderline">Go back to classrooms</Link>
            {
                (reversedAnnouncementList && reversedAnnouncementList.map && reversedAnnouncementList.length)?
                reversedAnnouncementList.map((a:any)=>{
                    return(
                        <AnnouncementItem announcement={a} key={a._id} classroomID={classroomID} loadAllAnnouncements={loadAllAnnouncements}></AnnouncementItem>
                    );
                }):<p>No Announcements</p>
            }
        </div>
    );
}

export default Announcements;