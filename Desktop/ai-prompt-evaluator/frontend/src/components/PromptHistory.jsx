// src/components/PromptHistory.jsx
import React, { useEffect, useState } from "react";
import axios from "../api";

const PromptHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("/api/evaluate/history", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setHistory(res.data);
      } catch (err) {
        console.error("Error fetching history:", err);
        alert("Failed to fetch history");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-container">
      <h2>🕓 Prompt History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : history.length === 0 ? (
        <p>No prompts submitted yet.</p>
      ) : (
        <ul>
          {history.map((item) => (
            <li key={item._id} className="history-card">
              <p>
                <strong>Prompt:</strong> {item.promptText}
              </p>
              <p>
                <strong>Score:</strong> {item.score}/10
              </p>
              <p>
                <strong>Analysis:</strong> {item.analysis}
              </p>
              <p>
                <strong>Improved Prompt:</strong> {item.suggestion}
              </p>
              <p style={{ fontSize: "0.85rem", color: "gray" }}>
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PromptHistory;
