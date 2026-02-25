import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.testimonial-card');
      if (cards) {
        gsap.fromTo(cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      quote: "The team made a confusing process feel manageable. I always knew what was next. They were patient, thorough, and genuinely cared about our family's future.",
      name: 'Maria S.',
      case: 'Family Petition',
      avatar: '/testimonial_avatar_01.jpg',
    },
    {
      quote: "Professional, thorough, and genuinely kind. I recommend Ehsan Law without hesitation. They turned what seemed impossible into a successful outcome.",
      name: 'Ahmed K.',
      case: 'Naturalization',
      avatar: '/testimonial_avatar_02.jpg',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-cream py-20 lg:py-32"
    >
      <div className="px-6 lg:px-[6vw]">
        {/* Heading */}
        <div ref={headingRef} className="mb-12 lg:mb-16">
          <h2 className="heading-lg text-navy mb-4">
            What Clients Say
          </h2>
          <p className="body-text text-gray max-w-2xl">
            Our clients' success stories inspire us every day. Here's what they have to say about working with Ehsan Law.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-3xl p-8 lg:p-10 card-shadow"
            >
              <Quote className="w-10 h-10 text-gold/30 mb-6" />
              
              <p className="body-text text-navy mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray">{testimonial.case}</p>
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
