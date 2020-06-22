const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: { type: String, required: true },
  createdClassrooms: [
    { classroomID: mongoose.Schema.Types.ObjectId, classroomName: String, subject: String, description: String}
  ],
  joinedClassrooms: [
    { classroomID: mongoose.Schema.Types.ObjectId, classroomName: String, subject: String, description: String}
  ]
});

module.exports = mongoose.model("User", userSchema);
