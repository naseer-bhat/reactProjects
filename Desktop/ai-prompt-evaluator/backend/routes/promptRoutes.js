import express from "express";
import auth from "../middleware/auth.js";
import {
  evaluatePrompt,
  getPromptHistory,
} from "../controllers/promptController.js";

const router = express.Router();

router.post("/prompt", auth, evaluatePrompt);
router.get("/history", auth, getPromptHistory);

export default router;
