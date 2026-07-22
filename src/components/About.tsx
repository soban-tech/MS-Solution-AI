import { motion } from 'motion/react';
import { Target, Users, Settings, Award, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  theme: 'dark' | 'light';
}

export default function About({ theme }: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      desc: 'To translate abstract, complex artificial intelligence models into secure, high-utility automation pipelines that multiply corporate capacity.',
    },
    {
      icon: Settings,
      title: 'Our Method',
      desc: 'By pairing state-of-the-art prompt engineering and structured validators with lightning-fast React interfaces and resilient data structures.',
    },
    {
      icon: Users,
      title: 'Our Leadership',
      desc: 'Founded by Muhammad Soban, a master AI Architect and systems designer who drives our core engineering philosophy: Code. Learn. Build. Grow.',
    },
    {
      icon: Award,
      title: 'Our Standard',
      desc: 'We refuse typical, lazy "cookie-cutter" templates. Every chatbot, workflow, and brand asset we produce undergoes rigorous testing and calibration.',
    },
  ];

  const highlights = [
    'Deterministic, jailbreak-safe prompt configurations',
    'Blazing-fast page load metrics utilizing Vite and React',
    'Custom AI agents designed for seamless legacy integration',
    'Complete transparent analytics and strict SLA compliance',
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-navy-deep border-t border-border-custom transition-colors duration-300"
    >
      {/* Decorative Blur Background Element */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-glow/5 blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-cyan-glow tracking-widest uppercase bg-cyan-glow/10 px-3 py-1 rounded-full border border-cyan-glow/20">
            About Us
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-title-color tracking-tight mt-4 mb-4 transition-colors">
            Forging Elite Cognitive Infrastructure
          </h2>
          <p className="font-sans text-base text-slate-text leading-relaxed transition-colors">
            MS Solutions AI was created on a single, uncompromising principle: AI should deliver 
            tangible operational value, not just conversational novelty. We build the interfaces 
            and workflows that power modern enterprises.
          </p>
        </div>

        {/* Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Block - Story & Bullet List (7 Columns) */}
          <div className="lg:col-span-7 space-y-6" id="about-story-block">
            <h3 className="font-display font-bold text-2xl text-title-color transition-colors">
              The MS Engineering Philosophy
            </h3>
            <p className="font-sans text-slate-text leading-relaxed transition-colors">
              At MS Solutions AI, we understand that modern operations cannot rely on erratic AI behaviors. 
              Under the direct leadership of <strong>Muhammad Soban</strong>, we specialize in hard-coding 
              predictable model outcomes, building lightweight custom web platforms, and designing integrated 
              brand spaces.
            </p>
            <p className="font-sans text-slate-text leading-relaxed transition-colors">
              We look beyond short-term API wrappers. We engineer deep corporate infrastructure—embedding 
              custom conversational chatbots, sanitizing LLM pipelines with custom guardrails, and building 
              high-speed web systems that ensure your company commands market authority.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-glow flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-sm font-medium text-title-color transition-colors">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block - Graphic/Illustration Mockup (5 Columns) */}
          <div className="lg:col-span-5" id="about-visual-block">
            <div className="relative rounded-2xl overflow-hidden border border-border-custom p-2 bg-navy-card shadow-2xl group transition-all duration-300">
              <div className="relative rounded-xl overflow-hidden aspect-video sm:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
                  alt="AI Coding Infrastructure"
                  className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-slate-950/90 border border-slate-800 backdrop-blur-sm">
                <span className="font-mono text-[10px] text-cyan-glow uppercase tracking-wider block">Lead Architect</span>
                <span className="font-display font-bold text-white text-base block">Muhammad Soban</span>
                <span className="font-mono text-[9px] text-slate-300 mt-1 block">"We do not build software to follow trends. We build to set standards."</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Card Values/Method grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          id="about-values-grid"
        >
          {values.map((val) => {
            const IconComponent = val.icon;
            return (
              <motion.div
                key={val.title}
                variants={cardVariants}
                className="bg-navy-card border border-border-custom rounded-xl p-6 hover:border-blue-glow/60 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(37,99,235,0.06)] group flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-electric/10 text-cyan-glow border border-blue-glow/20 mb-5 group-hover:bg-blue-electric/20 group-hover:text-blue-glow transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-title-color mb-2 group-hover:text-blue-glow transition-colors">
                    {val.title}
                  </h4>
                  <p className="font-sans text-sm text-slate-text leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

