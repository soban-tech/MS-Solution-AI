import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-deep/85 backdrop-blur-md border-b border-border-custom py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
        id="app-navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <a href="#home" className="flex items-center space-x-3 group" id="logo-nav">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-electric to-cyan-glow p-0.5 shadow-[0_0_15px_rgba(37,99,235,0.25)] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-navy-deep rounded-[7px] flex items-center justify-center transition-colors">
                  <span className="font-display font-extrabold text-sm tracking-tighter text-title-color">
                    MS
                  </span>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-electric to-cyan-glow rounded-lg blur-sm opacity-30 group-hover:opacity-75 transition duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight text-title-color tracking-wide group-hover:text-cyan-glow transition-colors">
                  MS Solutions
                </span>
                <span className="font-mono text-[10px] tracking-widest text-slate-text uppercase">
                  AI Engineering
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-sans text-sm font-medium text-slate-text hover:text-title-color transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-glow hover:after:w-full after:transition-all after:duration-300"
                    id={`navlink-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-navy-card border border-border-custom hover:bg-navy-light/40 hover:text-title-color text-slate-text transition-all duration-300 cursor-pointer"
                aria-label="Toggle visual theme"
                id="theme-toggle-desktop"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-900" />
                )}
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-electric hover:bg-blue-glow text-white font-sans text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] group"
                id="nav-cta"
              >
                <span>Hire Us</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Menu Actions */}
            <div className="flex items-center space-x-2 md:hidden">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-navy-card border border-border-custom hover:bg-navy-light/40 text-slate-text transition-all cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-950" />
                )}
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-text hover:text-title-color hover:bg-navy-light/40 transition-colors focus:outline-none"
                aria-expanded="false"
                id="mobile-menu-toggle"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-navy-dark border-b border-border-custom"
              id="mobile-navigation-panel"
            >
              <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 rounded-md text-base font-medium text-slate-text hover:text-title-color hover:bg-navy-light/30 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 px-3">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center px-4 py-3 rounded-lg bg-blue-electric text-white font-semibold shadow-lg hover:bg-blue-glow transition-all"
                  >
                    <span>Hire Us</span>
                    <ArrowUpRight className="ml-1.5 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

