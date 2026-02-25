import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DeportationDefense = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([imageCardRef.current, infoCardRef.current], {
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
    'Cancellation of removal',
    'Adjustment of status in court',
    'Asylum & withholding of removal',
    'Bond hearings & appeals',
  ];

  return (
    <section
      ref={sectionRef}
      id="deportation-defense"
      style={{ scrollMarginTop: '80px' }}
      className="w-full bg-cream flex flex-col lg:flex-row min-h-screen py-20 lg:py-32"
    >
      {/* Left Image */}
      <div ref={imageCardRef} className="w-full lg:w-[58%] h-[45vh] lg:min-h-screen">
        <img
          src="/service_courthouse_hall.jpg"
          alt="Courthouse hall"
          className="w-full h-full object-cover img-film-grade"
        />
      </div>

      {/* Right Navy Info Panel */}
      <div
        ref={infoCardRef}
        className="w-full lg:w-[42%] bg-navy flex flex-col justify-center px-6 lg:px-12 py-16 lg:py-20"
      >
        <p className="caption-text text-gold mb-4">Service Area</p>
        <h2 className="heading-lg text-white mb-6">Deportation Defense</h2>
        <p className="body-text text-white/80 mb-8">
          If you or a loved one is in removal proceedings, we act quickly to assess relief options, prepare evidence, and advocate in court—with clarity and urgency.
        </p>
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-gold" />
              </span>
              <span className="text-white/90 text-sm">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DeportationDefense;
