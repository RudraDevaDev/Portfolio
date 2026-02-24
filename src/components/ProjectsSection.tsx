import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Phishing Website Detection",
    tech: ["Python", "Flask", "ML"],
    period: "Feb 2024 – May 2024",
    points: [
      "Built a hybrid phishing detection system using Random Forest and XGBoost with vote-based classification.",
      "Achieved 85%+ accuracy on a Kaggle dataset.",
      "Created a Flask web app for users to input URLs and get real-time phishing analysis.",
    ],
  },
  {
    title: "Cloud Based Bus Reservation",
    tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    period: "November 2023",
    points: [
      "Developed a full-stack bus reservation system with online ticket booking.",
      "Implemented admin portal for booking management and user issue resolution.",
      "Deployed to cloud with custom DNS configuration.",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm tracking-[0.2em] uppercase mb-2">
            {'// projects'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-12">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:border-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0" />
              </div>
              <p className="text-xs font-display text-muted-foreground mb-4">{project.period}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs font-display text-primary bg-primary/10 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 text-sm text-secondary-foreground font-body">
                {project.points.map((point, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
