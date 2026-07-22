import { motion } from 'motion/react';
import { ArrowRight, Bot, Sparkles, CheckCircle2, TrendingUp, Play } from 'lucide-react';

interface HeroProps {
  theme: 'dark' | 'light';
}

export default function Hero({ theme }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-navy-deep transition-colors duration-300"
    >
      {/* Soft human-designed editorial ambient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-blue-electric/10 blur-[120px] pointer-events-none transition-opacity duration-300"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-cyan-glow/10 blur-[120px] pointer-events-none transition-opacity duration-300"></div>

      {/* Subtle organic dotted background instead of harsh grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--bg-light)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Copy (Left 7 Columns) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
            id="hero-content"
          >
            {/* Human Tagline / Premium Badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center space-x-2 self-start px-3 py-1.5 rounded-full bg-blue-electric/10 border border-border-custom mb-6 hover:border-blue-glow/30 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-glow" />
              <span className="font-mono text-[10px] font-semibold text-blue-glow tracking-wider uppercase">
                Muhammad Soban • Enterprise AI Architecture
              </span>
            </motion.div>

            {/* Display Heading - Handcrafted Editorial Typography */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-title-color tracking-tight leading-[1.1] mb-6 transition-colors"
            >
              Building intelligent{' '}
              <span className="bg-gradient-to-r from-blue-electric via-blue-glow to-cyan-glow bg-clip-text text-transparent">
                agent workflows
              </span>{' '}
              for forward-thinking brands.
            </motion.h1>

            {/* Slogan - Genuine business-oriented value proposition */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-slate-text max-w-2xl leading-relaxed mb-8 transition-colors"
            >
              We design and deploy proprietary conversational assistants, automated cognitive back-offices, 
              and hyper-optimized data engineering pipelines that turn disconnected software systems into 
              cohesive digital assets.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-blue-electric hover:bg-blue-glow text-white font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] group text-center"
              >
                <span>Explore Core Offerings</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-navy-card hover:bg-navy-light/40 border border-border-custom text-title-color font-semibold transition-all duration-300 text-center"
              >
                Start a Discovery Brief
              </a>
            </motion.div>

            {/* Mini Trust Badges - Business Metrics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 border-t border-border-custom pt-8"
            >
              <div className="flex flex-col">
                <span className="font-display font-bold text-3xl text-title-color transition-colors">40%</span>
                <span className="font-mono text-[9px] text-slate-text uppercase tracking-widest mt-1">Operational Savings</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-3xl text-title-color transition-colors">150k+</span>
                <span className="font-mono text-[9px] text-slate-text uppercase tracking-widest mt-1">Transactions Routed</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-3xl text-title-color transition-colors">100%</span>
                <span className="font-mono text-[9px] text-slate-text uppercase tracking-widest mt-1">Data Sovereignty</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Human-crafted High Fidelity Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex justify-center items-center"
            id="hero-graphic"
          >
            {/* Frame styled to resemble a gorgeous, meticulously handcrafted UI widget */}
            <div className="relative w-full max-w-[420px] rounded-2xl bg-navy-card border border-border-custom p-6 shadow-2xl flex flex-col justify-between overflow-hidden transition-all duration-300">
              
              {/* Header inside mockup */}
              <div className="flex items-center justify-between border-b border-border-custom pb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                  <span className="font-sans text-xs font-semibold text-title-color">Agent Ingestion Monitor</span>
                </div>
                <span className="font-mono text-[9px] text-slate-text uppercase tracking-wider">
                  Live Stream
                </span>
              </div>

              {/* Active Agent Pipeline Cards (Realistic, human-centric enterprise tasks) */}
              <div className="my-5 flex flex-col space-y-3.5">
                {/* Workflow Item 1 */}
                <div className="p-3 rounded-lg bg-navy-deep/60 border border-border-custom/80 hover:border-blue-glow/30 transition-all group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-sans text-xs font-semibold text-title-color">Client Brief Analyzer</span>
                    <span className="font-mono text-[9px] text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-md font-medium flex items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Active
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-slate-text">
                    Extracted requirements for <strong>Global Trade Inc.</strong>
                  </p>
                  <div className="mt-2 w-full bg-border-custom h-1 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-full rounded-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Workflow Item 2 */}
                <div className="p-3 rounded-lg bg-navy-deep/60 border border-border-custom/80 hover:border-blue-glow/30 transition-all">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-sans text-xs font-semibold text-title-color">Executive Intelligence Sync</span>
                    <span className="font-mono text-[9px] text-blue-glow bg-blue-electric/10 px-1.5 py-0.5 rounded-md font-medium">
                      In Progress
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-slate-text">
                    Synthesizing quarterly pipeline forecasts for leadership review...
                  </p>
                  <div className="mt-2 w-full bg-border-custom h-1 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-blue-glow h-full rounded-full"
                      animate={{ width: ['35%', '85%', '35%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    ></motion.div>
                  </div>
                </div>

                {/* Workflow Item 3 */}
                <div className="p-3 rounded-lg bg-navy-deep/60 border border-border-custom/80 hover:border-blue-glow/30 transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans text-xs font-semibold text-title-color">Fulfillment Automation</span>
                    <span className="font-mono text-[9px] text-slate-text bg-border-custom px-1.5 py-0.5 rounded-md font-medium">
                      Queued
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-slate-muted">
                    Standing by for brief final signatures (DocuSign)...
                  </p>
                </div>
              </div>

              {/* Bottom activity log replaced with a gorgeous real efficiency metric */}
              <div className="border-t border-border-custom pt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-lg bg-blue-electric/10 border border-blue-glow/20">
                    <TrendingUp className="w-4 h-4 text-blue-glow" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[11px] font-semibold text-title-color">Process Velocity</span>
                    <span className="font-mono text-[9px] text-slate-text">Enterprise-wide average</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-display font-bold text-sm text-emerald-500">
                    +4.8x Speedup
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

