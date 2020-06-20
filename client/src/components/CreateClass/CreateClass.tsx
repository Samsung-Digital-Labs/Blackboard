import React, { Component } from 'react';
import { IonItem, IonLabel, IonInput, IonTextarea, IonGrid, IonCol, IonRow, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';

interface Props{
    history:any
};

interface State{
    className:string,
    subject:string,
    description:string
}

class CreateClass extends Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={
            className:'',
            subject:'',
            description:''
        }
    }

    create=()=>{
        const object={
            className:this.state.className,
            subject:this.state.subject,
            description:this.state.description,
            email:window.localStorage.getItem('user_email')
        }
        // console.log("object is",object);

        // api request

        if(true){
            // no error in creating class
            // redirect user
            this.props.history.push("/page/classrooms");
        }
        else{
            // error in creating class
            window.alert("error in creating class");
        }
    }

    render(){
        // console.log("className is "+this.state.className);
        // console.log("subject is "+this.state.subject);
        // console.log("description is "+this.state.description);

        return(
            <div className="ion-text-center">
                <h1>Create Class</h1>
                <br></br>
                <IonGrid>
                    <IonRow className="ion-justify-content-center">
                        <IonCol sizeXs="12" sizeMd="6">
                            <IonItem>
                                <IonLabel position="floating">Class Name</IonLabel>
                                <IonInput onIonChange={(e) => { this.setState({className:e.detail.value!}) }}></IonInput>
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
                                <IonTextarea placeholder="Enter class Description" onIonChange={(e) => { this.setState({description:e.detail.value!}) }}></IonTextarea>
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
                <p>Want to join an existing class? <Link to="/join" className="noUnderline">Join Here</Link></p>
            </div>
        );
    }
}

export default CreateClass;