import React, { Component } from 'react';
import { IonItem, IonLabel, IonInput, IonGrid, IonCol, IonRow, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface State{
    classroomID:string
};

interface Props{
    history:any
};

class JoinClassroom extends Component<Props,State>{
    constructor(props:Props)
    {
        super(props);
        this.state={
            classroomID:''
        }
    }

    join=()=>{
        const object={
            email:window.localStorage.getItem('user_email'),
            classroomID:this.state.classroomID
        }
        // console.log("object is",object);

        // api request
        axios.post("/classrooms/join",object)
        .then(response=>{
            this.props.history.push("/page/classrooms");
        })
        .catch(err=>{
            console.log(err);
            window.alert("error in joining classroom");
        })
    }


    render(){
        // console.log("classroomID is "+this.state.classroomID);
        return(
            <div className="ion-text-center">
                <h1>Join Classroom</h1>
                <br></br>
                <IonGrid>
                    <IonRow className="ion-justify-content-center">
                        <IonCol sizeXs="12" sizeMd="6">
                            <IonItem>
                                <IonLabel position="floating">Classroom ID</IonLabel>
                                <IonInput value={this.state.classroomID} onIonChange={(e) => {this.setState({classroomID:e.detail.value!})} }> </IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <br></br>
                    <IonRow className="ion-justify-content-center">
                        <IonCol sizeXs="12" sizeMd="3">
                            <IonButton size="large" expand="full" onClick={this.join}>
                                Join
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <br></br>
                <p>Want to create a new classroom? <Link to="/page/create" className="noUnderline">Create Here</Link></p>
            </div>
        );
    }
}

export default JoinClassroom;