import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactMessage } from '../types';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Layers
} from 'lucide-react';

interface ContactFormProps {
  theme: 'dark' | 'light';
}

export default function ContactForm({ theme }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI Chatbots',
    message: '',
  });

  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [submittedMessages, setSubmittedMessages] = useState<ContactMessage[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesList = [
    'AI Chatbots',
    'AI Automation',
    'Website Development',
    'Prompt Engineering',
    'Branding',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError(null);
  };

  const addLog = (text: string, delay: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, text]);
        resolve();
      }, delay);
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validations
    if (!formData.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormError('Please enter a valid business email.');
      return;
    }
    if (!formData.message.trim()) {
      setFormError('Please write an inquiry message detailing your requirements.');
      return;
    }

    setFormError(null);
    setIsSubmitting(true);
    setLogs([]);

    // Realistic human-centric intake progress
    await addLog('Verifying your business details...', 150);
    await addLog('Generating a local project blueprint schema...', 350);
    await addLog(`Aligning requested scope (${formData.service}) with engineering capacities...`, 400);
    await addLog('Queueing briefs for immediate architect review...', 300);
    await addLog('Handshake request successfully initialized.', 300);

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      company: formData.company || undefined,
      service: formData.service,
      message: formData.message,
      timestamp: new Date().toLocaleTimeString(),
    };

    setSubmittedMessages((prev) => [newMessage, ...prev]);
    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset Form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: 'AI Chatbots',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-navy-deep border-t border-border-custom transition-colors duration-300"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-electric/5 blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-glow/5 blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-cyan-glow tracking-widest uppercase bg-cyan-glow/10 px-3 py-1 rounded-full border border-cyan-glow/20">
            Get in touch
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-title-color tracking-tight mt-4 mb-4 transition-colors">
            Initialize Your Project
          </h2>
          <p className="font-sans text-base text-slate-text leading-relaxed transition-colors">
            Ready to deploy advanced conversational bots or optimize your operational workflows? 
            Contact Muhammad Soban's team today for a comprehensive specification design.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block - Coordinates & Workflow Stages (5 Columns) */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-block">
            <div className="bg-navy-card border border-border-custom rounded-xl p-6 sm:p-8 space-y-6">
              <h3 className="font-display font-bold text-xl text-title-color transition-colors">
                Direct Coordinates
              </h3>
              <p className="font-sans text-sm text-slate-text leading-relaxed">
                Connect directly with our headquarters. We respond to all technical 
                inquiries and project quote requests within 12 business hours.
              </p>

              {/* Coordinate Items */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-electric/10 border border-blue-glow/20 text-blue-glow flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-text block">
                      Email Channel
                    </span>
                    <a
                      href="mailto:contact@mssolutionsai.com"
                      className="font-sans text-sm font-semibold text-title-color hover:text-blue-glow transition-colors"
                    >
                      contact@mssolutionsai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-electric/10 border border-blue-glow/20 text-blue-glow flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-text block">
                      Direct Voice
                    </span>
                    <a
                      href="tel:+15550199"
                      className="font-sans text-sm font-semibold text-title-color hover:text-blue-glow transition-colors"
                    >
                      +1 (555) 0199-AI
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-electric/10 border border-blue-glow/20 text-blue-glow flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-text block">
                      HQ Location
                    </span>
                    <span className="font-sans text-sm font-semibold text-title-color transition-colors">
                      Silicon Valley Technology Center, CA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Workflow Highlights - Authentic and human */}
            <div className="bg-navy-card border border-border-custom rounded-xl p-6 sm:p-8 space-y-4">
              <h4 className="font-display font-bold text-sm text-title-color uppercase tracking-wider flex items-center">
                <Layers className="w-4 h-4 mr-2 text-blue-glow" /> Our Collaboration Path
              </h4>
              <div className="space-y-4 font-sans text-xs">
                <div className="flex space-x-3">
                  <span className="font-mono text-blue-glow font-bold">01</span>
                  <p className="text-slate-text leading-normal">
                    <strong className="text-title-color">Discovery Intake:</strong> Submit your brief to explore targets and compatibility.
                  </p>
                </div>
                <div className="flex space-x-3">
                  <span className="font-mono text-blue-glow font-bold">02</span>
                  <p className="text-slate-text leading-normal">
                    <strong className="text-title-color">SLA Architecture:</strong> Map accurate specifications, prompt-safeties, and cost deliverables.
                  </p>
                </div>
                <div className="flex space-x-3">
                  <span className="font-mono text-blue-glow font-bold">03</span>
                  <p className="text-slate-text leading-normal">
                    <strong className="text-title-color">Core Integration:</strong> Assemble models, custom guardrails, and React frontend states.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block - Dynamic Form (7 Columns) */}
          <div className="lg:col-span-7 bg-navy-card border border-border-custom rounded-xl p-6 sm:p-10 shadow-2xl transition-all duration-300" id="contact-form-block">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                /* Success screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  className="text-center py-8 space-y-6"
                  key="success-form-state"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-electric/10 text-blue-glow border border-blue-glow/20">
                    <CheckCircle className="w-10 h-10 animate-[bounce_1.5s_ease-in-out_infinite]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl text-title-color">
                      Inquiry Packaged Successfully
                    </h3>
                    <p className="font-sans text-sm text-slate-text max-w-md mx-auto leading-relaxed">
                      Your business inquiry has been recorded. 
                      Muhammad Soban and our core engineering leads will analyze your requirements shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-electric hover:bg-blue-glow text-white font-semibold transition-all text-sm cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                /* Standard form state */
                <motion.form
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                  key="normal-form-state"
                  noValidate
                >
                  <div className="flex items-center space-x-2 border-b border-border-custom pb-4 mb-2">
                    <Sparkles className="w-4.5 h-4.5 text-blue-glow" />
                    <h3 className="font-display font-bold text-lg text-title-color">
                      Inquiry Details Form
                    </h3>
                  </div>

                  {/* Form Error alert */}
                  {formError && (
                    <div className="flex items-center space-x-2.5 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-200 text-xs font-semibold">
                      <AlertCircle className="w-4.5 h-4.5 text-red-400 flex-shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name" className="font-mono text-[10px] text-slate-text uppercase tracking-wider font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="px-4 py-3 bg-navy-deep border border-border-custom rounded-lg text-title-color font-sans text-sm placeholder:text-slate-text/50 focus:outline-none focus:border-blue-glow/60 transition-all focus:ring-1 focus:ring-blue-glow/20"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="email" className="font-mono text-[10px] text-slate-text uppercase tracking-wider font-semibold">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="px-4 py-3 bg-navy-deep border border-border-custom rounded-lg text-title-color font-sans text-sm placeholder:text-slate-text/50 focus:outline-none focus:border-blue-glow/60 transition-all focus:ring-1 focus:ring-blue-glow/20"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="company" className="font-mono text-[10px] text-slate-text uppercase tracking-wider font-semibold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enterprise Inc."
                        className="px-4 py-3 bg-navy-deep border border-border-custom rounded-lg text-title-color font-sans text-sm placeholder:text-slate-text/50 focus:outline-none focus:border-blue-glow/60 transition-all focus:ring-1 focus:ring-blue-glow/20"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Service Requested */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="service" className="font-mono text-[10px] text-slate-text uppercase tracking-wider font-semibold">
                        Target Service
                      </label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="px-4 py-3 bg-navy-deep border border-border-custom rounded-lg text-title-color font-sans text-sm focus:outline-none focus:border-blue-glow/60 transition-all focus:ring-1 focus:ring-blue-glow/20 cursor-pointer"
                        disabled={isSubmitting}
                      >
                        {servicesList.map((service) => (
                          <option key={service} value={service} className="bg-navy-card text-title-color">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="message" className="font-mono text-[10px] text-slate-text uppercase tracking-wider font-semibold">
                      Inquiry Details *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Outline your project timeline, requirements, or integration constraints..."
                      className="px-4 py-3 bg-navy-deep border border-border-custom rounded-lg text-title-color font-sans text-sm placeholder:text-slate-text/50 focus:outline-none focus:border-blue-glow/60 transition-all focus:ring-1 focus:ring-blue-glow/20 resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-6 py-3.5 rounded-lg bg-blue-electric hover:bg-blue-glow text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-electric/25 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                    disabled={isSubmitting}
                    id="submit-telemetry-btn"
                  >
                    <span>
                      {isSubmitting ? 'Processing Requirements...' : 'Submit Inquiry'}
                    </span>
                    <Send className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Simulated Live Logs - redesigned to look premium & useful */}
            {logs.length > 0 && (
              <div className="mt-8 p-4 rounded-lg bg-navy-deep border border-border-custom font-mono text-[11px] space-y-1 text-slate-text max-h-40 overflow-y-auto shadow-inner" id="simulated-terminal-logs">
                <div className="flex items-center space-x-1.5 border-b border-border-custom pb-1.5 mb-2 text-blue-glow font-bold text-[10px] uppercase tracking-widest">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Validation Flow</span>
                </div>
                {logs.map((log, idx) => (
                  <div key={idx} className={idx === logs.length - 1 ? 'text-blue-glow font-medium' : 'text-slate-text'}>
                    → {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

