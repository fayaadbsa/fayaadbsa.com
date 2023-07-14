import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { greet } from "@/utils/greet";
import "@/styles/global.css";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./AppRoutes";

greet();

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
};

export default App;
