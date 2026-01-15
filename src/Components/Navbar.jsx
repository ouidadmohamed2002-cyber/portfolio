import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-rose-50/80 backdrop-blur border-b border-pink-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-pink-500">
          OUIDAD
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-gray-600">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/Education">Education</NavLink>
        </ul>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-rose-50 border-t border-pink-200 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 p-6 text-gray-700">
              <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/projects">Projects</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact">Contact</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/Education">Education</NavLink>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
