import { generateToken } from "../config/generateToken.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const ExistingUser = await User.findOne({ email });
    if (ExistingUser) {
      return res.status(400).json({ message: "User Already Exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        token: generateToken(user.password),
      });
    } else {
      return res.status(400).json({ message: "Invalid Email Or Password" });
    }
  
};
export { signup, login };
