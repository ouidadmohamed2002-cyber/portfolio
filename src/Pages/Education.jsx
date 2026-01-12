import { motion } from "framer-motion";

const educationData = [
    {
      title: "Front End Developer - React JS Certified",
      Institution: "Gomycode",
      period: "2025 – 2026",
    },
    {
      title: "DUT",
      period: "2021 – 2023",
      field: "Techniques of Management ",
    },
  {
    title: "Baccalaureate",
    period: "2019 – 2020",
    field: "Economic Sciences",
  },
];

const Education = () => {
  return (
    <section className="pt-32 max-w-6xl mx-auto px-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Education
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          My academic background and learning journey.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative border-l border-gray-800 pl-8 space-y-12">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            {/* DOT */}
            <span className="absolute -left-[10px] top-1.5 w-4 h-4 rounded-full bg-indigo-500" />

            {/* CARD */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-indigo-500 transition">
              <h2 className="text-xl font-semibold mb-1">
                {edu.title}
              </h2>
              <p className="text-indigo-400 text-sm mb-2">
                {edu.Institution}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                {edu.period}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {edu.field}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
