import React, { useState } from "react";
import AuthForm from "./components/AuthForm";
import PromptForm from "./components/PromptForm";
import ResultCard from "./components/ResultCard";
import PromptHistory from "./components/PromptHistory";
import Navbar from "./components/Navbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const [result, setResult] = useState(null);
  const [view, setView] = useState(
    localStorage.getItem("token") ? "submit" : "login"
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setResult(null);
    setView("login");
  };

  return (
    <div>
      <Navbar
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        setView={setView}
      />

      <div className="container">
        {!isAuthenticated ? (
          <AuthForm
            onAuthSuccess={() => {
              setIsAuthenticated(true);
              setView("submit");
            }}
          />
        ) : (
          <>
            {view === "submit" && (
              <>
                <PromptForm setResult={setResult} />
                {result && <ResultCard result={result} />}
              </>
            )}
            {view === "history" && <PromptHistory />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
