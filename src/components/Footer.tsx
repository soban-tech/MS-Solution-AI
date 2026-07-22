import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

interface FooterProps {
  theme: 'dark' | 'light';
}

export default function Footer({ theme }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark border-t border-border-custom py-12 sm:py-16 relative transition-colors duration-300" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-border-custom">
          {/* Brand block (5 columns) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-blue-electric flex items-center justify-center font-display font-extrabold text-sm text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                MS
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-title-color tracking-wide transition-colors">
                  MS Solutions AI
                </span>
                <span className="font-mono text-[9px] tracking-widest text-slate-text uppercase">
                  AI Engineering
                </span>
              </div>
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed max-w-sm transition-colors">
              Architecting secure, deterministic conversational agents, high-speed custom web systems, 
              and cognitive automation pipelines that multiply corporate throughput. Founded by Muhammad Soban.
            </p>
            {/* Social handles */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-deep hover:bg-navy-light border border-border-custom flex items-center justify-center text-slate-text hover:text-title-color transition-all"
                aria-label="GitHub Account"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-deep hover:bg-navy-light border border-border-custom flex items-center justify-center text-slate-text hover:text-title-color transition-all"
                aria-label="LinkedIn Account"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-deep hover:bg-navy-light border border-border-custom flex items-center justify-center text-slate-text hover:text-title-color transition-all"
                aria-label="Twitter Account"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Sitemaps (3 columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-title-color uppercase tracking-wider transition-colors">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="font-sans text-xs sm:text-sm text-slate-text hover:text-blue-glow transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="font-sans text-xs sm:text-sm text-slate-text hover:text-blue-glow transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="font-sans text-xs sm:text-sm text-slate-text hover:text-blue-glow transition-colors">
                  Services Specs
                </a>
              </li>
              <li>
                <a href="#portfolio" className="font-sans text-xs sm:text-sm text-slate-text hover:text-blue-glow transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#testimonials" className="font-sans text-xs sm:text-sm text-slate-text hover:text-blue-glow transition-colors">
                  Endorsements
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities (4 columns) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm text-title-color uppercase tracking-wider transition-colors">
              AI Capabilities
            </h4>
            <ul className="space-y-2.5">
              <li>
                <span className="font-sans text-xs sm:text-sm text-slate-text block">
                  AI Chatbots & Semantic Agents
                </span>
              </li>
              <li>
                <span className="font-sans text-xs sm:text-sm text-slate-text block">
                  Cognitive Automation (OCR/LLMs)
                </span>
              </li>
              <li>
                <span className="font-sans text-xs sm:text-sm text-slate-text block">
                  React + Vite High-Speed Web Apps
                </span>
              </li>
              <li>
                <span className="font-sans text-xs sm:text-sm text-slate-text block">
                  Deterministic Prompt Guardrails
                </span>
              </li>
              <li>
                <span className="font-sans text-xs sm:text-sm text-slate-text block">
                  Cybernetic SVG & Tech Branding
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Sub-row: Copyright and Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 text-center sm:text-left text-xs text-slate-text font-mono">
          <div>
            <span>
              &copy; {new Date().getFullYear()} MS Solutions AI. Engineered with precision by{' '}
              <a
                href="#about"
                className="text-title-color hover:text-blue-glow font-bold transition-colors"
              >
                Muhammad Soban
              </a>
              .
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={handleScrollTop}
              className="inline-flex items-center space-x-1 hover:text-title-color transition-colors cursor-pointer group"
              id="scroll-to-top"
            >
              <span>Scroll to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

