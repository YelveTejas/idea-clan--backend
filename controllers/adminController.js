import Course from "../models/coursesModel.js";
import Lecture from "../models/lectureModel.js";

const courseContent = [
  {
    title: 'Introduction to Programming',
    lecturer: 'John Doe',
    date: '2024-03-12',
    date: '1/03/2023',
  },
  {
    title: 'Web Development Basics',
    lecturer: 'Jane Smith',
    date: '2024-03-20',
    date: '2/03/2023',
  },
  {
    title: 'Data Structures and Algorithms',
    lecturer: 'Robert Johnson',
    date: '2024-04-05',
    date: '3/03/2023',
  },
  {
    title: 'Machine Learning Fundamentals',
    lecturer: 'Emily White',
    date: '2024-04-15',
    date: '4/03/2023',
  },
  {
    title: 'Mobile App Development',
    lecturer: 'Chris Brown',
    date: '2024-05-01',
    date: '5/03/2023',
  },
  {
    title: 'Network Security',
    lecturer: 'Alex Turner',
    date: '2024-05-10',
    date: '6/03/2023',
  },
  {
    title: 'Database Design and Management',
    lecturer: 'Samantha Green',
    date: '2024-05-25',
    date: '7/03/2023',
  },
  {
    title: 'Digital Marketing Strategies',
    lecturer: 'Daniel Miller',
    date: '2024-06-05',
    date: '8/03/2023',
  },
  {
    title: 'Graphic Design Principles',
    lecturer: 'Olivia Martinez',
    date: '2024-06-15',
    date: '9/03/2023',
  },
  {
    title: 'Artificial Intelligence Applications',
    lecturer: 'Michael Turner',
    date: '10/06/2023',
    
  }
  // Add more courses as needed
];
const Postcourse = async(req,res)=>{
    try {
        const { name, description, duration } = req.body;
        const newCourse = new Course({
          name,
          description,
          duration,
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

const Allcourses =async(req,res)=>{
  try {
    // Fetch all courses from the database
    const courses = await Course.find({}, '-__v'); // Exclude the '__v' field from the response

    res.json({ courses });
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

const AllLectures = async(req,res)=>{
try{
  res.send(courseContent)
}catch(error){

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
export {Postcourse,Updatecourse,Deletecourse,addLecture,Deletelecture,Allcourses,AllLectures}