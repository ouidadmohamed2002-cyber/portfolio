import { motion } from "framer-motion";

const skills = [
  {
    title: "UI Development",
    desc: "Building clean, modern, and accessible user interfaces.",
  },
  {
    title: "Responsive Design",
    desc: "Creating layouts that work perfectly on all screen sizes.",
  },
  {
    title: "React Architecture",
    desc: "Structuring scalable React applications with reusable components.",
  },
  {
    title: "Performance",
    desc: "Optimizing rendering and improving application performance.",
  },
];

const Skills = () => {
  return (
    <section className="mt-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        What I <span className="text-indigo-400">Do</span>
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6
                       hover:border-indigo-500 transition"
          >
            <h4 className="text-xl font-semibold mb-2 text-slate-100">
              {skill.title}
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
