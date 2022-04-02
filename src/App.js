import React from "react";

import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./oldpages/ProjectPage";
import HomePage from "./pages/HomePage";
import CherewetPage from "./pages/CherewetPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/projects" element={<ProjectPage />} /> */}
        <Route path="/chat" element={<CherewetPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
