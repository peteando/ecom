import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "jobs" }
);

export default mongoose.models.Job || mongoose.model("Job", JobSchema);

