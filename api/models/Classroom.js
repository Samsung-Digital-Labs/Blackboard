const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const classroomSchema=new Schema({
    classroomName:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    description:{
        type:String,        
    },
    owner:{
        type:String,
        required:true
    },
    enrolledStudents:[],
    queries:[
        {
            postedBy: { type: String, required: true },
            question: { type: String, required: true },
            postedDate: { type: Date, default: Date.now },
            answeredBy: { type: String },
            answer: { type: String },
            answeredDate: { type: Date }
        }
    ]
});

module.exports = mongoose.model("Classroom", classroomSchema);
