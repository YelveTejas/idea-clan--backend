import  express, { json }  from "express";
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import cors from "cors";
import UserRouter from "./routes/userRoutes.js";
dotenv.config()


const app = express()
app.use(express.json())
app.use(cors())

app.use("/user",UserRouter)
const port = process.env.PORT || 5000
connectDb()
const server = app.listen(port,()=>{
    console.log('Connected Port')
})