import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'The team made a confusing process feel manageable. I always knew what was next. They were patient, thorough, and genuinely cared about our family\'s future.',
    name: 'Maria S.',
    case: 'Family Petition',
    avatar: '/testimonial_avatar_01.jpg',
  },
  {
    quote: 'Professional, thorough, and genuinely kind. I recommend Ehsan Law without hesitation. They turned what seemed impossible into a successful outcome.',
    name: 'Ahmed K.',
    case: 'Naturalization',
    avatar: '/testimonial_avatar_02.jpg',
  },
  {
    quote: 'After facing a deportation order, I was terrified. Ehsan Law fought for me every step of the way. I am still here, with my family, because of them.',
    name: 'Juliana R.',
    case: 'Deportation Defense',
    avatar: '/testimonial_avatar_01.jpg',
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );
      const cards = cardsRef.current?.querySelectorAll('.t-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0B1A2F] py-16 md:py-28 lg:py-36">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div ref={headRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-20">
          <div>
            <span className="caption-text text-[#C69A2C] block mb-4">Testimonials</span>
            <h2 className="heading-lg text-white leading-tight max-w-sm">
              Stories That<br />Inspire Us Daily
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs">
            Real outcomes, real clients. These are the people we fight for every day.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`t-card rounded-2xl p-8 lg:p-10 flex flex-col justify-between ${i === 1 ? 'bg-[#C69A2C]' : 'bg-white/5 border border-white/10'}`}
            >
              {/* Large decorative quote */}
              <div className={`font-serif text-7xl leading-none mb-6 ${i === 1 ? 'text-[#0B1A2F]/20' : 'text-white/10'}`}>&ldquo;</div>

              <p className={`text-base leading-relaxed mb-8 flex-1 ${i === 1 ? 'text-[#0B1A2F]' : 'text-white/80'}`}>
                {t.quote}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10" style={{ borderColor: i === 1 ? 'rgba(11,26,47,0.15)' : undefined }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className={`font-semibold text-sm ${i === 1 ? 'text-[#0B1A2F]' : 'text-white'}`}>{t.name}</p>
                  <p className={`text-xs mt-0.5 ${i === 1 ? 'text-[#0B1A2F]/60' : 'text-white/40'}`}>{t.case}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
