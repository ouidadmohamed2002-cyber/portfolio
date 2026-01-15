// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="fixed top-0 w-full bg-gray-950/80 backdrop-blur border-b border-gray-800 z-50"
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 text-transparent bg-clip-text">
//           OUIDAD
//         </h1>

//         <ul className="flex gap-6 text-gray-300">
//           <NavLink to="/" className="hover:text-white">Home</NavLink>
//           <NavLink to="/projects" className="hover:text-white">Projects</NavLink>
//           <NavLink to="/contact" className="hover:text-white">Contact</NavLink>
//           <NavLink to="/education" className="hover:text-white">Education</NavLink>
//         </ul>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
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
