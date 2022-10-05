import mongoose from "mongoose";

const tutorialsSchema = new mongoose.Schema({
  title: String,
  descriptions: String,
  published: Boolean,
});

export default tutorialsSchema;