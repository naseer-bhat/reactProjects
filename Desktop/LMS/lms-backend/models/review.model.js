import {model,Schema,Types} from "mongoose";

const ReviewSchema = new Schema(
  {
    course: { type:Types.ObjectId, ref: "Course", required: true },
    student: { type: Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String }
  },
  { timestamps: true }
);

export default model("Review", ReviewSchema);
