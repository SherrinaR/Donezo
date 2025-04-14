import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from "./pages/Chatbot";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f4f4f4" }}>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<Chatbot />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
