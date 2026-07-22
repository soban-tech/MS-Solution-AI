import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import { Tag, TrendingUp } from 'lucide-react';

interface PortfolioProps {
  theme: 'dark' | 'light';
}

export default function Portfolio({ theme }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = [
    'All',
    'AI Chatbots',
    'AI Automation',
    'Web Development',
    'Prompt Engineering',
    'Branding',
  ];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-24 relative overflow-hidden bg-navy-deep border-t border-border-custom transition-colors duration-300"
    >
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-electric/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-cyan-glow tracking-widest uppercase bg-cyan-glow/10 px-3 py-1 rounded-full border border-cyan-glow/20">
            Case Studies
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-title-color tracking-tight mt-4 mb-4 transition-colors">
            Proof of Performance
          </h2>
          <p className="font-sans text-base text-slate-text leading-relaxed transition-colors">
            Browse our deployed applications, custom integrations, and system architectures. 
            Select categories to filter case studies.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg font-sans text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-blue-electric text-white shadow-lg shadow-blue-electric/25 scale-[1.03]'
                  : 'bg-navy-card hover:bg-navy-light/40 text-slate-text border border-border-custom hover:text-title-color'
              }`}
              id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="bg-navy-card border border-border-custom rounded-xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-blue-glow/40 transition-all duration-300 group"
                id={`project-card-${project.id}`}
              >
                <div>
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden border-b border-border-custom">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Category Overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded bg-slate-950/95 border border-slate-800 font-mono text-[10px] font-bold text-cyan-glow">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Core Card Info */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-title-color mb-2 group-hover:text-blue-glow transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-text leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack badging */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2 py-0.5 rounded bg-navy-light/15 border border-border-custom text-[10px] font-mono text-title-color"
                        >
                          <Tag className="w-2.5 h-2.5 mr-1 text-slate-text" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Performance Results Panel */}
                <div className="px-6 pb-6 pt-4 border-t border-border-custom bg-navy-deep/40 rounded-b-xl flex flex-col justify-between">
                  <div className="flex items-start space-x-2">
                    <TrendingUp className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-slate-text block">
                        Verified Result
                      </span>
                      <p className="font-sans text-xs font-bold text-title-color mt-0.5 transition-colors">
                        {project.results}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State if needed */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-navy-card rounded-xl border border-dashed border-border-custom">
            <p className="font-sans text-slate-text">
              No projects deployed yet in this category. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

