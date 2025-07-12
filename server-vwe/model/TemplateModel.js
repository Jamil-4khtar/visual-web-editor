import mongoose, { Schema } from "mongoose";

const templateSchema = new Schema({
  id: { type: String, required: true}, 
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Template = mongoose.model("Template", templateSchema)
export default Template
