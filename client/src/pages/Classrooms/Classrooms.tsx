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

class Classrooms extends Component<Props,State>{
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
                Here we will have class rooms
            </div>
        );
    }
}

export default Classrooms;