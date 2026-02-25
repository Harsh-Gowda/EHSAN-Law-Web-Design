import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const AsylumSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([infoCardRef.current, imageCardRef.current], {
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

  const services = [
    'Affirmative & defensive asylum',
    'Withholding of removal & CAT',
    'T visa (trafficking) & U visa (victims of crime)',
    'VAWA self-petitions',
  ];

  return (
    <section
      ref={sectionRef}
      id="asylum"
      style={{ scrollMarginTop: '80px' }}
      className="w-full bg-cream flex flex-col lg:flex-row min-h-screen"
    >
      {/* Left Info Panel */}
      <div
        ref={infoCardRef}
        className="w-full lg:w-[42%] bg-white flex flex-col justify-center px-6 lg:px-12 py-16 lg:py-20"
      >
        <p className="caption-text text-gold mb-4">Service Area</p>
        <h2 className="heading-lg text-navy mb-6">Asylum & Humanitarian Protection</h2>
        <p className="body-text text-gray mb-8">
          We represent people seeking safety from persecution, violence, and exploitation. We handle affirmative and defensive asylum, as well as T and U visas.
        </p>
        <button
          onClick={() => navigate('/services/asylum')}
          className="inline-flex items-center gap-2 text-navy font-medium link-underline group mb-8"
        >
          Learn about protection options
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-gold" />
              </span>
              <span className="text-navy text-sm">{service}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image */}
      <div ref={imageCardRef} className="w-full lg:w-[58%] h-[45vh] lg:min-h-screen">
        <img
          src="/asylum_support_bench.jpg"
          alt="Supportive conversation"
          className="w-full h-full object-cover img-film-grade"
        />
      </div>
    </section>
  );
};

export default AsylumSection;
