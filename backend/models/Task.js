import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: {
  type: String,
  required: true,
},
  deadline: Date,
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
  },
  estimatedHours: {
  type: Number,
  default: 0,
},

estimatedMinutes: {
  type: Number,
  default: 30,
},
category: {
  type: String,
  default: "Personal",
},
  completed: {
    type: Boolean,
    default: false,
  },
  user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
},
});

export default mongoose.model("Task", taskSchema);