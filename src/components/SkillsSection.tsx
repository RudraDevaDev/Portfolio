import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming & Query",
    skills: ["Python", "Basic Java", "MySQL"],
  },
  {
    title: "Data Visualization",
    skills: ["MS Excel", "Power BI"],
  },
  {
    title: "Tools",
    skills: ["Postman", "GitHub", "Figma"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks",
    skills: ["Flask", "Unity", "Blender"],
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Communication", "Team Collaboration"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm tracking-[0.2em] uppercase mb-2">
            {'// skills'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-12">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:border-glow transition-all duration-300"
            >
              <h3 className="font-display text-primary text-sm font-medium mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-body text-secondary-foreground bg-secondary rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
