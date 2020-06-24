const express=require('express');
const Classroom=require('../models/Classroom');

const router=express.Router();

router.post('/post',(req,res)=>{
    Classroom.find({_id: req.body.classroomID})
    .then(data=>{
        const currClassroom=data[0];
        
        const query={
            postedBy:req.body.firstName+" "+req.body.lastName,
            question:req.body.question
        }

        currClassroom.queries.push(query);

        currClassroom.save()
        .then(()=>{
            res.status(200).json({
                message: "query posted"
            })
        }).catch(err=>{
            res.status(500).json({
                error:err
            })
        })
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})


router.put('/answer',(req,res)=>{
    Classroom.find({_id: req.body.classroomID})
    .then(data=>{
        const currClassroom = data[0];
        const query=currClassroom.queries.id(req.body.queryID);
        query.answer=req.body.answer;
        query.answeredDate=Date.now();
        query.answeredBy=req.body.firstName+" "+req.body.lastName;

        // console.log("answered date is "+query.answeredDate.toLocaleString());
        // console.log("posted date is "+query.postedDate.toLocaleString());

        currClassroom.save()
        .then(()=>{
            res.status(200).json({
                message: "query answered"
            })
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})



module.exports = router;
