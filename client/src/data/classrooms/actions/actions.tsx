import * as actionTypes from './actionTypes';
import axios from 'axios';

export function loadMyClassrooms(userID:string){
    const myClassrooms = axios(`/classrooms/created/${userID}`).then(response=>{
        return response.data;
    })
    return{
        type: actionTypes.LOAD_MY_CLASSROOMS,
        payload: myClassrooms
    }
}

export function loadEnrolledClassrooms(userID:string){
    const enrolledClassrooms = axios(`/classrooms/enrolled/${userID}`).then(response=>{
        return response.data.joinedClassrooms;
    })
    return{
        type: actionTypes.LOAD_ENROLLED_CLASSROOMS,
        payload: enrolledClassrooms
    }
}