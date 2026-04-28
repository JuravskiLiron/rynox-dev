import { motion } from "framer-motion";

const projects = [
  {
    title: "Urban Wear",
    category: "חנות אונליין",
    result1: "↑ 42% conversion",
    result2: "↑ 2.1x sales",
    image: "/p1.jpg",
  },
  {
    title: "Derma Clinic",
    category: "אתר תדמית",
    result1: "↑ 58% bookings",
    result2: "↓ 34% bounce",
    image: "/p2.jpg",
  },
  {
    title: "FlowCRM",
    category: "SaaS Landing",
    result1: "↑ 3.4x signup",
    result2: "↓ 27% CPL",
    image: "/p3.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-black">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-16 text-center text-white"
      >
        דוגמאות עבודות
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/80 transition duration-500" />

            <div className="absolute bottom-0 p-6">
              <p className="text-sm text-purple-400 mb-1">
                {project.category}
              </p>

              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <div className="flex gap-4 text-sm text-green-400 font-semibold">
                <span>{project.result1}</span>
                <span>{project.result2}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}