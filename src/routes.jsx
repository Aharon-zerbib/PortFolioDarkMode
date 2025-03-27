import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyExperience from "./pages/Experience";
import NotFound from "./pages/NotFound";
import App from "./App";
import { MyBlog } from "./pages/MyBlog";
import ScrollToTop from "./components/ScrollToTop";

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/my-experience" element={<MyExperience />} />
        <Route path="/my-blog" element={<MyBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;