import {model , Schema,Types} from "mongoose";

const LessonSchema = new Schema(
  {
    title: { type: String, required: true },
    contentType: { type: String, enum: ["text", "video", "pdf"], required: true },
    contentURL: { type: String, required: true },
    duration: { type: Number },
    course: { type:Types.ObjectId, ref: "Course", required: true },
    order: { type: Number, required: true } 
  },
  { timestamps: true }
);

export default model("Lesson", LessonSchema);
