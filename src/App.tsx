import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        animate={{ opacity: [0, 1], transition: { delay: 0.5, duration: 0.5 } }}
      >
        <NavBar></NavBar>
        <Home></Home>
      </motion.div>
    </>
  );
}

export default App;
