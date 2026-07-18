export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  benefit: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'All' | 'AI Chatbots' | 'AI Automation' | 'Web Development' | 'Prompt Engineering' | 'Branding';
  description: string;
  image: string;
  techStack: string[];
  results: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  timestamp: string;
}
