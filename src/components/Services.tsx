import { useState, ComponentType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';
import {
  MessageSquare,
  Cpu,
  Globe,
  Terminal,
  Sparkles,
  ArrowRight,
  Check,
  X,
  Bot
} from 'lucide-react';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  MessageSquare,
  Cpu,
  Globe,
  Terminal,
  Sparkles,
};

interface ServicesProps {
  theme: 'dark' | 'light';
}

export default function Services({ theme }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden bg-navy-deep border-t border-border-custom transition-colors duration-300"
    >
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/3 left-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-blue-electric/5 blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-cyan-glow/5 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="services-header">
          <span className="font-mono text-xs font-bold text-cyan-glow tracking-widest uppercase bg-cyan-glow/10 px-3 py-1 rounded-full border border-cyan-glow/20">
            Our Expertise
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-title-color tracking-tight mt-4 mb-4 transition-colors">
            Advanced Engineering Capabilities
          </h2>
          <p className="font-sans text-base text-slate-text leading-relaxed transition-colors">
            We provide deep technological solutions tailored to modern digital infrastructure. 
            Select an expertise area to inspect technical specifications and business deliverables.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="services-grid"
        >
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName] || Bot;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-navy-card border border-border-custom rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-blue-glow/55 hover:-translate-y-1 group cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(37,99,235,0.04)]"
                onClick={() => setSelectedService(service)}
                id={`service-card-${service.id}`}
              >
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-electric/10 text-cyan-glow border border-blue-glow/25 mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-electric group-hover:to-cyan-glow group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-title-color mb-3 group-hover:text-blue-glow transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-text leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="flex items-center text-sm font-semibold text-title-color group-hover:text-blue-glow transition-colors pt-4 border-t border-border-custom">
                  <span>Inspect Spec Sheet</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Interactive Detail Overlay Modal */}
      <AnimatePresence>
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
            id="service-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl rounded-2xl bg-navy-card border border-border-custom p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              id="service-modal-content"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-1.5 rounded-lg text-slate-text hover:text-title-color hover:bg-navy-light/50 transition-all cursor-pointer"
                id="close-service-modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-electric/15 text-cyan-glow border border-blue-glow/30">
                  {(() => {
                    const ModalIcon = iconMap[selectedService.iconName] || Bot;
                    return <ModalIcon className="w-8 h-8" />;
                  })()}
                </div>
                <div>
                  <span className="font-mono text-[10px] text-cyan-glow tracking-widest uppercase">
                    Service Blueprint
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-title-color">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Long description */}
              <p className="font-sans text-sm sm:text-base text-slate-text leading-relaxed mb-8">
                {selectedService.longDescription}
              </p>

              {/* Technical deliverables / Features */}
              <div className="mb-8">
                <h4 className="font-display font-bold text-sm text-title-color uppercase tracking-wider mb-4 border-b border-border-custom pb-2">
                  Technical Deliverables
                </h4>
                <div className="space-y-3">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-cyan-glow/10 flex items-center justify-center border border-cyan-glow/25">
                        <Check className="w-3 h-3 text-cyan-glow" />
                      </div>
                      <span className="font-sans text-sm font-medium text-title-color">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic business benefit card */}
              <div className="bg-blue-electric/10 border border-blue-glow/30 rounded-xl p-5 mb-8">
                <span className="font-mono text-[10px] text-cyan-glow uppercase tracking-wider block mb-1">
                  Primary Value Add
                </span>
                <p className="font-sans text-sm font-semibold text-title-color leading-relaxed">
                  {selectedService.benefit}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-electric hover:bg-blue-glow text-white font-semibold transition-all text-center"
                >
                  Configure This Service
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-navy-card hover:bg-navy-light/40 border border-border-custom text-title-color font-semibold transition-all text-center cursor-pointer"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

