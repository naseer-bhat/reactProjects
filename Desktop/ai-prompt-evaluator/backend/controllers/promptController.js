import Prompt from "../models/Prompt.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";
config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// console.log('Gemini Key:', process.env.GEMINI_API_KEY);

export const evaluatePrompt = async (req, res) => {
  const { promptText } = req.body;

  if (!promptText || promptText.trim() === "") {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const systemPrompt = `
You are an expert prompt engineer.
Evaluate the following prompt:
- Give a score out of 10
- Explain why
- Correct promptText 

Respond in this JSON format:
{
  "score": number,
  "analysis": string,
  "suggestion": string,
}

Prompt: ${promptText}
`;

  try {
    const result = await model.generateContent(systemPrompt);
    const text = result.response.text();

    const cleaned = text.replace(/```json|```/g, "").trim();

    try {
      const json = JSON.parse(cleaned);

      const saved = await Prompt.create({
        promptText,
        score: json.score,
        analysis: json.analysis,
        suggestion: json.suggestion,
        user: req.user.id,
      });

      res.json(saved);
    } catch (parseErr) {
      console.error("Parse error:", parseErr);
      res.status(500).json({
        error: "Failed to parse Gemini response",
        raw: text,
      });
    }
  } catch (err) {
    console.error("Gemini error:", err.message);
    res.status(500).json({
      error: "Gemini evaluation failed",
      details: err.message,
    });
  }
};

export const getPromptHistory = async (req, res) => {
  try {
const history = await Prompt.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch history" });
  }
};
