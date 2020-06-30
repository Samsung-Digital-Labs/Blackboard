import * as actionTypes from '../actions/actionTypes';

const classroomReducer=(state={
    userName: "",
    darkMode: false,
    isUserLoggedIn: false,
},action:any)=>{

    switch(action.type){
        case actionTypes.LOAD_MY_CLASSROOMS:
            return{
                ...state,
                myClassrooms:action.payload
            }
        case actionTypes.LOAD_ENROLLED_CLASSROOMS:
            return{
                ...state,
                enrolledClassrooms:action.payload
            }
        default: return state;
    }
}

export default classroomReducer;