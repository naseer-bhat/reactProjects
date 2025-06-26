import { Schema, model, Types } from "mongoose";

const progressSchema = new Schema(
  {
    student: { type: Types.ObjectId, ref: "User", required: true },
    course: { type: Types.ObjectId, ref: "Course", required: true },
    completedLessons: [{ type: Types.ObjectId, ref: "Lesson" }]
  },
  { timestamps: true }
);

export default model("Progress", progressSchema);
