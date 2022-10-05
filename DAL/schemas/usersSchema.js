import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: Number,
  createdAt: Date,
  phone: String,
  avatar: String,
  fullname: String,
  username: String,
  password: String,
});


export default userSchema;