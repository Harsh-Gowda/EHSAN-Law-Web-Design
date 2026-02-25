import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ServicesOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        }
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        delay: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: 'family-immigration',
      path: '/services/family-immigration',
      label: 'FAMILY–BASED',
      image: '/service_family_park.jpg',
    },
    {
      id: 'business-immigration',
      path: '/services/business-immigration',
      label: 'BUSINESS & EMPLOYMENT',
      image: '/service_business_meeting.jpg',
    },
    {
      id: 'deportation-defense',
      path: '/services/deportation-defense',
      label: 'DEPORTATION DEFENSE',
      image: '/service_courthouse_hall.jpg',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full min-h-screen bg-cream px-6 lg:px-[6vw] py-20 lg:py-32 flex flex-col lg:flex-row items-center"
    >
      {/* Left Headline Area */}
      <div ref={headlineRef} className="w-full lg:w-[26vw] mb-8 lg:mb-0 lg:mr-[4vw]">
        <h2 className="heading-lg text-navy mb-4">Our Services</h2>
        <p className="body-text text-gray mb-6">
          Comprehensive immigration support for families, businesses, and individuals.
        </p>
        <button
          onClick={() => {
            const element = document.getElementById('contact');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-navy font-medium link-underline group"
        >
          Get a free consultation
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Service Cards */}
      <div ref={cardsRef} className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 w-full lg:w-auto">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => navigate(service.path)}
            className="relative h-[50vh] lg:h-[64vh] rounded-3xl overflow-hidden cursor-pointer group card-shadow"
          >
            <img
              src={service.image}
              alt={service.label}
              className="absolute inset-0 w-full h-full object-cover img-film-grade transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="caption-text text-white/90">{service.label}</span>
              <div className="mt-2 flex items-center gap-2 text-gold opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                <span className="text-xs font-bold tracking-widest uppercase">Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
