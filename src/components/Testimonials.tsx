import { TESTIMONIALS_DATA } from '../data';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  theme: 'dark' | 'light';
}

export default function Testimonials({ theme }: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden bg-navy-deep border-t border-border-custom transition-colors duration-300"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-glow/5 blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-glow/5 blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-cyan-glow tracking-widest uppercase bg-cyan-glow/10 px-3 py-1 rounded-full border border-cyan-glow/20">
            Endorsements
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-title-color tracking-tight mt-4 mb-4 transition-colors">
            Client Success Stories
          </h2>
          <p className="font-sans text-base text-slate-text leading-relaxed transition-colors">
            Read first-hand accounts of how MS Solutions AI helped corporate leaders streamline 
            workflows, deploy intelligent assistants, and solidify their visual digital presence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="testimonials-grid"
        >
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-navy-card border border-border-custom rounded-xl p-8 shadow-xl flex flex-col justify-between hover:border-blue-glow/40 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(37,99,235,0.04)]"
              id={`testimonial-card-${t.id}`}
            >
              {/* Card Header: Rating & Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1" aria-label={`Rating: ${t.rating} stars`}>
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-glow/20 group-hover:text-blue-glow/40 transition-colors duration-300" />
              </div>

              {/* Card Body: Quote text */}
              <p className="font-sans text-sm sm:text-base text-slate-text italic leading-relaxed mb-8 flex-1">
                "{t.content}"
              </p>

              {/* Card Footer: Profile metadata */}
              <div className="flex items-center space-x-4 pt-6 border-t border-border-custom">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-border-custom bg-navy-dark">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-title-color leading-snug transition-colors">
                    {t.name}
                  </h4>
                  <p className="font-sans text-[11px] text-slate-text">
                    {t.role} • <span className="text-blue-glow font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

