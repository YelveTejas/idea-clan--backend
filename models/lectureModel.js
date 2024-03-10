// models/Lecture.js

const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  description: { type: String },
  link: { type: String }, // Link to join the live session (e.g., Zoom or Google Meet)
});

const Lecture = mongoose.model('Lecture', lectureSchema);

export default Lecture;
