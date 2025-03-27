import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyExperience from "./pages/Experience";
import NotFound from "./pages/NotFound";
import App from "./App";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/my-experience" element={<MyExperience />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;