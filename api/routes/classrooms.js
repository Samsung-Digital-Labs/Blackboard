const express=require('express');
const classroomController = require('../controllers/classrooms')
const router=express.Router();

// Route to get all the classrooms of one user
router.get('/created/:userID', classroomController.getAllCreatedClassrooms);

// Route to get all the classrooms of one user
router.get('/enrolled/:userID', classroomController.getAllEnrolledClassrooms);

// Route to create an classroom
router.post('/create', classroomController.createClassroom);

// Route to join a classroom 
router.put('/join', classroomController.joinClassroom);

// Route to post an announcement
router.put('/announcement', classroomController.postAnnouncement);

// Route to get all announcements of a classroom
router.get('/getAllAnnouncements/:classroomID', classroomController.getAllAnnouncements);

// Route to remove announcement
router.delete('/removeAnnouncement/:classroomID/:announcementID', classroomController.removeAnnouncement);

// Route to remove a student from classroom
router.delete('/removeStudent/:classroomID/:studentID', classroomController.removeStudent);

module.exports = router;