const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const classroomSchema = new Schema({
  className: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  owner: {
    type: String,
    required: true,
  },
  enrolledStudents: [],
});

module.exports = mongoose.model("Classroom", classroomSchema);
