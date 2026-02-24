import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  { degree: "Masters of Computer Application (MCA)", school: "SRM Institute of Science and Technology, Chennai", grade: "CGPA: 9.46 / 10", year: "Expected 2026" },
  { degree: "Bachelors of Computer Application (BCA)", school: "Vellore Institute of Technology, Vellore", grade: "CGPA: 8.02 / 10", year: "2024" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm tracking-[0.2em] uppercase mb-2">
            {'// education'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-12">
            Education
          </h2>
        </motion.div>

        <div className="space-y-6 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground font-body">{edu.school}</p>
                <div className="flex gap-4 mt-2 text-xs font-display">
                  <span className="text-primary">{edu.grade}</span>
                  <span className="text-muted-foreground">{edu.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm tracking-[0.2em] uppercase mb-6">
            {'// certifications'}
          </p>
          <div className="flex gap-4 p-6 rounded-xl bg-card border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Award size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground text-sm">Postman API Fundamentals Student Expert</h3>
              <p className="text-xs text-muted-foreground font-body mt-1">
                Gained hands-on experience in API design, documentation, testing, and automation using Postman.
              </p>
              <span className="text-xs font-display text-primary mt-2 inline-block">2025</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
