import { User } from "../models/User.js";


export const registerUser = async (req, res) => {
    const { name, mobile, email, password, role } = req.body;
    const user = new User({ name, mobile, email, password, role });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  };

  export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
  
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  
    res.json({ message: "Login successful", user });
  };