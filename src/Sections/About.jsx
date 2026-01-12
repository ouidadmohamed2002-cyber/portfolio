import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 flex items-center">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          About <span className="text-indigo-400">Me</span>
        </motion.h2>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-slate-400 text-lg leading-relaxed text-center"
        >
          <p>
            I’m a frontend developer focused on building clean, modern, and
            user-friendly web interfaces. I enjoy transforming ideas into
            responsive and accessible products.
          </p>

          <p>
            I mainly work with React and Tailwind CSS. I care about performance,
            clean code, and good design systems that scale.
          </p>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {[
            "React",
            "Tailwind CSS",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
          ].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
              className="px-5 py-2 rounded-full text-sm font-medium
                         bg-slate-900 border border-slate-800
                         text-slate-300 hover:text-white hover:border-indigo-500
                         transition"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
