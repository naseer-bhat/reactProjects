import React, { useState } from "react";
import axios from "../api.js";
// console.log();
const PromptForm = ({ setResult }) => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "/api/evaluate/prompt",
        { promptText: prompt },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResult(res.data);
      setPrompt("");
    } catch (err) {
      
      alert(err.response?.data?.message || "Failed to evaluate prompt");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="prompt-form">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        rows={5}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Evaluating..." : "Evaluate Prompt"}
      </button>
    </form>
  );
};

export default PromptForm;
