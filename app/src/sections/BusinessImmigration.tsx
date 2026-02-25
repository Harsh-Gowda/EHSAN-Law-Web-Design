import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BusinessImmigration = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);

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
    'H-1B, L-1, O-1, TN petitions',
    'PERM labor certification',
    'EB-1/EB-2/EB-3 green cards',
    'Compliance & audit support',
  ];

  return (
    <section
      ref={sectionRef}
      id="business-immigration"
      style={{ scrollMarginTop: '80px' }}
      className="w-full bg-cream flex flex-col lg:flex-row min-h-screen"
    >
      {/* Left Info Panel */}
      <div
        ref={infoCardRef}
        className="w-full lg:w-[42%] bg-white flex flex-col justify-center px-6 lg:px-12 py-16 lg:py-20"
      >
        <p className="caption-text text-gold mb-4">Service Area</p>
        <h2 className="heading-lg text-navy mb-6">Business & Employment</h2>
        <p className="body-text text-gray mb-8">
          We help employers hire and retain global talent—and help professionals secure work authorization, permanent residence, and long-term career mobility.
        </p>
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
          src="/service_business_meeting.jpg"
          alt="Business meeting"
          className="w-full h-full object-cover img-film-grade"
        />
      </div>
    </section>
  );
};

export default BusinessImmigration;
