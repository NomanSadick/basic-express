import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.interface";

// User Schema
const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    versionKey: false, // Disable versioning field (__v)
  }
);

// Create and export User model
const UserModel = mongoose.model<IUser>("User", userSchema);
export default UserModel;
