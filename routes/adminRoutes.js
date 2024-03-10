import express from "express";
import { authenticate, isAdmin } from "../middleware/authentication";
import { Deletecourse, Deletelecture, Postcourse, Updatecourse, addLecture } from "../controllers/adminController.js";

const adminRouter = express.Router()
adminRouter.post("/course",authenticate,isAdmin,Postcourse)
adminRouter.put("/course/:courseId",authenticate,isAdmin,Updatecourse)
adminRouter.delete("/course/delete",authenticate,isAdmin,Deletecourse)
adminRouter.post("/course/lecture",authenticate,isAdmin,addLecture)
adminRouter.delete("/course/lecture/:lectureId",authenticate,isAdmin,Deletelecture)

export default adminRouter