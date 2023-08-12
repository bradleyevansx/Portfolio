import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import StudentApp from "./pages/studentApp/StudentApp";
import WebApi from "./pages/webApi/WebApi";
import RealEstateWebsite from "./pages/realEstateWebsite/realEstateWebsite";
function App() {
  return (
    <Router>
      <motion.div
        animate={{
          opacity: [0, 1],
          transition: { delay: 0.5, duration: 0.5 },
        }}
      >
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/projects/student-app" element={<StudentApp />} />
          <Route path="/projects/web-api" element={<WebApi />} />
          <Route
            path="/projects/realtor-website"
            element={<RealEstateWebsite />}
          />
        </Routes>
      </motion.div>
    </Router>
  );
}

export default App;
