import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'family-immigration',
    path: '/services/family-immigration',
    label: 'Family–Based Immigration',
    description: 'Reunite with loved ones through petitions, adjustment of status, and fiancé visas.',
    image: '/service_family_park.jpg',
    accent: 'Family',
  },
  {
    id: 'business-immigration',
    path: '/services/business-immigration',
    label: 'Business & Employment',
    description: 'Work visas, PERM labor certification, and immigration solutions for employers and professionals.',
    image: '/service_business_meeting.jpg',
    accent: 'Business',
  },
  {
    id: 'deportation-defense',
    path: '/services/deportation-defense',
    label: 'Deportation Defense',
    description: 'Experienced representation in immigration court, bond hearings, and appeals.',
    image: '/service_courthouse_hall.jpg',
    accent: 'Defense',
  },
];

const ServicesOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 80%', once: true },
      });

      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 75%', once: true },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full bg-[#0B1A2F] py-16 md:py-28 lg:py-36"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">

        {/* Section Header */}
        <div ref={headRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-20">
          <div>
            <span className="caption-text text-[#C69A2C] block mb-4">What We Do</span>
            <h2 className="heading-lg text-white leading-tight max-w-md">
              Legal Services Tailored to Your Journey
            </h2>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#C69A2C] transition-colors text-sm font-medium shrink-0"
          >
            Free consultation →
          </button>
        </div>

        {/* Service Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="service-card group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ minHeight: idx === 1 ? '520px' : '440px' }}
              onClick={() => navigate(service.path)}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.label}
                className="absolute inset-0 w-full h-full object-cover img-film-grade transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2F] via-[#0B1A2F]/40 to-transparent" />

              {/* Bottom content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <span className="caption-text text-[#C69A2C] mb-3">{service.accent}</span>
                <h3 className="font-serif text-white text-xl lg:text-2xl font-semibold mb-3 leading-tight">
                  {service.label}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[#C69A2C] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-xs font-bold tracking-widest uppercase">Learn More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Top-right arrow badge */}
              <div className="absolute top-5 right-5 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            Not sure which service fits your situation? We'll help you find the right path.
          </p>
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 bg-[#C69A2C] text-[#0B1A2F] font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#C69A2C]/90 transition-colors"
          >
            View all services <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;
