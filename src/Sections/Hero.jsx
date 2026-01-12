import { motion } from "framer-motion";
// import me from "../assets/me.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500 blur-3xl opacity-30 rounded-full"></div>
      <div className="absolute top-40 -right-40 w-96 h-96 bg-pink-500 blur-3xl opacity-30 rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Frontend Developer
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            React 
          </span>
        </h1>

        <p className="text-pink-300 max-w-xl mx-auto">
          I build responsive, user-focused interfaces with clean and modern UI.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
