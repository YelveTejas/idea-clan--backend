import  express, { json }  from "express";
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import cors from "cors";
import UserRouter from "./routes/userRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
dotenv.config()


const app = express()
app.use(express.json())
app.use(cors())

app.use("/user",UserRouter)
app.use("/admin",adminRouter)
const port = process.env.PORT || 5000
connectDb()





const server = app.listen(port,()=>{
    console.log('Connected Port')
})