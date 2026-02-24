import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm tracking-[0.2em] uppercase mb-2">
            {'// experience'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-12">
            Work Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative pl-8 border-l-2 border-border"
        >
          <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
            <Briefcase size={10} className="text-primary-foreground" />
          </div>
          <div className="pb-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-display font-bold text-foreground">Front End Developer Intern</h3>
              <span className="font-display text-sm text-primary">May 2025</span>
            </div>
            <p className="text-muted-foreground font-body text-sm mb-1">Front End UI Developer (Onsite)</p>
            <p className="text-muted-foreground font-body text-xs mb-4">Tools: Figma, GitHub</p>
            <ul className="space-y-2 text-secondary-foreground font-body text-sm">
              <li className="flex gap-2">
                <span className="text-primary mt-1 shrink-0">▸</span>
                Designed and developed web layouts using HTML, CSS, and JavaScript, with Figma for UI/UX prototyping.
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1 shrink-0">▸</span>
                Collaborated with a Senior Frontend Developer to refine designs and improve user experience.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
