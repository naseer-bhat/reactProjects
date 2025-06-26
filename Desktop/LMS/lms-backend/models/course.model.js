import { model, Schema, Types } from "mongoose";

const CourseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    price: { type: Number, default: 0 },
    image: { type: String },
    instructor: { type: Types.ObjectId, ref: "User", required: true },
    published: { type: Boolean, default: false },
    approvedByAdmin: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    totalRatings: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default model("Course", CourseSchema);
