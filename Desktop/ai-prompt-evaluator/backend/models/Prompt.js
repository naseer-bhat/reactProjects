import mongoose from "mongoose";

const PromptSchema = new mongoose.Schema(
  {
    promptText: { type: String, required: true }, // original user input
    analysis: { type: String, required: true }, // AI explanation
    suggestion: { type: String, required: true }, // corrected prompt
    score: { type: Number, required: true }, // evaluation score
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Prompt", PromptSchema);
