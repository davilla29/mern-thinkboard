import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

// 1-Create a schema
// 2-model based off of that schema

const noteSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4, // UUID v4 as default _id
    },
    
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
