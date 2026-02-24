import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-primary text-sm tracking-[0.3em] uppercase mb-4">
            {'>'} Hello
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-display text-foreground mb-4">
            Rudradevan <span className="text-primary text-glow">G</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-body mb-8">
            Software Developer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-secondary-foreground font-body max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Final year MCA student proficient in programming, equipped for software development roles with experience in frontend development and interactive applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="mailto:rudra2002g@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display text-sm font-medium rounded-lg hover:shadow-[var(--glow-primary-strong)] transition-shadow duration-300"
          >
            <Mail size={16} /> Get in Touch
          </a>
          <a
            href="/RudraFresherBasic.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-display text-sm font-medium rounded-lg hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center justify-center gap-6 text-muted-foreground"
        >
          <a href="tel:+919344299914" className="hover:text-primary transition-colors"><Phone size={18} /></a>
          <a href="mailto:rudra2002g@gmail.com" className="hover:text-primary transition-colors"><Mail size={18} /></a>
          <a href="https://linkedin.com/in/rudradevan-g" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
