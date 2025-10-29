import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyExperience from "./pages/Experience";
import Autodidact from "./pages/Autodidact";
import NotFound from "./pages/NotFound";
import App from "./App";
import { MyBlog } from "./pages/MyBlogAi";
import MyBlog42 from "./pages/MyBlog42";
import ScrollToTop from "./components/ScrollToTop";
import { Kasa } from "./pages/Kasa";
import { ClienZen } from "./pages/ClienZen";
import ClientZenExpreiance from "./pages/ClientZenExpreiance";
//import Sofi from "./pages/Sofi";
//import UnrealExperience from "./pages/UnrealExperience";
const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/my-experience" element={<MyExperience />} />
        <Route path="/autodidact" element={<Autodidact />} />
        {/* <Route path="/UnrealExperience" element={<UnrealExperience />} /> */}
        <Route path="/my-blog" element={<MyBlog />} />
        <Route path="/my-blog-42" element={<MyBlog42 />} />
        <Route path="/blog42" element={<MyBlog42 />} />
        <Route path="/kasa" element={<Kasa />} />
        <Route path="/clienzen" element={<ClienZen />} />
        <Route
          path="/client-zen-experience"
          element={<ClientZenExpreiance />}
        />
        {/* <Route path="/sofi" element={<Sofi />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
