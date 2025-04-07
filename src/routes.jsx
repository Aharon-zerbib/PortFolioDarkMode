import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyExperience from "./pages/Experience";
import NotFound from "./pages/NotFound";
import App from "./App";
import { MyBlog } from "./pages/MyBlog";
import ScrollToTop from "./components/ScrollToTop";
import { Kasa } from "./pages/Kasa";
import Sofi from "./pages/Sofi";
import UnrealExperience from "./pages/UnrealExperience";
;

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/my-experience" element={<MyExperience />} />
        <Route path="/UnrealExperience" element={<UnrealExperience />} />
        <Route path="/my-blog" element={<MyBlog />} />
        <Route path="/kasa" element={<Kasa />} />
        <Route path="/sofi" element={<Sofi />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;