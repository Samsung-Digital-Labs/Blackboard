import React, { Component } from 'react';
import { IonItem, IonLabel, IonInput, IonTextarea, IonGrid, IonCol, IonRow, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Props{
    history:any
};

interface State{
    classroomName:string,
    subject:string,
    description:string
}

class CreateClassroom extends Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={
            classroomName:'',
            subject:'',
            description:''
        }
    }

    create=()=>{
        const classroom={
            classroomName:this.state.classroomName,
            subject:this.state.subject,
            description:this.state.description,
            email:window.localStorage.getItem('user_email')
        }
        // console.log("classroom is",classroom);

        // api request
        axios.post("/classrooms/create",classroom)
        .then(response=>{
            this.props.history.push("/page/classrooms");
        })
        .catch(err=>{
            console.log(err);
            window.alert("error in creating classroom");
        })
    }

    render(){
        // console.log("classroomName is "+this.state.classroomName);
        // console.log("subject is "+this.state.subject);
        // console.log("description is "+this.state.description);

        return(
            <div className="ion-text-center">
                <h1>Create Classroom</h1>
                <br></br>
                <IonGrid>
                    <IonRow className="ion-justify-content-center">
                        <IonCol sizeXs="12" sizeMd="6">
                            <IonItem>
                                <IonLabel position="floating">Classroom Name</IonLabel>
                                <IonInput onIonChange={(e) => { this.setState({classroomName:e.detail.value!}) }}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <br></br>
                    <IonRow className="ion-justify-content-center">
                        <IonCol sizeXs="12" sizeMd="6">
                            <IonItem>
                                <IonLabel position="floating">Subject</IonLabel>
                                <IonInput onIonChange={(e) => { this.setState({subject:e.detail.value!}) }}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <br></br>
                    <IonRow className="ion-justify-content-center">
                        <IonCol sizeXs="12" sizeMd="6">
                            <IonItem>
                                <IonTextarea placeholder="Enter classroom Description" onIonChange={(e) => { this.setState({description:e.detail.value!}) }}></IonTextarea>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <br></br>
                    <IonRow className="ion-justify-content-center">
                        <IonCol sizeXs="12" sizeMd="3">
                            <IonButton size="large" expand="full" onClick={this.create}>
                                Create
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                
                <br></br>
                <p>Want to join an existing classroom? <Link to="/page/join" className="noUnderline">Join Here</Link></p>
            </div>
        );
    }
}

export default CreateClassroom;