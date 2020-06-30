const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const classroomSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  phone: { type: String },
  enrolledStudents: [],
  queries: [
    {
      postedBy: { type: String, required: true },
      question: { type: String, required: true },
      postedDate: { type: Date, default: Date.now },
      answeredBy: { type: String },
      answer: { type: String },
      answeredDate: { type: Date },
    },
  ],
  announcements: [
    {
      announcement: { type: String, required: true },
      postedBy: { type: String, required: true },
      postedDate: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Classroom", classroomSchema);
