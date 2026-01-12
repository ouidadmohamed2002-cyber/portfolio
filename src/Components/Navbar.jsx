import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-gray-950/80 backdrop-blur border-b border-gray-800 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 text-transparent bg-clip-text">
          OUIDAD
        </h1>

        <ul className="flex gap-6 text-gray-300">
          <NavLink to="/" className="hover:text-white">Home</NavLink>
          <NavLink to="/projects" className="hover:text-white">Projects</NavLink>
          <NavLink to="/contact" className="hover:text-white">Contact</NavLink>
          <NavLink to="/education" className="hover:text-white">Education</NavLink>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
