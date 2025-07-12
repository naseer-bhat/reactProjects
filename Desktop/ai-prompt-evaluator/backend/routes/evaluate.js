// import express from "express";
// import dotenv from "dotenv";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// dotenv.config();
// const router = express.Router();

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// router.post("/", async (req, res) => {
//   const { prompt } = req.body;

//   if (!prompt || prompt.trim() === "") {
//     return res.status(400).json({ error: "Prompt is required" });
//   }

//   const systemPrompt = `
// You are an expert prompt engineer.
// Evaluate the following prompt:
// - Give a score out of 10
// - Explain why
// - Suggest how to improve it

// Respond in this JSON format:
// {
//   "score": number,
//   "analysis": string,
//   "suggestion": string
// }
// `;

//   try {
//     const input = `${systemPrompt}\n\nPrompt: ${prompt}`;
//     const result = await model.generateContent(input);
//     const text = result.response.text();

//     const cleaned = text
//       .replace(/```json|```/g, "") // removes ```json and ```
//       .trim();

//     try {
//       const json = JSON.parse(cleaned);
//       res.json(json);
//     } catch {
//       res
//         .status(500)
//         .json({ error: "Failed to parse Gemini response", raw: text });
//     }
//   } catch (err) {
//     console.error("Gemini error:", err.message);
//     console.error("Full error:", err);
//     res
//       .status(500)
//       .json({ error: "Gemini evaluation failed", details: err.message });
//   }
// });

// export default router;
