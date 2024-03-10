import express from "express"
import { login, signup } from "../controllers/userController.js"



const UserRouter = express.Router()


UserRouter.post("/signup",signup)
UserRouter.post("/login",login)



export default UserRouter