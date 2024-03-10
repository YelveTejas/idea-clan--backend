// models/Course.js

import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  prerequisites: [{ type: String }],
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
