import User from "./user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/jwt";

export const registerUser = async (username: string, email: string, password: string) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const user = new User({ username, email, password });
  await user.save();

  const payload = { userId: user._id.toString() };


  const token = generateToken(payload);
  return { user, token };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const payload = { userId: user._id.toString() };


  const token = generateToken(payload);
  return { user, token };
};
