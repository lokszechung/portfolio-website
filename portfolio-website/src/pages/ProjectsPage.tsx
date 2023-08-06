import { motion } from "framer-motion";
import "./ProjectsPage.scss";

export default function ProjectsPage() {
  return (
    <motion.div
      className="projects container text-center"
      // initial={{ scale: 0.05, translateY: "70vh" }}
      // animate={{ scale: 1, translateY: "0vh" }}
      // exit={{ scale: 0.05, translateY: "70vh" }}
      // transition={{ duration: 0.5 }}
      initial={{ translateY: "100vh" }}
      animate={{ translateY: "0vh" }}
      exit={{ scale: 0.5, translateY: "70vh" }}
      transition={{ duration: 0.5 }}
    >
      <h1>Projects</h1>
    </motion.div>
  )
}