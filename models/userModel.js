import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Student'], default: 'Student' },
  });
  



  userSchema.methods.matchPassword = async function(enterpassword){
    return await bcrypt.compare(enterpassword,this.password)
  }
  const User = mongoose.model('User', userSchema);
  
  export default User