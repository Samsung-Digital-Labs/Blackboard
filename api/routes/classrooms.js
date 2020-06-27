const express=require('express');
const Classroom = require('../models/Classroom');
const user = require('../models/user');
const router=express.Router();


router.post('/create',(req,res)=>{
    const classroom=new Classroom({
        classroomName:req.body.classroomName,
        subject:req.body.subject,
        description:req.body.description,
        owner:req.body.email
    });

    classroom.save()
    .then(data=>{
        user.find({email:req.body.email})
        .then(users=>{
            const currUser=users[0];
            currUser.createdClassrooms.push({
                classroomID:data._id,
                classroomName: data.classroomName,
                subject: data.subject,
                description: data.description
            });

            currUser.save()
            .then(()=>{
                return res.status(200).json({
                    message:"classroom created"
                })
            })
            .catch(err=>{
                return res.status(500).json({
                    error:err
                })
            });
        })
        .catch(err=>{
            return res.status(500).json({
                error:err
            })
        });
    })
    .catch(err=>{
        return res.status(500).json({
            error:err
        })
    });
})


router.post('/join',(req,res)=>{
    
    user.find({email:req.body.email})
    .then(users=>{
        Classroom.find({_id:req.body.classroomID})
        .then(data=>{
            // console.log(data);
            if(data.length === 0){
                return res.status(404).json({
                    error:"classroom does not exist"
                });
            }
            else{
                const currUser = users[0];
                for(let i=0;i<currUser.joinedClassrooms.length;i++){
                    const joinedClassroom = currUser.joinedClassrooms[i];
                    if(joinedClassroom.classroomID == req.body.classroomID)
                    {
                        return res.status(409).json({
                            error:"already joined"
                        })
                    }
                }

                for(let i=0;i<currUser.createdClassrooms.length;i++){
                    const createdClassroom = currUser.createdClassrooms[i];
                    if(createdClassroom.classroomID == req.body.classroomID)
                    {
                        return res.status(409).json({
                            error:"already joined"
                        })
                    }
                }
                currUser.joinedClassrooms.push({
                    classroomID: data[0]._id,
                    classroomName: data[0].classroomName,
                    subject: data[0].subject,
                    description: data[0].description
                });
                
                currUser.save()
                .then(()=>{
                    const currClassroom=data[0];
                    currClassroom.enrolledStudents.push(currUser.email)
                    
                    currClassroom.save()
                    .then(()=>{
                        return res.status(200).json({
                            message:"classroom joined"
                        })
                    })
                    .catch(err=>{
                        return res.status(500).json({
                            error:err
                        })
                    })
                })
                .catch(err=>{
                    return res.status(500).json({
                        error:err
                    })
                })
            }
        })
        .catch(err=>{
            return res.status(500).json({
                error:err
            })
        })
    }).catch(err=>{
        return res.status(500).json({
            error:err
        })
    })
});


module.exports = router;