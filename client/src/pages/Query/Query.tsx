import React, { Component } from 'react';
import { IonItem, IonLabel, IonInput, IonGrid, IonCol, IonRow, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';

interface State{
    classID:string
};

interface Props{
    history:any
};

class Query extends Component<Props,State>{
    constructor(props:Props)
    {
        super(props);
        this.state={
            classID:''
        }
    }

    join=()=>{
        const object={
            email:window.localStorage.getItem('user_email'),
            classID:this.state.classID
        }
        // console.log("object is",object);

        // api request
        
        if(true){
            // no error in joining class
            // redirect user
            this.props.history.push("/page/classrooms");
        }
        else{
            // error in joining class
            window.alert("error joining class");
        }
    }


    render(){
        // console.log("classID is "+this.state.classID);
        return(
            <div className="ion-text-center">
                <h1>Join Class</h1>
                <br></br>
                <IonGrid>
                    <IonRow className="ion-justify-content-center">
                        <IonCol sizeXs="12" sizeMd="6">
                            <IonItem>
                                <IonLabel position="floating">Class ID</IonLabel>
                                <IonInput value={this.state.classID} onIonChange={(e) => {this.setState({classID:e.detail.value!})} }> </IonInput>
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
                <p>Want to create a new class? <Link to="/create" className="noUnderline">Create Here</Link></p>
            </div>
        );
    }
}

export default Query;