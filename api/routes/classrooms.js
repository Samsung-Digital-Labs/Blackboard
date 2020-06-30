const express=require('express');
const classroomController = require('../controllers/classrooms')
const router=express.Router();

// Route to get all the classrooms of one user
// router.get('/all/:id', classroomController.getAllClassrooms);

// Route to create an classroom
router.post('/create', classroomController.createClassroom);

// Route to join a classroom 
router.post('/join', classroomController.joinClassroom);

// Route to post an announcement
router.put('/announcement', classroomController.postAnnouncement);

module.exports = router;