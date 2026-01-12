import { motion } from "framer-motion";

const projects = [
  {
    title: "Calculator App",
    description:
      "A clean and responsive calculator built with React, focusing on logic, UI clarity, and usability.",
    tech: "React ",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern developer portfolio showcasing projects, skills, and smooth animations.",
    tech: "React · Tailwind · Framer Motion",
  },
  {
    title: "Website Project",
    description:
      "A responsive website designed with a clean layout and attention to user experience.",
    tech: "HTML · CSS · JavaScript . React",
  },
];

const Projects = () => {
  return (
    <section className="pt-32 max-w-7xl mx-auto px-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          MY <span className="text-orange-400">PROJECTS</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          A selection of projects that highlight my skills in frontend
          development and modern UI design.
        </p>
      </motion.div>

      {/* PROJECTS GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative bg-slate-900 border border-slate-800
                       rounded-2xl p-6 hover:border-pink-500 transition"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 
                            opacity-0 group-hover:opacity-100 blur-xl transition" />

            <div className="relative z-10">
              <h2 className="text-xl font-semibold mb-3">
                {project.title}
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <span className="text-xs text-indigo-400 font-medium">
                {project.tech}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
