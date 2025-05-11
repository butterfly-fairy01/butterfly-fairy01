// client/src/App.jsx
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [techStack, setTechStack] = useState("");
  const [questions, setQuestions] = useState("");

  const handleGenerate = async () => {
    const res = await axios.post("http://localhost:5000/generate-questions", {
      techStack,
    });
    setQuestions(res.data.questions);
  };

  return (
    <div className="App">
      <h1>DevQuiz - AI Interview Prep</h1>
      <input
        type="text"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
        placeholder="Enter your tech stack..."
      />
      <button onClick={handleGenerate}>Generate Questions</button>
      <pre>{questions}</pre>
    </div>
  );
}

export default App;
