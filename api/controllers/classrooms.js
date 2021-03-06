const express = require("express");
const Classroom = require("../models/Classroom");
const user = require("../models/user");
const mongoose = require("mongoose");

exports.getAllCreatedClassrooms = (req, res, nxt) => {
  user
    .findById(req.params.userID)
    .exec()
    .then((teacher) => {
      Classroom.find({ teacher: req.params.userID })
        .populate("teacher", "firstName lastName email")
        .populate("enrolledStudents","firstName lastName email")
        .exec()
        .then((classroom) => {
          res.status(200).json(classroom);
        });
    })
    .catch((err) => {
      res.status(404).json({
        message: "teacher not found",
        error: err,
      });
    });
};

exports.getAllEnrolledClassrooms = (req, res, nxt) => {
  user
    .findById(req.params.userID)
    .select("joinedClassrooms")
    .populate("joinedClassrooms")
    .populate({
      path:"joinedClassrooms",
      populate:{
        path:"enrolledStudents",
        model:"User",
        select:"firstName lastName email"
      }
    })
    .populate({
      path:"joinedClassrooms",
      populate:{
        path:"teacher",
        model:"User",
        select:"firstName lastName email"
      }
    })
    .exec()
    .then((rooms) => {
      res.status(200).json(rooms);
    })
    .catch((err) => {
      res.status(404).json({
        message: "User not found",
        error: err,
      });
    });
};

exports.createClassroom = (req, res) => {
  const classroom = new Classroom({
    _id: mongoose.Types.ObjectId(),
    classroomName: req.body.classroomName,
    subject: req.body.subject,
    description: req.body.description,
    teacher: req.body.userID,
    phone: req.body.phone,
  });

  classroom
    .save()
    .then((result) => {
      res.status(201).json(result);
      // user
      //   .find({ email: req.body.email })
      //   .then((users) => {
      //     const currUser = users[0];
      //     currUser.createdClassrooms.push({
      //       classroomID: data._id,
      //       classroomName: data.classroomName,
      //       subject: data.subject,
      //       description: data.description,
      //     });

      //     currUser
      //       .save()
      //       .then(() => {
      //         return res.status(200).json({
      //           message: "classroom created",
      //         });
      //       })
      //       .catch((err) => {
      //         return res.status(500).json({
      //           error: err,
      //         });s
      //       });
      //   })
      //   .catch((err) => {
      //     return res.status(500).json({
      //       error: err,
      //     });
      //   });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
      });
    });
};

exports.joinClassroom = (req, res) => {
  // First find the classroom if it
  // exists along with its teachers ID
  Classroom.findById(req.body.classroomID)
    .populate("teacher", "_id")
    .exec()
    .then((classroom) => {
      // If teachers ID and student to join is same
      // then throw an error

      if (classroom.teacher._id == req.body.userID) {
        return res
          .status(409)
          .json({ error: "You cannot join your own classroom" });
      } else {
        // Add userID to classroom.enrolledStudents
        Classroom.updateOne(
          { _id: req.body.classroomID },
          { $addToSet: { enrolledStudents: req.body.userID } }
        )
          .exec()
          .then(() => {
            // Add classroom ID to user.joinedClassrooms
            user
              .updateOne(
                { _id: req.body.userID },
                { $addToSet: { joinedClassrooms: req.body.classroomID } }
              )
              .exec()
              .then(() => {
                return res.status(200).json({ message: "Classroom Joined" });
              })
              .catch((err) => {
                done;
                return res.status(500).json({ error: err });
              });
          })
          .catch((err) => {
            return res.status(500).json({ error: err });
          });
      }
    })
    .catch((err) => {
      return res.status(404).json({
        message: "Classroom Doesn't exist",
        error: err,
      });
    });
};

exports.postAnnouncement = (req, res) => {

  const announcement={
    announcement: req.body.announcement,
    postedBy: req.body.userID
  }

  Classroom.updateOne({ _id: req.body.classroomID }, { $push: { announcements: announcement } } )
  .then(data=>{
    res.status(200).json({
      message: "announcement posted"
    });
  })
  .catch(err=>{
    return res.status(500).json({
      error:err
    })
  })
};


exports.getAllAnnouncements = (req, res) => {
  const classroomID = req.params.classroomID;
  Classroom.findById( classroomID )
  .select("announcements")
  .populate({
    path:"announcements",
    populate:{
      path:"postedBy",
      select:"firstName lastName"
    }
  })
  .then(data=>{
    return res.status(200).json(data);
  })
  .catch(err=>{
    res.status(404).json({
      error:"Classroom not found"
    })
  })
}


exports.removeAnnouncement = (req, res) => {
  const {classroomID, announcementID} = req.params;
  Classroom.updateOne({ _id: classroomID }, { $pull : { announcements: { _id: announcementID } }})
  .then(data=>{
    return res.json({
      message:"Announcement removed"
    })
  })
  .catch(err=>{
    res.status(404).json({
      error:"Classroom not found"
    })
  })
}

exports.removeStudent = (req,res) => {
  const {classroomID, studentID} = req.params;
  Classroom.updateOne({ _id: classroomID }, { $pull : { enrolledStudents: studentID } } )
  .then(data=>{
    user.updateOne({ _id: studentID }, { $pull: { joinedClassrooms : classroomID } })
    .then(data=>{
      return res.status(200).json({
        message:"student removed from classroom"
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