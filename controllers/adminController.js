import Course from "../models/coursesModel.js";
import Lecture from "../models/lectureModel.js";


const Postcourse = async(req,res)=>{
    try {
        const { name, description, prerequisites } = req.body;
        const newCourse = new Course({
          name,
          description,
          prerequisites,
        });
    
        await newCourse.save();
    
        res.status(201).json({ message: 'Course created successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

const Updatecourse = async(req,res)=>{
    try {
        const { name, description, prerequisites } = req.body;
        const courseId = req.params.courseId;
    
        // Update the course with the given courseId
        await Course.findByIdAndUpdate(courseId, { name, description, prerequisites });
    
        res.json({ message: 'Course updated successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}


const Deletecourse = async(req,res)=>{
    try {
        const courseId = req.params.courseId;
    
        // Delete the course with the given courseId
        await Course.findByIdAndDelete(courseId);
    
        res.json({ message: 'Course deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

const addLecture  = async (req,res)=>{
    try {
        const { courseId, title, startTime, endTime, description, link } = req.body;
    
        const newLecture = new Lecture({
          courseId,
          title,
          startTime,
          endTime,
          description,
          link,
        });
    
        await newLecture.save();
    
        res.json({ message: 'Lecture created successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

const Deletelecture = async (req,res)=>{
    try {
        const lectureId = req.params.lectureId;
    
        // Delete the lecture with the given lectureId
        await Lecture.findByIdAndDelete(lectureId);
    
        res.json({ message: 'Lecture deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}
export {Postcourse,Updatecourse,Deletecourse,addLecture,Deletelecture}