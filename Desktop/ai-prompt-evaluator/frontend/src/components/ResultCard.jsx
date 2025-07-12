import React from 'react';

const ResultCard = ({ result }) => {
  return (
    <div className="result-card">
      <h3>Score: {result.score}/10</h3>
      <p><strong>Your Prompt:</strong> {result.promptText}</p>
      <p><strong>Analysis:</strong> {result.analysis}</p>
      <p><strong>Improved Prompt:</strong> {result.suggestion}</p>
    </div>
  );
};


export default ResultCard;
