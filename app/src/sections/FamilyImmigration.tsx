import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FamilyImmigration = () => {
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
    'Spouse & fiancé visas',
    'Parent & sibling petitions',
    'Adjustment of status',
    'Affidavit of support strategy',
  ];

  return (
    <section
      ref={sectionRef}
      id="family-immigration"
      style={{ scrollMarginTop: '80px' }}
      className="w-full bg-cream py-8 md:py-12 lg:py-16 min-h-[60vh] flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 items-stretch">
          {/* Large Left Image */}
          <div ref={imageCardRef} className="w-full md:w-1/2 rounded-3xl overflow-hidden card-shadow min-h-[300px] md:min-h-[500px] aspect-[4/3] md:aspect-auto">
            <img
              src="/service_family_park.jpg"
              alt="Family in park"
              className="w-full h-full object-cover img-film-grade"
            />
          </div>

          {/* Right Info Panel */}
          <div
            ref={infoCardRef}
            className="w-full md:w-1/2 bg-navy rounded-3xl card-shadow flex flex-col justify-center p-8 md:p-12 lg:p-16"
          >
            <p className="caption-text text-gold mb-4">Service Area</p>
            <h2 className="heading-lg text-white mb-6">Family–Based Immigration</h2>
            <p className="body-text text-white/80 mb-8">
              Reuniting families through petitions, adjustment of status, consular processing, and fiancé visas. We guide sponsors and beneficiaries through every form, interview, and deadline.
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
        </div>
      </div>
    </section>
  );
};

export default FamilyImmigration;
