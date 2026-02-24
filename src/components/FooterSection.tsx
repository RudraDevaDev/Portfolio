import { Mail, Phone, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-display text-primary text-sm tracking-[0.2em] uppercase mb-4">
          {'// contact'}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-6">
          Let's Connect
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <a href="mailto:rudra2002g@gmail.com" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
            <Mail size={16} /> rudra2002g@gmail.com
          </a>
          <a href="tel:+919344299914" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
            <Phone size={16} /> +91-9344299914
          </a>
          <a href="https://linkedin.com/in/rudradevan-g" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
        <p className="text-xs text-muted-foreground font-body">
          © 2025 Rudradevan G. Built with passion.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
