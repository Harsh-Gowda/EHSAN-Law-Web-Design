import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const CitizenshipSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([headlineRef.current, cardsRef.current], {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const leftServices = [
    'Eligibility review & risk assessment',
    'Application preparation & document checks',
    'Interview coaching & follow-up',
  ];

  const rightServices = [
    'N-400 & derivative citizenship',
    'Military naturalization',
    'Passport & certificate support',
  ];

  return (
    <section
      ref={sectionRef}
      id="citizenship"
      style={{ scrollMarginTop: '80px' }}
      className="w-full relative py-12 md:py-24 lg:py-32 min-h-[60vh] flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/citizenship_flag_sky.jpg"
          alt="American flag"
          className="w-full h-full object-cover img-film-grade"
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl flex flex-col md:flex-row lg:flex-row items-start md:items-center justify-between gap-10 md:gap-12 lg:gap-12">
        {/* Headline */}
        <div ref={headlineRef} className="w-full lg:w-1/3">
          <p className="caption-text text-gold mb-4">Service Area</p>
          <h2 className="heading-lg text-white mb-6">Citizenship & Naturalization</h2>
          <p className="body-text text-white/80 mb-8">The final step in your journey—prepared with care.</p>
          <button
            onClick={() => navigate('/services/citizenship')}
            className="inline-flex items-center gap-2 text-gold font-medium link-underline group"
          >
            Learn about naturalization
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 card-shadow">
            <h3 className="heading-md text-navy mb-6">Our Process</h3>
            <ul className="space-y-3">
              {leftServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-gold" />
                  </span>
                  <span className="text-navy text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 card-shadow">
            <h3 className="heading-md text-navy mb-6">We Handle</h3>
            <ul className="space-y-3">
              {rightServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-gold" />
                  </span>
                  <span className="text-navy text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitizenshipSection;
