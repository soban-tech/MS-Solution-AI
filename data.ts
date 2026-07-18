import { Service, Project, Testimonial } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    iconName: 'MessageSquare',
    shortDescription: 'Intelligent, context-aware digital assistants that automate client engagement 24/7.',
    longDescription: 'Our advanced conversational AI agents go beyond rigid rule-based scripts. Powered by fine-tuned large language models, they understand intent, handle complex multi-turn inquiries, resolve issues autonomously, and seamlessly escalate to humans when needed. We construct tailored personas that mirror your company’s brand voice and integrate flawlessly into Slack, WhatsApp, websites, and custom dashboards.',
    features: [
      'Multi-turn context preservation',
      'Integration with Shopify, Stripe, and CRM platforms',
      'Cognitive sentiment analysis & custom personality design',
      'Real-time translation in 40+ languages',
      'Comprehensive analytics dashboard'
    ],
    benefit: 'Reduce customer support overhead by up to 60% while maintaining an average 98% satisfaction rate.'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    iconName: 'Cpu',
    shortDescription: 'Orchestrate intelligent workflows to eliminate repetitive cognitive tasks.',
    longDescription: 'Repetitive administration, data entry, and manual processing are relics of the past. We build autonomous agent pipelines that process invoices, screen applications, write summaries, and sync cross-platform systems. By leveraging advanced cognitive tooling and LLM-orchestration libraries, we connect legacy databases with modern AI agents to create end-to-end self-correcting workflows.',
    features: [
      'Cognitive document extraction (OCR + LLMs)',
      'Automated email dispatch & intelligent scheduling',
      'Self-healing pipelines with active error correction',
      'Integration with Make.com, Zapier, and custom APIs',
      'Legacy database data transformation'
    ],
    benefit: 'Save hundreds of engineering and admin hours per month, eliminating human error in critical processes.'
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    iconName: 'Globe',
    shortDescription: 'High-performance, secure, and visually striking custom web applications.',
    longDescription: 'A premium brand requires a premium web experience. We develop state-of-the-art websites and single-page applications optimized for blazing-fast speed, dynamic SEO, and responsive fluid design. Built on modern tech stacks like React, Vite, and Tailwind, our apps are designed with exquisite attention to typography, margins, interactive states, and responsive accessibility.',
    features: [
      'React + Vite micro-frontends with high-performance metrics',
      'Next.js server-side rendering & optimal SEO structures',
      'Highly interactive UI built with custom Tailwind & Motion',
      'API gateway connections & custom database integration',
      'Perfect responsive design for mobile, tablet, and desktop'
    ],
    benefit: 'Acquire high-converting web landing pages that load instantly and leave a lasting professional impression.'
  },
  {
    id: 'prompt-eng',
    title: 'Prompt Engineering',
    iconName: 'Terminal',
    shortDescription: 'Maximize model utility with optimized, secure, and governed prompt libraries.',
    longDescription: 'The difference between standard model outputs and reliable enterprise-grade actions lies in the quality of the prompts. We design, test, and package custom prompt architectures, semantic routers, and structured JSON validators that ensure your models produce deterministic, safe, and brand-aligned responses every single time.',
    features: [
      'Structured JSON & XML output formatting constraints',
      'Few-shot prompt calibration and system prompt designs',
      'Guardrail mechanisms to prevent jailbreaks and hallucinations',
      'Dynamic content routing based on model evaluation metrics',
      'Prompt testing pipelines across GPT, Gemini, and Claude'
    ],
    benefit: 'Ensure absolute compliance, predictability, and safety in all generative AI model touchpoints.'
  },
  {
    id: 'branding',
    title: 'Branding',
    iconName: 'Sparkles',
    shortDescription: 'Futuristic visual identity and digital styling for forward-thinking tech brands.',
    longDescription: 'We build digital identities that communicate power, intelligence, and clarity. From custom geometric logos inspired by code structures and circuit paths to comprehensive styling systems, we give tech-forward businesses a distinct visual edge. We formulate exact color theories, typography scales, spacing tokens, and asset playbooks that keep your brand unified across all mediums.',
    features: [
      'Futuristic visual logos & dynamic SVG elements',
      'Brand style guides (color theory, custom font systems)',
      'Aesthetic social media & digital marketing templates',
      'Interactive presentation templates & custom icons',
      'Comprehensive brand implementation roadmap'
    ],
    benefit: 'Establish absolute market authority with an elite, professional visual style that commands respect.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'ChatSoban AI',
    category: 'AI Chatbots',
    description: 'An advanced multi-agent customer support chatbot system capable of semantic routing and active order-lookup integrations.',
    image: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'Gemini API', 'Tailwind CSS', 'Vite'],
    results: 'Resolved 74% of support tickets autonomously with an average resolution time of under 30 seconds.'
  },
  {
    id: 'proj-2',
    title: 'Cognitive Workflow Hub',
    category: 'AI Automation',
    description: 'Intelligent PDF extractor and automatic invoicing parser that syncs structured transactions directly to corporate financial ledgers.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    techStack: ['Node.js', 'LLMs', 'PDF-parse', 'Make.com'],
    results: 'Reduced invoice processing cycle times from 3 days to under 4 minutes while completely eliminating manual data-entry errors.'
  },
  {
    id: 'proj-3',
    title: 'Apex Business Engine',
    category: 'Web Development',
    description: 'A ultra-responsive web platform featuring interactive data analytics, real-time KPI telemetry, and adaptive dark mode layout.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    techStack: ['React 19', 'Tailwind v4', 'Framer Motion', 'D3.js'],
    results: 'Delivered a perfect 100/100 Google Lighthouse performance score with beautiful custom layout rhythm.'
  },
  {
    id: 'proj-4',
    title: 'Enterprise Prompt Guard',
    category: 'Prompt Engineering',
    description: 'A governed, secure repository of system prompts and validator frameworks designed to sanitize inputs and outputs for financial LLMs.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    techStack: ['Gemini', 'LangChain', 'JSON Schema', 'Python'],
    results: 'Suppressed prompt injection and data leaks by 99.8% during rigorous adversarial red-team testing.'
  },
  {
    id: 'proj-5',
    title: 'Brand Synthesis Kit',
    category: 'Branding',
    description: 'A futuristic corporate re-brand including custom cybernetic SVG logos, precise spacing matrices, and an interactive digital styleguide.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    techStack: ['Figma', 'Vector Graphic Systems', 'Typography scales', 'CSS Variables'],
    results: 'Established a premium tech identity that raised corporate inquiry conversion rates by over 45%.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Vance',
    role: 'VP of Customer Experience',
    company: 'Quantize Solutions',
    content: 'Muhammad Soban and his team delivered an exceptional AI chatbot that handled 15,000 queries in its first month without a single glitch. It represents our brand voice perfectly and reduced live escalations instantly.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-2',
    name: 'David Thorne',
    role: 'Chief Operations Officer',
    company: 'Nexus Logistics',
    content: 'The custom automation pipelines built by MS Solutions AI have completely freed our data admins from mindless spreadsheet copying. Our operational error rate fell to zero, and task throughput tripled. Magnificent craftsmanship.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Co-Founder & CEO',
    company: 'Aethera Tech',
    content: 'I have never worked with a team so dedicated to structural precision and aesthetic quality. They rebuilt our entire frontend platform and established a digital branding guideline that immediately attracted series-A funding.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
  }
];
